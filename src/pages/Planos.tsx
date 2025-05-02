
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Planos = () => {
  // Define the plans data
  const monthlyPlans = [
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
  ];

  // Calculate annual plans (10% discount)
  const annualPlans = monthlyPlans.map(plan => ({
    ...plan,
    price: Math.round(plan.price * 12 * 0.9),
    period: "anual",
    discount: "10% de desconto"
  }));

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gym-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Planos</h1>
            <p className="text-gym-gray max-w-2xl mx-auto">
              Escolha o plano ideal para alcançar seus objetivos fitness com a melhor infraestrutura e profissionais qualificados.
            </p>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <Tabs defaultValue="monthly" className="mx-auto">
                <TabsList className="grid grid-cols-2 w-64 mx-auto mb-8">
                  <TabsTrigger value="monthly">Mensal</TabsTrigger>
                  <TabsTrigger value="annual">Anual</TabsTrigger>
                </TabsList>
                
                {/* Monthly Plans */}
                <TabsContent value="monthly">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {monthlyPlans.map((plan, index) => (
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
                                <Check className="h-5 w-5 text-gym-red" />
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
                </TabsContent>
                
                {/* Annual Plans */}
                <TabsContent value="annual">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {annualPlans.map((plan, index) => (
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
                            {plan.discount && (
                              <span className="inline-block mt-2 bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                                {plan.discount}
                              </span>
                            )}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <Check className="h-5 w-5 text-gym-red" />
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
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Additional Options */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Serviços Adicionais</h2>
              <p className="text-gym-gray max-w-2xl mx-auto">
                Personalize sua experiência com serviços complementares para maximizar seus resultados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Personal Trainer",
                  price: "100",
                  period: "sessão",
                  description: "Treinamento personalizado com acompanhamento exclusivo."
                },
                {
                  name: "Avaliação Física",
                  price: "80",
                  period: "avaliação",
                  description: "Análise completa da composição corporal e condicionamento físico."
                },
                {
                  name: "Plano Nutricional",
                  price: "200",
                  period: "consulta",
                  description: "Orientação nutricional personalizada por nutricionista especializado."
                }
              ].map((service, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <CardDescription>
                      <div className="flex items-baseline mt-2">
                        <span className="text-2xl font-bold">R${service.price}</span>
                        <span className="text-gym-gray ml-1">/{service.period}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gym-gray">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Saber mais</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-gym-gray max-w-2xl mx-auto">
                Encontre respostas para as dúvidas mais comuns sobre nossos planos e serviços.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Como funciona a adesão aos planos?",
                  answer: "Para aderir a qualquer um dos nossos planos, basta visitar nossa academia com um documento com foto. O pagamento pode ser feito por cartão de crédito, débito ou pix. Após a inscrição, você receberá seu cartão de acesso no mesmo dia."
                },
                {
                  question: "Posso congelar meu plano?",
                  answer: "Sim, oferecemos a opção de congelamento do plano por até 30 dias por ano, sem custo adicional. O congelamento deve ser solicitado com antecedência mínima de 7 dias."
                },
                {
                  question: "Existe alguma taxa de cancelamento?",
                  answer: "Não há taxa de cancelamento para planos mensais. Para planos anuais cancelados antes do término do contrato, existe uma taxa proporcional ao tempo restante."
                },
                {
                  question: "Posso experimentar a academia antes de assinar um plano?",
                  answer: "Sim! Oferecemos um day pass gratuito para que você possa conhecer nossas instalações e experimentar nossos serviços antes de se comprometer."
                },
                {
                  question: "Os planos incluem toalhas e armários?",
                  answer: "Armários estão disponíveis para todos os planos. O serviço de toalhas está incluído apenas nos planos Premium e VIP."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gym-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gym-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-gym-gray max-w-2xl mx-auto mb-8">
              Junte-se a milhares de membros satisfeitos e transforme seu corpo e sua saúde com a TreinoForte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gym-red hover:bg-gym-red/90">
                Assinar agora
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Agendar visita
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Planos;
