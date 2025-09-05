import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, BarChart, Clock, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const results = [
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    value: "40%",
    label: "Redução no tempo de carregamento",
    description: "Otimização de front-end e back-end resultou em uma experiência de usuário ultrarrápida."
  },
  {
    icon: <ArrowUpRight className="w-8 h-8 text-accent" />,
    value: "200%",
    label: "Aumento na capacidade de processamento",
    description: "A nova arquitetura de microsserviços suporta o triplo de apostas simultâneas em horários de pico."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    value: "Nota 9.8/10",
    label: "Em auditorias de segurança",
    description: "Implementação de protocolos de segurança de última geração que superaram os padrões da indústria."
  }
];

export default function PortfolioPage() {
  return (
    <div>
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Projetos que Moldam o Futuro do Mercado</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Nosso trabalho com líderes da indústria demonstra nosso compromisso com a excelência e inovação.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-lg">
            <CardHeader className="p-0">
                <Image
                    src="https://picsum.photos/1200/500"
                    alt="Luzes de neon em um cassino"
                    width={1200}
                    height={500}
                    data-ai-hint="casino neon"
                    className="w-full h-auto object-cover"
                />
            </CardHeader>
            <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold font-headline mb-2">Cliente</h2>
                        <p className="text-lg font-semibold text-primary">Casino Royal</p>
                        <p className="text-muted-foreground">Uma das maiores e mais renomadas casas de apostas do mundo.</p>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold font-headline mb-2">O Desafio</h2>
                        <p className="text-muted-foreground">
                            O Casino Royal enfrentava a necessidade urgente de um novo site e sistema de apostas que fosse mais rápido, seguro e escalável para suportar sua crescente base de usuários global e a complexidade das apostas ao vivo.
                        </p>
                    </div>
                </div>

                <div className="border-t my-12"></div>

                <div>
                    <h2 className="text-3xl font-bold font-headline mb-6 text-center">A Solução Pimbastic</h2>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-center">
                        Desenvolvemos uma arquitetura de microsserviços de ponta, com um front-end moderno construído em Next.js para máxima performance e um back-end robusto em Go para processamento de alta velocidade. O foco principal foi em protocolos de segurança de última geração e otimização de performance de banco de dados para garantir uma experiência de apostas em tempo real sem interrupções.
                    </p>
                </div>
                
                <div className="border-t my-12"></div>

                <div>
                    <h2 className="text-3xl font-bold font-headline mb-10 text-center">Os Resultados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {results.map((result) => (
                            <div key={result.label} className="text-center p-6 bg-secondary/50 rounded-lg">
                                <div className="mx-auto w-fit p-3 rounded-full bg-background mb-4 shadow">
                                    {result.icon}
                                </div>
                                <p className="text-4xl font-bold font-headline text-accent">{result.value}</p>
                                <p className="font-semibold mt-1">{result.label}</p>
                                <p className="text-sm text-muted-foreground mt-2">{result.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Tem um Desafio Semelhante?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Nossa equipe está pronta para transformar sua operação. Vamos conversar sobre suas necessidades.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Entre em Contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
