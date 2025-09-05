import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BadgeCheck, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-accent" />,
    title: "Segurança Inabalável",
    description: "Nossa prioridade máxima é a proteção dos dados e operações dos nossos clientes."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    title: "Inovação Contínua",
    description: "Buscamos constantemente novas tecnologias para manter nossos clientes à frente no mercado."
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-accent" />,
    title: "Confiabilidade Extrema",
    description: "Construímos sistemas que operam sem falhas, garantindo a continuidade do seu negócio."
  },
  {
    icon: <Handshake className="w-8 h-8 text-accent" />,
    title: "Parceria Estratégica",
    description: "Trabalhamos lado a lado com nossos clientes para alcançar o sucesso mútuo."
  }
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Nossa Trajetória: da Academia à Referência de Mercado</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Uma história de paixão por tecnologia e um compromisso com a excelência.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4">Origem e Fundação</h2>
              <p className="text-muted-foreground mb-4">
                A Pimbastic Company LTDA foi fundada em 2021 por um grupo de estudantes visionários do curso Técnico em Informática do IFSULDEMINAS, campus Machado. O que começou como um projeto acadêmico rapidamente evoluiu para uma missão: resolver os complexos desafios tecnológicos do mercado de apostas esportivas.
              </p>
              <p className="text-muted-foreground">
                Essa origem humilde e autêntica é a base da nossa cultura, que valoriza o conhecimento técnico, a colaboração e a busca incansável por soluções inovadoras e seguras.
              </p>
            </div>
            <div>
              <Image 
                src="https://picsum.photos/600/400" 
                alt="Time de desenvolvimento colaborando"
                width={600}
                height={400}
                data-ai-hint="development team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold font-headline mb-4">Missão</h2>
                <p className="text-lg text-muted-foreground">
                  Fornecer a infraestrutura de TI mais segura e inovadora para o mercado de apostas esportivas, permitindo que nossos clientes operem com máxima eficiência e confiança.
                </p>
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold font-headline mb-4">Visão</h2>
                <p className="text-lg text-muted-foreground">
                  Tornar-se a referência mundial na criação de sistemas de apostas, padronizando o mercado com nossas tecnologias para um ecossistema mais seguro e justo para todos.
                </p>
            </div>
        </div>
      </section>
      
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Nossos Valores</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Os pilares que guiam cada linha de código que escrevemos e cada decisão que tomamos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-fit p-3 rounded-full bg-secondary mb-3">
                    {value.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
