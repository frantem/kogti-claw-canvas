import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ImageUpload } from './ImageUpload';
import { Save, Plus, Trash2 } from 'lucide-react';

interface HeroSettings {
  title: string;
  subtitle: string;
  background_image: string;
}

interface SEOSettings {
  title: string;
  description: string;
  keywords: string;
}

interface BookingSettings {
  service_title: string;
  service_subtitle: string;
  service_image: string;
  master_name: string;
  master_avatar: string;
  master_photos: string[];
  booking_link: string;
}

export function HeroManagement() {
  const [settings, setSettings] = useState<HeroSettings>({
    title: 'KOGTI',
    subtitle: 'BEAUTY STUDIO',
    background_image: ''
  });
  
  const [seoSettings, setSeoSettings] = useState<SEOSettings>({
    title: '',
    description: '',
    keywords: ''
  });
  
  const [bookingSettings, setBookingSettings] = useState<BookingSettings>({
    service_title: '',
    service_subtitle: '',
    service_image: '',
    master_name: '',
    master_avatar: '',
    master_photos: [],
    booking_link: ''
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
        .in('setting_key', [
          'hero_title', 'hero_subtitle', 'hero_background',
          'seo_title', 'seo_description', 'seo_keywords',
          'booking_service_title', 'booking_service_subtitle', 'booking_service_image',
          'booking_master_name', 'booking_master_avatar',
          'booking_master_photos', 'booking_link'
        ]);

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

      setSeoSettings({
        title: settingsMap.seo_title || '',
        description: settingsMap.seo_description || '',
        keywords: settingsMap.seo_keywords || ''
      });

      let masterPhotos = [];
      try {
        masterPhotos = JSON.parse(settingsMap.booking_master_photos || '[]');
      } catch (e) {
        masterPhotos = [];
      }

      setBookingSettings({
        service_title: settingsMap.booking_service_title || '',
        service_subtitle: settingsMap.booking_service_subtitle || '',
        service_image: settingsMap.booking_service_image || '',
        master_name: settingsMap.booking_master_name || '',
        master_avatar: settingsMap.booking_master_avatar || '',
        master_photos: masterPhotos,
        booking_link: settingsMap.booking_link || ''
      });
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

  const saveSettings = async () => {
    setSaving(true);
    try {
      const settingsToSave = [
        // Hero settings
        { setting_key: 'hero_title', setting_value: settings.title },
        { setting_key: 'hero_subtitle', setting_value: settings.subtitle },
        { setting_key: 'hero_background', setting_value: settings.background_image },
        
        // SEO settings
        { setting_key: 'seo_title', setting_value: seoSettings.title },
        { setting_key: 'seo_description', setting_value: seoSettings.description },
        { setting_key: 'seo_keywords', setting_value: seoSettings.keywords },
        
        // Booking settings
        { setting_key: 'booking_service_title', setting_value: bookingSettings.service_title },
        { setting_key: 'booking_service_subtitle', setting_value: bookingSettings.service_subtitle },
        { setting_key: 'booking_service_image', setting_value: bookingSettings.service_image },
        { setting_key: 'booking_master_name', setting_value: bookingSettings.master_name },
        { setting_key: 'booking_master_avatar', setting_value: bookingSettings.master_avatar },
        { setting_key: 'booking_master_photos', setting_value: JSON.stringify(bookingSettings.master_photos) },
        { setting_key: 'booking_link', setting_value: bookingSettings.booking_link }
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
        description: "Все настройки обновлены"
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

  const addMasterPhoto = (url: string) => {
    setBookingSettings(prev => ({
      ...prev,
      master_photos: [...prev.master_photos, url]
    }));
  };

  const removeMasterPhoto = (index: number) => {
    setBookingSettings(prev => ({
      ...prev,
      master_photos: prev.master_photos.filter((_, i) => i !== index)
    }));
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Управление главным блоком
        </h2>
      </div>

      {/* SEO Settings */}
      <Card className="shadow-lg border-primary/20">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardTitle className="text-xl text-green-600">SEO настройки</CardTitle>
          <CardDescription>Настройте мета-теги для улучшения поисковой оптимизации</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div>
            <Label htmlFor="seo-title">SEO заголовок</Label>
            <Input
              id="seo-title"
              value={seoSettings.title}
              onChange={(e) => setSeoSettings(prev => ({...prev, title: e.target.value}))}
              placeholder="KOGTI Beauty Studio - Профессиональный маникюр и педикюр"
            />
          </div>
          <div>
            <Label htmlFor="seo-description">SEO описание</Label>
            <Textarea
              id="seo-description"
              value={seoSettings.description}
              onChange={(e) => setSeoSettings(prev => ({...prev, description: e.target.value}))}
              placeholder="Салон красоты KOGTI - профессиональный маникюр, педикюр и nail-арт..."
              rows={3}
            />
          </div>
          <div>
            <Label htmlFor="seo-keywords">Ключевые слова</Label>
            <Input
              id="seo-keywords"
              value={seoSettings.keywords}
              onChange={(e) => setSeoSettings(prev => ({...prev, keywords: e.target.value}))}
              placeholder="маникюр, педикюр, nail-арт, салон красоты"
            />
          </div>
        </CardContent>
      </Card>

      {/* Hero Settings */}
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
        </CardContent>
      </Card>

      {/* Booking Card Settings */}
      <Card className="shadow-lg border-primary/20">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
          <CardTitle className="text-xl text-orange-600">Настройки карточки записи</CardTitle>
          <CardDescription>Управляйте информацией в карточке записи</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="service-title">Название услуги</Label>
                <Input
                  id="service-title"
                  value={bookingSettings.service_title}
                  onChange={(e) => setBookingSettings(prev => ({...prev, service_title: e.target.value}))}
                  placeholder="Маникюр"
                />
              </div>
              <div>
                <Label htmlFor="service-subtitle">Подзаголовок услуги</Label>
                <Input
                  id="service-subtitle"
                  value={bookingSettings.service_subtitle}
                  onChange={(e) => setBookingSettings(prev => ({...prev, service_subtitle: e.target.value}))}
                  placeholder="+ pedicure"
                />
              </div>
              <div>
                <ImageUpload
                  currentImageUrl={bookingSettings.service_image}
                  onImageUpload={(url) => setBookingSettings(prev => ({...prev, service_image: url}))}
                  label="Изображение услуги"
                  folder="booking"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="master-name">Имя мастера</Label>
                <Input
                  id="master-name"
                  value={bookingSettings.master_name}
                  onChange={(e) => setBookingSettings(prev => ({...prev, master_name: e.target.value}))}
                  placeholder="Мастер: Аня"
                />
              </div>
              <div>
                <ImageUpload
                  currentImageUrl={bookingSettings.master_avatar}
                  onImageUpload={(url) => setBookingSettings(prev => ({...prev, master_avatar: url}))}
                  label="Аватар мастера"
                  folder="masters"
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <Label htmlFor="booking-link">Ссылка для записи</Label>
              <Input
                id="booking-link"
                value={bookingSettings.booking_link}
                onChange={(e) => setBookingSettings(prev => ({...prev, booking_link: e.target.value}))}
                placeholder="https://dikidi.ru/#widget=192147"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <Label>Работы мастера</Label>
              <ImageUpload
                currentImageUrl=""
                onImageUpload={addMasterPhoto}
                label=""
                folder="works"
                trigger={
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Добавить фото
                  </Button>
                }
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {bookingSettings.master_photos.map((photo, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-square rounded-lg overflow-hidden border border-muted bg-muted/50">
                    <img 
                      src={photo} 
                      alt={`Master work ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeMasterPhoto(index)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 pt-4">
        <Button 
          onClick={saveSettings} 
          disabled={saving}
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          <Save className="h-4 w-4" />
          {saving ? 'Сохранение...' : 'Сохранить все изменения'}
        </Button>
      </div>
    </div>
  );
}