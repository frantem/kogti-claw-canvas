-- Restore Alina's original avatar photo
UPDATE public.masters
SET avatar_url = '/lovable-uploads/4dd231fb-3fef-4306-9f06-e42942cfde19.png',
    updated_at = NOW()
WHERE id = 'a24e1728-e79c-4401-9f37-e5bc8d63055e';