-- Enable RLS for all tables
ALTER TABLE IF EXISTS auth.users ENABLE ROW LEVEL SECURITY;

-- Create profiles table for user management
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create masters table for managing master information
CREATE TABLE IF NOT EXISTS public.masters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT,
  experience TEXT,
  description TEXT,
  avatar_url TEXT,
  images TEXT[] DEFAULT '{}',
  booking_link TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create gallery images table
CREATE TABLE IF NOT EXISTS public.gallery_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  alt_text TEXT,
  category TEXT DEFAULT 'work',
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create site settings table
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key TEXT UNIQUE NOT NULL,
  setting_value TEXT,
  setting_type TEXT DEFAULT 'text',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.masters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public reading
CREATE POLICY "Masters are viewable by everyone" ON public.masters
  FOR SELECT USING (is_active = true);

CREATE POLICY "Gallery images are viewable by everyone" ON public.gallery_images
  FOR SELECT USING (is_active = true);

CREATE POLICY "Site settings are viewable by everyone" ON public.site_settings
  FOR SELECT USING (true);

-- Create admin policies
CREATE POLICY "Admins can manage profiles" ON public.profiles
  FOR ALL USING (auth.uid() = id OR (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can manage masters" ON public.masters
  FOR ALL USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can manage gallery" ON public.gallery_images
  FOR ALL USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

CREATE POLICY "Admins can manage settings" ON public.site_settings
  FOR ALL USING ((SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin');

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_masters_updated_at BEFORE UPDATE ON public.masters
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON public.site_settings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (NEW.id, NEW.email, 'user');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert default masters data
INSERT INTO public.masters (name, title, experience, description, avatar_url, images, booking_link, sort_order) VALUES
('Алина', 'Мастер ногтевого сервиса', '5 лет опыта', 'Специализируется на дизайне ногтей и маникюре', '/src/assets/master-alina.jpg', ARRAY['/src/assets/nail-work-1.jpg', '/src/assets/nail-work-2.jpg'], 'https://t.me/alina_nails', 1),
('Анна', 'Топ мастер', '7 лет опыта', 'Эксперт в области nail-арта и наращивания', '/src/assets/master-anna.jpg', ARRAY['/src/assets/nail-work-3.jpg', '/src/assets/nail-work-4.jpg'], 'https://t.me/anna_nails', 2),
('Оля', 'Мастер маникюра', '4 года опыта', 'Специалист по классическому и аппаратному маникюру', '/src/assets/master-olya.jpg', ARRAY['/src/assets/nail-work-5.jpg', '/src/assets/nail-work-6.jpg'], 'https://t.me/olya_nails', 3),
('Виктория', 'Арт-мастер', '6 лет опыта', 'Художественная роспись ногтей и уникальные дизайны', '/src/assets/master-victoria.jpg', ARRAY['/src/assets/nail-work-1.jpg', '/src/assets/nail-work-3.jpg'], 'https://t.me/victoria_nails', 4)
ON CONFLICT DO NOTHING;

-- Insert gallery images
INSERT INTO public.gallery_images (image_url, alt_text, category, sort_order) VALUES
('/src/assets/nail-work-1.jpg', 'Красивый дизайн ногтей', 'work', 1),
('/src/assets/nail-work-2.jpg', 'Элегантный маникюр', 'work', 2),
('/src/assets/nail-work-3.jpg', 'Nail art дизайн', 'work', 3),
('/src/assets/nail-work-4.jpg', 'Профессиональный маникюр', 'work', 4),
('/src/assets/nail-work-5.jpg', 'Стильный дизайн', 'work', 5),
('/src/assets/nail-work-6.jpg', 'Креативные ногти', 'work', 6)
ON CONFLICT DO NOTHING;

-- Insert site settings
INSERT INTO public.site_settings (setting_key, setting_value, setting_type) VALUES
('studio_name', 'A-Art Studio', 'text'),
('studio_description', 'Профессиональная студия маникюра', 'text'),
('contact_phone', '+7 (999) 123-45-67', 'text'),
('contact_email', 'info@a-art.studio', 'email'),
('work_hours', 'Ежедневно с 9:00 до 21:00', 'text'),
('address', 'Москва, ул. Примерная, д. 123', 'text')
ON CONFLICT (setting_key) DO NOTHING;