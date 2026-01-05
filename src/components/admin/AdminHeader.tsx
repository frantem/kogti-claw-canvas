import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useAuth } from '@/hooks/useAuth';
import { LogOut } from 'lucide-react';

export function AdminHeader() {
  const { user, signOut } = useAuth();

  return (
    <header className="border-b border-border/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <SidebarTrigger className="h-10 w-10 md:h-9 md:w-9 min-h-[40px] min-w-[40px] md:min-h-[36px] md:min-w-[36px]" />
          <h1 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            <span className="hidden sm:inline">A-Art Studio - </span>Админ панель
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {user?.email}
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => signOut()}
            className="flex items-center gap-2 hover:bg-destructive hover:text-destructive-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Выйти
          </Button>
        </div>
      </div>
    </header>
  );
}