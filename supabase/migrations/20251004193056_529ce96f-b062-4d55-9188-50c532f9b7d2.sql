-- Insert existing masters from the website into the database
INSERT INTO public.masters (name, title, experience, description, avatar_url, images, booking_link, sort_order, is_active)
VALUES 
  (
    'Анна',
    'Мастер',
    'опыт 2 года',
    'быстро и без потери качества
сделает самый чёткий квадрат',
    '/lovable-uploads/e84b7e94-c364-40bc-a99e-5d69cc533df3.png',
    ARRAY['/lovable-uploads/e84b7e94-c364-40bc-a99e-5d69cc533df3.png', '/lovable-uploads/91410034-49dc-4e34-8fa7-4730a6d1e217.png', '/lovable-uploads/97fe75cf-3ac1-4579-911e-f5dd89f29120.png'],
    'https://dikidi.ru/#widget=192168',
    1,
    true
  ),
  (
    'Алина',
    'мастер',
    'опыт 3 года',
    'сделает как нюд так и крутой дизайн
творческая, добрая, отзывчивая',
    '/lovable-uploads/4dd231fb-3fef-4306-9f06-e42942cfde19.png',
    ARRAY['/lovable-uploads/4dd231fb-3fef-4306-9f06-e42942cfde19.png', '/lovable-uploads/82f78b18-14fe-4e4d-9d23-d4c0f6f9cdcb.png', '/lovable-uploads/70c7a95a-b7aa-413f-b691-6b738c05bfd6.png'],
    'https://dikidi.ru/#widget=192339',
    2,
    true
  ),
  (
    'Виктория',
    'ТОП-мастер',
    'опыт 6 лет',
    'сделает безупречный маникюр и педикюр
100% возвращаемость клиентов',
    '/lovable-uploads/b85037a7-90ce-4158-af33-f564797e2736.png',
    ARRAY['/lovable-uploads/b85037a7-90ce-4158-af33-f564797e2736.png', '/lovable-uploads/561482c5-bd57-423e-908b-8c13c394a90b.png', '/lovable-uploads/58196edf-6796-4ef3-8d8a-9ed421cec0e6.png'],
    'https://dikidi.ru/#widget=192340',
    3,
    true
  ),
  (
    'Оля',
    'ТОП-мастер',
    'опыт 5 лет',
    'коммуникабельность
нюд за час
идельный френч',
    '/lovable-uploads/3663b521-4a9a-4846-90b4-6c24e0c5cf6c.png',
    ARRAY['/lovable-uploads/3663b521-4a9a-4846-90b4-6c24e0c5cf6c.png', '/lovable-uploads/fd23db15-f23d-4ff9-8c88-6f63706dc4a1.png', '/lovable-uploads/770b1f7b-239e-4d27-9d9f-ccbcd0f4d782.png'],
    'https://dikidi.ru/#widget=192341',
    4,
    true
  );

-- Fix is_admin function to include search_path for security
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$;