import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Heading {
  key: string;
  label: string;
  value: string;
}

const HeadingsManagement = () => {
  const [headings, setHeadings] = useState<Heading[]>([
    { key: 'hero_h1_title', label: 'Главная - Заголовок H1 (основной)', value: '' },
    { key: 'hero_h1_subtitle', label: 'Главная - Подзаголовок H1 (после +)', value: '' },
    { key: 'services_h2', label: 'Услуги - Заголовок H2', value: '' },
    { key: 'services_h3', label: 'Услуги - Подзаголовок H3', value: '' },
    { key: 'team_h2', label: 'Команда - Заголовок H2', value: '' },
    { key: 'team_h3', label: 'Команда - Подзаголовок H3', value: '' },
    { key: 'contact_h2', label: 'Контакты - Заголовок H2', value: '' },
    { key: 'contact_h3', label: 'Контакты - Подзаголовок H3', value: '' },
    { key: 'gallery_h2', label: 'Галерея - Заголовок H2', value: '' },
    { key: 'gallery_h3', label: 'Галерея - Подзаголовок H3', value: '' },
  ]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchHeadings();
  }, []);

  const fetchHeadings = async () => {
    try {
      const { data } = await supabase
        .from('site_settings')
        .select('setting_key, setting_value')
        .in('setting_key', headings.map(h => h.key));

      if (data) {
        const settingsMap = data.reduce((acc, item) => {
          acc[item.setting_key] = item.setting_value || '';
          return acc;
        }, {} as Record<string, string>);

        setHeadings(current => 
          current.map(heading => ({
            ...heading,
            value: settingsMap[heading.key] || ''
          }))
        );
      }
    } catch (error) {
      console.error('Error fetching headings:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить заголовки",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const saveHeadings = async () => {
    setSaving(true);
    try {
      const updates = headings.map(heading => ({
        setting_key: heading.key,
        setting_value: heading.value,
        setting_type: 'text'
      }));

      const { error } = await supabase
        .from('site_settings')
        .upsert(updates, { onConflict: 'setting_key' });

      if (error) throw error;

      toast({
        title: "Успешно сохранено",
        description: "Заголовки обновлены",
      });
    } catch (error) {
      console.error('Error saving headings:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить заголовки",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const updateHeading = (key: string, value: string) => {
    setHeadings(current =>
      current.map(heading =>
        heading.key === key ? { ...heading, value } : heading
      )
    );
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Управление заголовками</h2>
          <p className="text-muted-foreground">
            Редактирование заголовков H2 и H3 для различных секций сайта
          </p>
        </div>
        <Button onClick={saveHeadings} disabled={saving}>
          {saving ? 'Сохранение...' : 'Сохранить изменения'}
        </Button>
      </div>

      <div className="grid gap-6">
        {headings.reduce((acc, heading, index) => {
          if (index % 2 === 0) {
            const nextHeading = headings[index + 1];
            const sectionName = heading.key.split('_')[0];
            
            acc.push(
              <Card key={sectionName}>
                <CardHeader>
                  <CardTitle className="capitalize">{sectionName}</CardTitle>
                  <CardDescription>
                    Заголовки для секции {sectionName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor={heading.key}>{heading.label}</Label>
                    <Input
                      id={heading.key}
                      value={heading.value}
                      onChange={(e) => updateHeading(heading.key, e.target.value)}
                      placeholder="Введите заголовок H2"
                    />
                  </div>
                  {nextHeading && (
                    <div>
                      <Label htmlFor={nextHeading.key}>{nextHeading.label}</Label>
                      <Input
                        id={nextHeading.key}
                        value={nextHeading.value}
                        onChange={(e) => updateHeading(nextHeading.key, e.target.value)}
                        placeholder="Введите подзаголовок H3"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          }
          return acc;
        }, [] as JSX.Element[])}
      </div>
    </div>
  );
};

export default HeadingsManagement;