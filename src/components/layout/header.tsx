"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PimpasticLogo } from '@/components/logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Sobre Nós' },
  { href: '/services', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? 'text-primary' : 'text-muted-foreground'
      )}
      onClick={() => setMenuOpen(false)}
    >
      {label}
    </Link>
  );
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <PimpasticLogo />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => <NavLink key={link.href} {...link} />)}
        </nav>
        
        <div className="hidden md:flex items-center gap-2">
          <Button asChild className='bg-accent hover:bg-accent/90'>
            <Link href="/contact">Entre em Contato</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    <PimpasticLogo />
                  </Link>
                   <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Fechar menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map(link => <NavLink key={link.href} {...link} />)}
                </nav>
                <div className="mt-auto">
                    <Button asChild className="w-full bg-accent hover:bg-accent/90">
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>Entre em Contato</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
