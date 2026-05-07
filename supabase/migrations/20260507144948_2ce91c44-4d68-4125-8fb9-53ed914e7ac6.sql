
-- Fix function search_path mutable warnings
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$function$;

-- Tighten orders INSERT policies: prevent authenticated users from creating
-- orders attributed to other users, and ensure anonymous orders have NULL user_id.
DROP POLICY IF EXISTS "Allow anyone to create orders" ON public.orders;
DROP POLICY IF EXISTS "Users can create their own orders" ON public.orders;

CREATE POLICY "Anyone can create orders with valid user_id"
ON public.orders
FOR INSERT
TO public
WITH CHECK (
  -- Anonymous orders must have NULL user_id
  (auth.uid() IS NULL AND user_id IS NULL)
  OR
  -- Authenticated users can only create orders for themselves
  (auth.uid() IS NOT NULL AND user_id = auth.uid())
);
