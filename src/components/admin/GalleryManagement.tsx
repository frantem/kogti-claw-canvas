import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ImageUpload } from './ImageUpload';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  image_url: string;
  alt_text: string;
  category: string;
  sort_order: number;
  is_active: boolean;
}

export function GalleryManagement() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const emptyImage: Omit<GalleryImage, 'id'> = {
    image_url: '',
    alt_text: '',
    category: 'work',
    sort_order: 0,
    is_active: true
  };

  const [formData, setFormData] = useState(emptyImage);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('sort_order');

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить изображения",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const saveImage = async () => {
    try {
      if (isCreating) {
        const { error } = await supabase
          .from('gallery_images')
          .insert([formData]);
        
        if (error) throw error;
        toast({ title: "Изображение добавлено успешно" });
      } else if (editingId) {
        const { error } = await supabase
          .from('gallery_images')
          .update(formData)
          .eq('id', editingId);
        
        if (error) throw error;
        toast({ title: "Изображение обновлено успешно" });
      }

      await fetchImages();
      resetForm();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось сохранить изображение",
        variant: "destructive"
      });
    }
  };

  const deleteImage = async (id: string) => {
    if (!confirm('Удалить изображение?')) return;

    try {
      const { error } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      await fetchImages();
      toast({ title: "Изображение удалено" });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось удалить изображение",
        variant: "destructive"
      });
    }
  };

  const startEdit = (image: GalleryImage) => {
    setFormData(image);
    setEditingId(image.id);
    setIsCreating(false);
  };

  const startCreate = () => {
    setFormData(emptyImage);
    setIsCreating(true);
    setEditingId(null);
  };

  const resetForm = () => {
    setFormData(emptyImage);
    setEditingId(null);
    setIsCreating(false);
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Управление галереей
        </h2>
        <Button onClick={startCreate} className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
          <Plus className="h-4 w-4" />
          Добавить изображение
        </Button>
      </div>

      {(isCreating || editingId) && (
        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <CardTitle className="text-xl text-primary">{isCreating ? 'Новое изображение' : 'Редактировать изображение'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ImageUpload
                  currentImageUrl={formData.image_url}
                  onImageUpload={(url) => setFormData(prev => ({...prev, image_url: url}))}
                  label="Изображение"
                  folder="gallery"
                />
              </div>
              <div>
                <Label htmlFor="image_url">URL изображения (альтернативно)</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => setFormData(prev => ({...prev, image_url: e.target.value}))}
                  placeholder="Или вставьте URL изображения"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="alt_text">Альтернативный текст</Label>
              <Input
                id="alt_text"
                value={formData.alt_text}
                onChange={(e) => setFormData(prev => ({...prev, alt_text: e.target.value}))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category">Категория</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData(prev => ({...prev, category: value}))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите категорию" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="work">Работы</SelectItem>
                    <SelectItem value="interior">Интерьер</SelectItem>
                    <SelectItem value="equipment">Оборудование</SelectItem>
                    <SelectItem value="process">Процесс работы</SelectItem>
                    <SelectItem value="team">Команда</SelectItem>
                    <SelectItem value="certificates">Сертификаты</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="sort_order">Порядок сортировки</Label>
                <Input
                  id="sort_order"
                  type="number"
                  value={formData.sort_order}
                  onChange={(e) => setFormData(prev => ({...prev, sort_order: parseInt(e.target.value) || 0}))}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => setFormData(prev => ({...prev, is_active: checked}))}
              />
              <Label htmlFor="is_active">Активно</Label>
            </div>

            <div className="flex gap-2">
              <Button onClick={saveImage} className="flex items-center gap-2">
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image) => (
          <Card key={image.id} className="shadow-lg border-primary/20 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-sm font-medium truncate">{image.alt_text || 'Без названия'}</CardTitle>
                <div className="flex gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => startEdit(image)}
                    className="hover:bg-blue-50 hover:border-blue-300"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteImage(image.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative">
                <img
                  src={image.image_url}
                  alt={image.alt_text}
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    image.is_active 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}>
                    {image.is_active ? 'Активно' : 'Скрыто'}
                  </span>
                </div>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-medium text-muted-foreground">Категория</p>
                    <p className="font-semibold capitalize">{image.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-muted-foreground">Порядок</p>
                    <p className="font-semibold">{image.sort_order}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}