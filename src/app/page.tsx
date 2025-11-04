import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BadgeCheck, Handshake, ShieldCheck, Sparkles, GitMerge, Layers, Activity, HeartPulse, BrainCircuit } from "lucide-react";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const governanceItems = [
    {
        icon: <GitMerge className="w-6 h-6 text-accent mr-4" />,
        question: "Como sua empresa define governança de TI e como garantirá uma TI alinhada aos objetivos de negócio?",
        answer: "Para nós, Governança de TI é a estrutura que garante que a tecnologia não apenas suporte, mas impulsione ativamente os objetivos de negócio. Alinhamos TI e negócio através de um planejamento estratégico conjunto, com KPIs compartilhados e comunicação constante entre as lideranças técnicas e de negócio. Cada projeto de tecnologia é iniciado com um 'business case' claro, assegurando que cada linha de código tenha um propósito estratégico."
    },
    {
        icon: <Activity className="w-6 h-6 text-accent mr-4" />,
        question: "Quais mecanismos de monitoramento de desempenho de TI serão adotados?",
        answer: "Adotamos um sistema de monitoramento 360º em tempo real, utilizando ferramentas como Datadog e Grafana. Nossos dashboards monitoram desde a performance da infraestrutura (CPU, memória, latência de rede) até a experiência do usuário final (taxa de erros, tempo de carregamento de página) e métricas de negócio (transações por segundo, funil de conversão). Isso nos permite ser proativos, identificando e resolvendo problemas antes que impactem o cliente."
    },
    {
        icon: <Layers className="w-6 h-6 text-accent mr-4" />,
        question: "Como sua empresa propõe a integração de culturas Agile e DevOps à Governança de TI?",
        answer: "Nossa governança é 'Agile-native'. Integramos Agile e DevOps ao incorporar a gestão de riscos e a conformidade diretamente no ciclo de desenvolvimento (DevSecOps). A automação via CI/CD é nosso pilar, garantindo que cada entrega seja rápida e segura. As decisões de governança são tomadas de forma colaborativa em cerimônias ágeis, envolvendo Product Owners, Tech Leads e especialistas em segurança, garantindo que a governança adicione valor e não se torne um gargalo."
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
                src="https://picsum.photos/seed/abouthero/600/400" 
                alt="Time de desenvolvimento colaborando em frente a um quadro branco"
                width={600}
                height={400}
                data-ai-hint="development team whiteboard"
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
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Nossa Abordagem de Governança e Metodologia</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
              Como garantimos que nossa tecnologia, processos e cultura trabalhem em sinergia para entregar resultados excepcionais e seguros aos nossos clientes.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {governanceItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left text-lg hover:no-underline">
                    <div className="flex items-start">
                      {item.icon}
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-10">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Segurança e Conformidade: Nosso Compromisso com a NR01</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
              A segurança de nossos colaboradores é tão importante quanto a segurança dos nossos sistemas. Veja como aplicamos a NR01 para garantir um ambiente de trabalho saudável e produtivo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-background"><HeartPulse className="w-8 h-8 text-accent" /></div>
                  <CardTitle className="font-headline text-2xl">Riscos Ergonômicos e Psicossociais</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold text-primary">Aplicação da NR01:</p>
                <p className="text-muted-foreground">Longas jornadas na "rede LAN de desenvolvimento" podem levar a riscos de LER/DORT e fadiga visual. A pressão por prazos e a natureza de "tempo real" do nosso negócio geram um ambiente de alto estresse e potencial burnout. A NR01 exige que a Pimbastic avalie e mitigue essa sobrecarga física e mental.</p>
                <p className="font-semibold text-primary">Nossas Ações de Mitigação:</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Realização de Análise Ergonômica do Trabalho (AET) e fornecimento de mobiliário adequado (cadeiras ergonômicas, mesas ajustáveis).</li>
                  <li>Implementação de pausas programadas e incentivo à ginástica laboral para reduzir o esforço repetitivo.</li>
                </ul>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-background"><BrainCircuit className="w-8 h-8 text-accent" /></div>
                  <CardTitle className="font-headline text-2xl">Gestão de Estresse e Saúde Mental</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold text-primary">Aplicação da NR01:</p>
                 <p className="text-muted-foreground">O bem-estar psicológico é fundamental. A gestão de projetos, liderada por figuras como o Gerente de Projeto (Pedro), pode criar picos de estresse. A NR01 nos orienta a mapear e controlar esses fatores para prevenir o esgotamento profissional e promover um ambiente de trabalho positivo.</p>
                <p className="font-semibold text-primary">Nossas Ações de Mitigação:</p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Gerenciamento ativo da pressão por prazos e metas para garantir o equilíbrio entre vida pessoal e profissional.</li>
                    <li>Implementação de programas de suporte psicológico e criação de uma política clara de combate a qualquer tipo de assédio.</li>
                </ul>
              </CardContent>
            </Card>
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
                  <div className="mx-auto w-fit p-3 rounded-full bg-background mb-3">
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
