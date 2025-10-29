-- Update Lina's avatar photo
UPDATE public.masters 
SET avatar_url = '/lovable-uploads/master-alina-new.jpg',
    updated_at = NOW()
WHERE id = '4cf95673-a07a-4097-9ced-026bf102272c';