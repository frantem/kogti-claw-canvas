import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { SidebarProvider } from '@/components/ui/sidebar';
import { MastersManagement } from './MastersManagement';
import { GalleryManagement } from './GalleryManagement';
import { SettingsManagement } from './SettingsManagement';

export function AdminLayout() {
  const [activeSection, setActiveSection] = useState('masters');

  const renderContent = () => {
    switch (activeSection) {
      case 'masters':
        return <MastersManagement />;
      case 'gallery':
        return <GalleryManagement />;
      case 'settings':
        return <SettingsManagement />;
      default:
        return <MastersManagement />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}