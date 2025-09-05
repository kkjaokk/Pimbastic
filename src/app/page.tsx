import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BarChart, Cog, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      icon: <Cog className="h-10 w-10 text-accent" />,
      title: 'Desenvolvimento de Plataformas de Apostas',
      description: 'Sistemas robustos e escaláveis, criados do zero para atender sua demanda.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-accent" />,
      title: 'Criação e Gestão de Sites',
      description: 'Interfaces modernas, rápidas e seguras para engajar seus usuários.',
    },
    {
      icon: <BarChart className="h-10 w-10 text-accent" />,
      title: 'Consultoria de Segurança e Otimização',
      description: 'Blindamos seu sistema contra ameaças e garantimos a máxima performance.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 tracking-tighter">
            Construindo os Sistemas de Apostas Mais Seguros e Confiáveis do Mundo.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-primary-foreground/80">
            Oferecemos soluções de TI de ponta para casas de apostas, garantindo performance, segurança e uma experiência de usuário impecável.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/services">
              Descubra Nossas Soluções
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="social-proof" className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium text-muted-foreground mb-6">
            Temos a confiança de gigantes do mercado
          </p>
          <div className="flex justify-center items-center">
            <Image
              src="https://picsum.photos/200/50"
              alt="Casino Logo"
              width={200}
              height={50}
              data-ai-hint="casino logo"
              className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Soluções Completas para a Sua Operação</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Nossa expertise em engenharia de software abrange todas as necessidades de uma casa de apostas moderna.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-secondary rounded-full p-4 w-fit mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about-summary" className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <Image
                src="https://picsum.photos/600/400"
                alt="Ambiente de cassino com roleta"
                width={600}
                height={400}
                data-ai-hint="casino roulette"
                className="rounded-lg shadow-lg"
              />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Inovação Nascida da Paixão por Tecnologia.</h2>
            <p className="text-muted-foreground mb-6">
              Fundada em 2021 por talentos do IFSULDEMINAS, a Pimpastic nasceu para revolucionar a tecnologia por trás das apostas esportivas. Hoje, nossa missão é definir o padrão global de segurança e confiabilidade do setor.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="case-study" className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Case de Sucesso: Casino Royal</h2>
            <p className="text-muted-foreground mb-6">
              Fomos escolhidos pelo Casino Royal para desenvolver sua nova plataforma de apostas, um projeto que solidificou nossa expertise em sistemas de alta complexidade e segurança.
            </p>
            <Button asChild variant="outline">
              <Link href="/portfolio">Veja o Projeto em Detalhes</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="final-cta" className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Pronto para Elevar o Nível da Sua Plataforma?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Vamos conversar sobre como a Pimpastic pode ser a parceira tecnológica ideal para o seu sucesso.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
