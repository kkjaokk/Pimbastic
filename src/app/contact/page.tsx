import { Mail, Linkedin, Phone } from 'lucide-react';
import ContactForm from './contact-form';

export default function ContactPage() {
  return (
    <div>
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Vamos Construir o Futuro Juntos</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Estamos prontos para ouvir sobre seus desafios e discutir como podemos ajudar sua empresa a crescer.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <h3 className="font-semibold">E-mail</h3>
                    <a href="mailto:contato@pimpastic.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contato@pimpastic.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <div>
                    <h3 className="font-semibold">Telefone (Opcional)</h3>
                    <p className="text-muted-foreground">Disponível sob solicitação.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-accent" />
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      pimpastic-company
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-lg border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6">Envie uma Mensagem</h2>
                <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
