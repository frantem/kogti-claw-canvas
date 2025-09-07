import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface Master {
  id: string;
  name: string;
  title: string;
  experience: string;
  description: string;
  avatar_url: string;
  images: string[];
  booking_link: string;
  sort_order: number;
  is_active: boolean;
}

export function MastersManagement() {
  const [masters, setMasters] = useState<Master[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const emptyMaster: Omit<Master, 'id'> = {
    name: '',
    title: '',
    experience: '',
    description: '',
    avatar_url: '',
    images: [],
    booking_link: '',
    sort_order: 0,
    is_active: true
  };

  const [formData, setFormData] = useState(emptyMaster);

  useEffect(() => {
    fetchMasters();
  }, []);

  const fetchMasters = async () => {
    try {
      const { data, error } = await supabase
        .from('masters')
        .select('*')
        .order('sort_order');

      if (error) throw error;
      setMasters(data || []);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить мастеров",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const saveMaster = async () => {
    try {
      if (isCreating) {
        const { error } = await supabase
          .from('masters')
          .insert([formData]);
        
        if (error) throw error;
        toast({ title: "Мастер добавлен успешно" });
      } else if (editingId) {
        const { error } = await supabase
          .from('masters')
          .update(formData)
          .eq('id', editingId);
        
        if (error) throw error;
        toast({ title: "Мастер обновлен успешно" });
      }

      await fetchMasters();
      resetForm();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить мастера",
        variant: "destructive"
      });
    }
  };

  const deleteMaster = async (id: string) => {
    if (!confirm('Удалить мастера?')) return;

    try {
      const { error } = await supabase
        .from('masters')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      await fetchMasters();
      toast({ title: "Мастер удален" });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось удалить мастера",
        variant: "destructive"
      });
    }
  };

  const startEdit = (master: Master) => {
    setFormData(master);
    setEditingId(master.id);
    setIsCreating(false);
  };

  const startCreate = () => {
    setFormData(emptyMaster);
    setIsCreating(true);
    setEditingId(null);
  };

  const resetForm = () => {
    setFormData(emptyMaster);
    setEditingId(null);
    setIsCreating(false);
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Управление мастерами</h2>
        <Button onClick={startCreate} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Добавить мастера
        </Button>
      </div>

      {(isCreating || editingId) && (
        <Card>
          <CardHeader>
            <CardTitle>{isCreating ? 'Новый мастер' : 'Редактировать мастера'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                />
              </div>
              <div>
                <Label htmlFor="title">Должность</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="experience">Опыт</Label>
                <Input
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData(prev => ({...prev, experience: e.target.value}))}
                />
              </div>
              <div>
                <Label htmlFor="booking_link">Ссылка для записи</Label>
                <Input
                  id="booking_link"
                  value={formData.booking_link}
                  onChange={(e) => setFormData(prev => ({...prev, booking_link: e.target.value}))}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Описание</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
              />
            </div>

            <div>
              <Label htmlFor="avatar_url">URL аватара</Label>
              <Input
                id="avatar_url"
                value={formData.avatar_url}
                onChange={(e) => setFormData(prev => ({...prev, avatar_url: e.target.value}))}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => setFormData(prev => ({...prev, is_active: checked}))}
              />
              <Label htmlFor="is_active">Активен</Label>
            </div>

            <div className="flex gap-2">
              <Button onClick={saveMaster} className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Сохранить
              </Button>
              <Button variant="outline" onClick={resetForm} className="flex items-center gap-2">
                <X className="h-4 w-4" />
                Отменить
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {masters.map((master) => (
          <Card key={master.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{master.name}</CardTitle>
                  <CardDescription>{master.title}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => startEdit(master)}
                    className="flex items-center gap-1"
                  >
                    <Edit className="h-3 w-3" />
                    Изменить
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteMaster(master.id)}
                    className="flex items-center gap-1"
                  >
                    <Trash2 className="h-3 w-3" />
                    Удалить
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><strong>Опыт:</strong> {master.experience}</p>
                <p><strong>Описание:</strong> {master.description}</p>
                <p><strong>Ссылка:</strong> {master.booking_link}</p>
                <p><strong>Статус:</strong> {master.is_active ? 'Активен' : 'Неактивен'}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}