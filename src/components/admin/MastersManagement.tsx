import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ImageUpload } from './ImageUpload';
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
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Управление мастерами
        </h2>
        <Button onClick={startCreate} className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <Plus className="h-4 w-4" />
          Добавить мастера
        </Button>
      </div>

      {(isCreating || editingId) && (
        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <CardTitle className="text-xl text-primary">{isCreating ? 'Новый мастер' : 'Редактировать мастера'}</CardTitle>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ImageUpload
                  currentImageUrl={formData.avatar_url}
                  onImageUpload={(url) => setFormData(prev => ({...prev, avatar_url: url}))}
                  label="Аватар мастера"
                  folder="masters/avatars"
                />
              </div>
              <div>
                <Label htmlFor="avatar_url">URL аватара (альтернативно)</Label>
                <Input
                  id="avatar_url"
                  value={formData.avatar_url}
                  onChange={(e) => setFormData(prev => ({...prev, avatar_url: e.target.value}))}
                  placeholder="Или вставьте URL изображения"
                />
              </div>
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {masters.map((master) => (
          <Card key={master.id} className="shadow-lg border-primary/20 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold">{master.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{master.title || 'Не указана должность'}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => startEdit(master)}
                    className="hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteMaster(master.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {master.avatar_url && (
                <div className="mt-3 w-16 h-16 rounded-full overflow-hidden bg-muted mx-auto">
                  <img src={master.avatar_url} alt={master.name} className="w-full h-full object-cover" />
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm font-medium text-muted-foreground">Опыт работы</p>
                <p className="font-medium">{master.experience || 'Не указан'}</p>
              </div>
              
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm font-medium text-muted-foreground">Описание</p>
                <p className="text-sm line-clamp-3">{master.description || 'Описание не добавлено'}</p>
              </div>
              
              {master.booking_link && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Ссылка для записи</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 truncate">{master.booking_link}</p>
                </div>
              )}
              
              <div className="flex items-center justify-between pt-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  master.is_active 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                }`}>
                  {master.is_active ? 'Активен' : 'Неактивен'}
                </span>
                <span className="text-xs text-muted-foreground">
                  Порядок: {master.sort_order}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}