import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { SidebarProvider } from '@/components/ui/sidebar';
import { MastersManagement } from './MastersManagement';
import { GalleryManagement } from './GalleryManagement';
import { SettingsManagement } from './SettingsManagement';
import { HeroManagement } from './HeroManagement';
import HeadingsManagement from './HeadingsManagement';

export function AdminLayout() {
  const [activeSection, setActiveSection] = useState('hero');

  const renderContent = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroManagement />;
      case 'masters':
        return <MastersManagement />;
      case 'gallery':
        return <GalleryManagement />;
      case 'settings':
        return <SettingsManagement />;
      case 'headings':
        return <HeadingsManagement />;
      default:
        return <HeroManagement />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <AdminSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-6 bg-gradient-to-br from-white/50 to-blue-50/50 dark:from-gray-800/50 dark:to-gray-700/50">
            <div className="max-w-7xl mx-auto">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}