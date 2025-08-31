'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { MenuItem } from 'primereact/menuitem';
import texts from '@/constants/texts.json';

export default function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    { path: '/chat', label: texts.navigation.chat },
    { path: '/documentation', label: texts.navigation.documentation },
    { path: '/qa', label: texts.navigation.qa },
  ];

  const getActiveIndex = () => {
    const index = routes.findIndex((route) => route.path === pathname);
    return index >= 0 ? index : 0;
  };

  const menuItems: MenuItem[] = routes.map((route) => ({
    label: route.label,
    command: () => {
      router.push(route.path);
    },
  }));

  const handleMenuItemClick = (index: number) => {
    router.push(routes[index].path);
    setSidebarVisible(false);
  };

  const navigateToHome = () => {
    router.push('/chat');
  };

  return (
    <>
      <nav
        className='fixed top-0 left-0 right-0 z-50 bg-surface-0 shadow-lg border-b border-surface-border'
        role='navigation'
        aria-label={texts.navigation.mainLabel}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo/Brand */}
            <div className='flex-shrink-0'>
              <Button
                text
                label={texts.navigation.title}
                className='text-xl sm:text-2xl font-bold p-0'
                onClick={navigateToHome}
                aria-label={texts.navigation.goToChatLabel}
              />
            </div>

            {/* Desktop Navigation - TabMenu */}
            <div className='hidden lg:block'>
              <TabMenu
                model={menuItems}
                activeIndex={getActiveIndex()}
                onTabChange={(e) => router.push(routes[e.index].path)}
                className='h-16'
                style={{ border: 'none' }}
              />
            </div>

            {/* Mobile menu button */}
            <div className='lg:hidden'>
              <Button
                icon='pi pi-bars'
                aria-label={texts.navigation.openMenuLabel}
                onClick={() => setSidebarVisible(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Sidebar */}
      <Sidebar
        visible={sidebarVisible}
        position='right'
        onHide={() => setSidebarVisible(false)}
        className='w-full sm:w-80'
        header={
          <div className='flex align-items-center gap-2'>
            <span className='font-bold text-xl'>{texts.navigation.chat}</span>
          </div>
        }
      >
        <div className='flex flex-col gap-2'>
          {routes.map((route, index) => (
            <Button
              key={index}
              label={route.label}
              text
              className='w-full justify-content-start p-3'
              onClick={() => handleMenuItemClick(index)}
              severity={pathname === route.path ? 'info' : undefined}
            />
          ))}
        </div>
      </Sidebar>
    </>
  );
}
