import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { LogOut } from 'lucide-react';

export function AdminHeader() {
  const { user, signOut } = useAuth();

  return (
    <header className="border-b bg-background px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">A-Art Studio - Админ панель</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {user?.email}
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => signOut()}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Выйти
          </Button>
        </div>
      </div>
    </header>
  );
}