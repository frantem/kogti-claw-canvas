import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Save } from 'lucide-react';

interface SiteSetting {
  id: string;
  setting_key: string;
  setting_value: string;
  setting_type: string;
}

export function SettingsManagement() {
  const [settings, setSettings] = useState<SiteSetting[]>([]);
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
        .select('*')
        .order('setting_key');

      if (error) throw error;
      setSettings(data || []);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить настройки",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key: string, value: string) => {
    try {
      setSaving(true);
      
      const { error } = await supabase
        .from('site_settings')
        .upsert({ 
          setting_key: key, 
          setting_value: value,
          setting_type: 'text'
        }, {
          onConflict: 'setting_key'
        });

      if (error) throw error;
      
      // Update local state
      setSettings(prev => prev.map(setting => 
        setting.setting_key === key 
          ? { ...setting, setting_value: value }
          : setting
      ));

      toast({ title: "Настройка сохранена" });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить настройку",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
  };

  const updateSettingValue = (key: string, value: string) => {
    setSettings(prev => prev.map(setting => 
      setting.setting_key === key 
        ? { ...setting, setting_value: value }
        : setting
    ));
  };

  const getSetting = (key: string) => {
    return settings.find(s => s.setting_key === key)?.setting_value || '';
  };

  const saveAllSettings = async () => {
    try {
      setSaving(true);
      
      const updates = settings.map(setting => ({
        setting_key: setting.setting_key,
        setting_value: setting.setting_value,
        setting_type: setting.setting_type
      }));

      const { error } = await supabase
        .from('site_settings')
        .upsert(updates, { onConflict: 'setting_key' });

      if (error) throw error;
      
      toast({ title: "Все настройки сохранены" });
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
        <h2 className="text-2xl font-bold">Настройки сайта</h2>
        <Button 
          onClick={saveAllSettings} 
          disabled={saving}
          className="flex items-center gap-2"
        >
          <Save className="h-4 w-4" />
          Сохранить все
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Основная информация</CardTitle>
            <CardDescription>Базовые настройки студии</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="studio_name">Название студии</Label>
              <Input
                id="studio_name"
                value={getSetting('studio_name')}
                onChange={(e) => updateSettingValue('studio_name', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="studio_description">Описание студии</Label>
              <Textarea
                id="studio_description"
                value={getSetting('studio_description')}
                onChange={(e) => updateSettingValue('studio_description', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Контактная информация</CardTitle>
            <CardDescription>Контакты для связи</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="contact_phone">Телефон</Label>
              <Input
                id="contact_phone"
                value={getSetting('contact_phone')}
                onChange={(e) => updateSettingValue('contact_phone', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="contact_email">Email</Label>
              <Input
                id="contact_email"
                type="email"
                value={getSetting('contact_email')}
                onChange={(e) => updateSettingValue('contact_email', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="address">Адрес</Label>
              <Input
                id="address"
                value={getSetting('address')}
                onChange={(e) => updateSettingValue('address', e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="work_hours">Часы работы</Label>
              <Input
                id="work_hours"
                value={getSetting('work_hours')}
                onChange={(e) => updateSettingValue('work_hours', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}