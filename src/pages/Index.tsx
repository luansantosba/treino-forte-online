
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, TrendingUp, Users, Calendar } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gym-dark text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  Transforme seu corpo,<br />
                  <span className="text-gym-red">Transforme sua vida</span>
                </h1>
                <p className="text-lg text-gym-gray mb-8">
                  Estrutura completa, equipe especializada e resultados garantidos para você conquistar seus objetivos fitness.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gym-red hover:bg-gym-red/90">
                    Comece hoje
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Conheça nossos planos
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-gym-red/20 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                  alt="Pessoa treinando" 
                  className="w-full h-[500px] object-cover rounded-xl animate-scale-in"
                />
                <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-gym-red/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher a TreinoForte?</h2>
              <p className="text-gym-gray max-w-2xl mx-auto">
                Oferecemos tudo que você precisa para alcançar seu melhor condicionamento físico em um ambiente motivador.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Dumbbell className="h-10 w-10 text-gym-red" />,
                  title: "Equipamentos Modernos",
                  description: "Academia completa com os equipamentos mais avançados do mercado."
                },
                {
                  icon: <Users className="h-10 w-10 text-gym-red" />,
                  title: "Professores Qualificados",
                  description: "Equipe de profissionais especializados para orientar seu treino."
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-gym-red" />,
                  title: "Resultados Rápidos",
                  description: "Metodologia comprovada para acelerar seus resultados."
                },
                {
                  icon: <Calendar className="h-10 w-10 text-gym-red" />,
                  title: "Horários Flexíveis",
                  description: "Aberto todos os dias com horários amplos para seu conforto."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover-scale">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gym-gray">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos de Adesão</h2>
              <p className="text-gym-gray max-w-2xl mx-auto">
                Escolha o plano ideal para seus objetivos e comece sua transformação hoje mesmo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Básico",
                  price: "99",
                  period: "mensal",
                  features: [
                    "Acesso à área de musculação",
                    "Horário: 8h às 16h",
                    "Sem taxa de adesão",
                    "Sem fidelidade"
                  ],
                  popular: false
                },
                {
                  name: "Premium",
                  price: "149",
                  period: "mensal",
                  features: [
                    "Acesso total à academia",
                    "Horário: 6h às 22h",
                    "Avaliação física mensal",
                    "Acesso às aulas coletivas",
                    "Taxa de adesão reduzida"
                  ],
                  popular: true
                },
                {
                  name: "VIP",
                  price: "199",
                  period: "mensal",
                  features: [
                    "Acesso completo e ilimitado",
                    "Horário: 24h",
                    "Personal Trainer (2x/mês)",
                    "Acesso prioritário às aulas",
                    "Avaliações completas",
                    "Sem taxa de adesão"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-gym-red shadow-lg' : ''} hover-scale`}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gym-red text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                      Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <div className="flex items-baseline mt-2">
                        <span className="text-4xl font-bold">R${plan.price}</span>
                        <span className="text-gym-gray ml-1">/{plan.period}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gym-red" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${plan.popular ? 'bg-gym-red hover:bg-gym-red/90' : ''}`}>
                      Assinar agora
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/planos">
                <Button variant="outline" className="border-gym-red text-gym-red hover:bg-gym-red/10">
                  Ver todos os planos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
              <p className="text-gym-gray max-w-2xl mx-auto">
                Conheça os profissionais que irão ajudar você a alcançar seus objetivos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "André Silva",
                  role: "Especialista em Musculação",
                  image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Camila Pereira",
                  role: "Nutricionista",
                  image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Lucas Mendes",
                  role: "Personal Trainer",
                  image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                },
                {
                  name: "Fernanda Almeida",
                  role: "Instrutora de Grupo",
                  image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                }
              ].map((trainer, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-xl hover-scale">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold">{trainer.name}</h3>
                      <p className="text-white/80">{trainer.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gym-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para começar sua transformação?</h2>
            <p className="text-gym-gray max-w-2xl mx-auto mb-8">
              Junte-se à TreinoForte hoje mesmo e dê o primeiro passo para um novo estilo de vida.
            </p>
            <Button size="lg" className="bg-gym-red hover:bg-gym-red/90">
              Agendar uma visita gratuita
            </Button>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
                <p className="text-gym-gray">
                  Tire suas dúvidas ou agende uma visita preenchendo o formulário abaixo.
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gym-red"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gym-red"
                      placeholder="seu-email@exemplo.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gym-red"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gym-red"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" className="w-full bg-gym-red hover:bg-gym-red/90">
                    Enviar mensagem
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
