import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ImageUpload } from './ImageUpload';
import { Save } from 'lucide-react';

interface HeroSettings {
  title: string;
  subtitle: string;
  background_image: string;
}

export function HeroManagement() {
  const [settings, setSettings] = useState<HeroSettings>({
    title: 'KOGTI',
    subtitle: 'BEAUTY STUDIO',
    background_image: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('setting_key, setting_value')
        .in('setting_key', ['hero_title', 'hero_subtitle', 'hero_background']);

      if (error) throw error;

      const settingsMap = data?.reduce((acc, item) => {
        acc[item.setting_key] = item.setting_value || '';
        return acc;
      }, {} as Record<string, string>) || {};

      setSettings({
        title: settingsMap.hero_title || 'KOGTI',
        subtitle: settingsMap.hero_subtitle || 'BEAUTY STUDIO',
        background_image: settingsMap.hero_background || '/lovable-uploads/3488dd88-10f5-4a10-80a0-f01ed8e005b5.png'
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить настройки героя",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async () => {
    setSaving(true);
    try {
      const settingsToSave = [
        { setting_key: 'hero_title', setting_value: settings.title },
        { setting_key: 'hero_subtitle', setting_value: settings.subtitle },
        { setting_key: 'hero_background', setting_value: settings.background_image }
      ];

      for (const setting of settingsToSave) {
        const { error } = await supabase
          .from('site_settings')
          .upsert(setting, { 
            onConflict: 'setting_key'
          });
        
        if (error) throw error;
      }

      toast({
        title: "Успешно сохранено",
        description: "Настройки героя обновлены"
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить настройки",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Управление главным блоком
        </h2>
      </div>

      <Card className="shadow-lg border-primary/20">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
          <CardTitle className="text-xl text-primary">Настройки героя</CardTitle>
          <CardDescription>Измените заголовки и фоновое изображение главного блока</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Основной заголовок (H1)</Label>
                <Input
                  id="title"
                  value={settings.title}
                  onChange={(e) => setSettings(prev => ({...prev, title: e.target.value}))}
                  placeholder="KOGTI"
                />
              </div>

              <div>
                <Label htmlFor="subtitle">Подзаголовок</Label>
                <Input
                  id="subtitle"
                  value={settings.subtitle}
                  onChange={(e) => setSettings(prev => ({...prev, subtitle: e.target.value}))}
                  placeholder="BEAUTY STUDIO"
                />
              </div>
            </div>

            <div>
              <ImageUpload
                currentImageUrl={settings.background_image}
                onImageUpload={(url) => setSettings(prev => ({...prev, background_image: url}))}
                label="Фоновое изображение"
                folder="hero"
              />
              
              {settings.background_image && (
                <div className="mt-4">
                  <Label>Текущее изображение:</Label>
                  <div className="mt-2 w-full h-32 rounded-lg overflow-hidden border border-muted bg-muted/50">
                    <img 
                      src={settings.background_image} 
                      alt="Hero background preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-muted">
            <Button 
              onClick={saveSettings} 
              disabled={saving}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Save className="h-4 w-4" />
              {saving ? 'Сохранение...' : 'Сохранить изменения'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}