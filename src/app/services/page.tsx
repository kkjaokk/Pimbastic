import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import OptimalScalingForm from "./optimal-scaling-form";

const services = [
  {
    title: "Desenvolvimento de Sistemas de Apostas (Back-end)",
    description: "Criamos o motor central da sua operação de apostas. Da gestão de odds ao processamento seguro de pagamentos, nossa arquitetura é projetada para ser robusta e à prova de falhas.",
    features: [
      "Escalabilidade para milhões de usuários simultâneos.",
      "Sistemas antifraude com inteligência artificial.",
      "Integração com as principais APIs de dados esportivos.",
      "Módulos de pagamento seguros e diversificados."
    ]
  },
  {
    title: "Desenvolvimento de Sites e Plataformas (Front-end)",
    description: "Construímos a interface que seus usuários veem e utilizam. Focamos em design intuitivo, velocidade e uma experiência de usuário (UX) impecável em qualquer dispositivo.",
    features: [
      "Design totalmente responsivo (perfeito em celular, tablet e desktop).",
      "Otimização para alta velocidade de carregamento (Core Web Vitals).",
      "Experiência do usuário (UX) intuitiva e focada em conversão.",
      "Implementação de protocolos de segurança de ponta no front-end."
    ]
  },
  {
    title: "Terceirização de TI e Manutenção Contínua",
    description: "Gerenciamos completamente sua infraestrutura tecnológica, permitindo que você foque no seu negócio. Oferecemos monitoramento, suporte e atualizações constantes.",
    features: [
      "Suporte especializado 24/7.",
      "Monitoramento proativo para identificar e resolver problemas antes que afetem os usuários.",
      "Atualizações constantes de segurança e performance.",
      "Gestão de servidores e otimização de custos de infraestrutura."
    ]
  }
];

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Soluções de Engenharia de Software para o Setor de Apostas</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Tecnologia de ponta para garantir que sua operação seja segura, escalável e altamente performática.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-10 bg-white">
                    <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4">{service.title}</h2>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary/50 p-8 md:p-10 flex items-center justify-center">
                    <div className="w-full max-w-md">
                    {index === 0 && (
                      <div>
                        <h3 className="text-xl font-bold font-headline mb-2 text-center">Otimize sua Arquitetura</h3>
                        <p className="text-muted-foreground mb-4 text-center text-sm">
                          Use nossa ferramenta de IA para receber uma sugestão de escalonamento de dados para sua plataforma.
                        </p>
                         <OptimalScalingForm />
                      </div>
                    )}
                     {index !== 0 && (
                        <div className="text-center text-muted-foreground">
                            <p>Visualização ou componente interativo aqui.</p>
                        </div>
                     )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
