'use client';

import { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { MenuItem } from 'primereact/menuitem';
import texts from '@/constants/texts.json';

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const menuItems: MenuItem[] = [
    {
      label: texts.navigation.home,
      command: () => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
        setActiveIndex(0);
      },
    },
    {
      label: texts.navigation.about,
      command: () => {
        document
          .getElementById('about')
          ?.scrollIntoView({ behavior: 'smooth' });
        setActiveIndex(1);
      },
    },
    {
      label: texts.navigation.skills,
      command: () => {
        document
          .getElementById('skills')
          ?.scrollIntoView({ behavior: 'smooth' });
        setActiveIndex(2);
      },
    },
    {
      label: texts.navigation.projects,
      command: () => {
        document
          .getElementById('projects')
          ?.scrollIntoView({ behavior: 'smooth' });
        setActiveIndex(3);
      },
    },
    {
      label: texts.navigation.aiDocumentation,
      command: () => {
        document
          .getElementById('ai-documentation')
          ?.scrollIntoView({ behavior: 'smooth' });
        setActiveIndex(4);
      },
    },
    {
      label: texts.navigation.qa,
      command: () => {
        document.getElementById('qa')?.scrollIntoView({ behavior: 'smooth' });
        setActiveIndex(5);
      },
    },
    {
      label: texts.navigation.contact,
      command: () => {
        document
          .getElementById('contact')
          ?.scrollIntoView({ behavior: 'smooth' });
        setActiveIndex(6);
      },
    },
  ];

  const handleMenuItemClick = (index: number) => {
    setActiveIndex(index);
    setSidebarVisible(false);
  };

  const scrollToHome = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    setActiveIndex(0);
  };

  return (
    <>
      <nav
        className='fixed top-0 left-0 right-0 z-50 bg-surface-0 shadow-lg border-b border-surface-border'
        role='navigation'
        aria-label='Main navigation'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo/Brand */}
            <div className='flex-shrink-0'>
              <Button
                link
                label={texts.home.title}
                className='text-xl sm:text-2xl font-bold p-0'
                onClick={scrollToHome}
                aria-label='Go to home section'
              />
            </div>

            {/* Desktop Navigation - TabMenu */}
            <div className='hidden lg:block'>
              <TabMenu
                model={menuItems}
                activeIndex={activeIndex}
                onTabChange={(e) => setActiveIndex(e.index)}
                className='h-16'
                style={{ border: 'none' }}
              />
            </div>

            {/* Mobile menu button */}
            <div className='lg:hidden'>
              <Button
                icon='pi pi-bars'
                aria-label='Open navigation menu'
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
            <span className='font-bold text-xl'>{texts.navigation.home}</span>
          </div>
        }
      >
        <div className='flex flex-column gap-2'>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              label={item.label}
              text
              className='w-full justify-content-start p-3'
              onClick={() => {
                // Manually trigger the navigation instead of using item.command
                const sectionIds = [
                  'home',
                  'about',
                  'skills',
                  'projects',
                  'ai-documentation',
                  'qa',
                  'contact',
                ];
                const targetId = sectionIds[index];
                if (targetId) {
                  document
                    .getElementById(targetId)
                    ?.scrollIntoView({ behavior: 'smooth' });
                }
                handleMenuItemClick(index);
              }}
              severity={activeIndex === index ? 'info' : undefined}
            />
          ))}
        </div>
      </Sidebar>
    </>
  );
}
