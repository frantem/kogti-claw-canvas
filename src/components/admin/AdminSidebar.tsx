import { Users, Image, Settings, Home, Type } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'hero', title: 'Главный блок', icon: Image },
  { id: 'masters', title: 'Мастера', icon: Users },
  { id: 'gallery', title: 'Галерея', icon: Image },
  { id: 'headings', title: 'Заголовки', icon: Type },
  { id: 'settings', title: 'Настройки', icon: Settings },
];

export function AdminSidebar({ activeSection, onSectionChange }: AdminSidebarProps) {
  const { isMobile, setOpenMobile } = useSidebar();

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar collapsible="offcanvas" className="w-64">
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold px-4 mb-2">
            Админ панель
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="h-12 px-4">
                  <Link 
                    to="/" 
                    className="flex items-center gap-3 hover:bg-muted/50"
                  >
                    <Home className="h-5 w-5" />
                    <span>На сайт</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => handleSectionChange(item.id)}
                    className={`h-12 px-4 flex items-center gap-3 cursor-pointer ${
                      activeSection === item.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}