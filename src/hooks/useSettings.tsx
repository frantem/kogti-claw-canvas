import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface SettingsMap {
  [key: string]: string;
}

export const useSettings = (keys: string[]) => {
  return useQuery({
    queryKey: ['settings', ...keys.sort()],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('setting_key, setting_value')
        .in('setting_key', keys);

      if (error) throw error;

      const settingsMap = (data || []).reduce((acc, item) => {
        acc[item.setting_key] = item.setting_value || '';
        return acc;
      }, {} as SettingsMap);

      return settingsMap;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
  });
};
