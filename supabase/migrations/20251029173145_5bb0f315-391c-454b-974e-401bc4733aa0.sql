-- Update Alina's avatar photo
UPDATE public.masters 
SET avatar_url = '/lovable-uploads/master-alina-new.jpg',
    updated_at = NOW()
WHERE name ILIKE '%алина%' OR name ILIKE '%alina%';