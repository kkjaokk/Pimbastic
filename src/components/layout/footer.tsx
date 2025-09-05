import Link from 'next/link';
import { PimbasticLogo } from '@/components/logo';
import { Linkedin } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'Sobre Nós' },
  { href: '/services', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/contact', label: 'Contato' },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <PimbasticLogo />
            <p className="mt-2 text-sm text-muted-foreground">Engenharia de Software de Elite para Apostas Esportivas.</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold font-headline text-primary mb-4">Navegação</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-headline text-primary mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Termos de Serviço
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-headline text-primary mb-4">Contato</h3>
               <ul className="space-y-2">
                <li>
                  <a href="mailto:contato@pimbastic.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    contato@pimbastic.com
                  </a>
                </li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold font-headline text-primary mb-4">Social</h3>
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
               </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pimbastic Company LTDA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
