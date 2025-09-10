-- Add SEO settings and booking card settings to site_settings table
INSERT INTO site_settings (setting_key, setting_value, setting_type) VALUES 
-- SEO settings
('seo_title', 'KOGTI Beauty Studio - Профессиональный маникюр и педикюр', 'text'),
('seo_description', 'Салон красоты KOGTI - профессиональный маникюр, педикюр и nail-арт. Опытные мастера, качественные материалы, уютная атмосфера.', 'text'),
('seo_keywords', 'маникюр, педикюр, nail-арт, салон красоты, ногти, KOGTI', 'text'),

-- Booking card settings
('booking_service_title', 'Маникюр', 'text'),
('booking_service_subtitle', '+ pedicure', 'text'),
('booking_service_image', '/lovable-uploads/91410034-49dc-4e34-8fa7-4730a6d1e217.png', 'text'),
('booking_master_name', 'Мастер: Аня', 'text'),
('booking_master_avatar', '/lovable-uploads/0037d6a4-735d-49bb-8011-d4ba7f19c613.png', 'text'),
('booking_hot_date', 'Пн 21.08', 'text'),
('booking_hot_time', '12:00-18:30', 'text'),
('booking_master_photos', '[""/lovable-uploads/58196edf-6796-4ef3-8d8a-9ed421cec0e6.png"", ""/lovable-uploads/e16237c3-b291-4dbe-8aaa-562788dd5191.png"", ""/lovable-uploads/14cd72d6-4ee9-44f2-851e-66bdb17cc1a2.png"", ""/lovable-uploads/fc02b8a7-9d93-48fc-a79a-b0584e950765.png""]', 'json'),
('booking_link', 'https://dikidi.ru/#widget=192147', 'text')

ON CONFLICT (setting_key) DO UPDATE SET 
setting_value = EXCLUDED.setting_value,
updated_at = now();