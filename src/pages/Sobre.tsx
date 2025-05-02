
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Sobre = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gym-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a TreinoForte</h1>
            <p className="text-gym-gray max-w-2xl mx-auto">
              Conheça nossa história, valores e missão de transformar vidas através do fitness.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
                <p className="text-gym-gray mb-4">
                  Fundada em 2010, a TreinoForte nasceu da paixão de um grupo de profissionais de educação física que acreditavam que o treinamento de qualidade deveria ser acessível a todos.
                </p>
                <p className="text-gym-gray mb-4">
                  O que começou como uma pequena academia de bairro cresceu para se tornar uma referência em treinamento físico de alta performance, mantendo sempre o compromisso com a qualidade e atenção personalizada.
                </p>
                <p className="text-gym-gray">
                  Hoje, contamos com mais de 30 profissionais qualificados e milhares de alunos que transformaram suas vidas através do nosso método exclusivo de treinamento.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Academia TreinoForte" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gym-red/20 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Missão e Valores</h2>
              <p className="text-gym-gray">
                Nossos princípios orientam tudo o que fazemos para proporcionar a melhor experiência aos nossos alunos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Missão",
                  description: "Transformar vidas através do treinamento físico de qualidade, promovendo saúde, bem-estar e autoconfiança."
                },
                {
                  title: "Visão",
                  description: "Ser reconhecida como a melhor academia do Brasil, referência em qualidade de treinamento e resultados comprovados."
                },
                {
                  title: "Valores",
                  description: "Excelência, respeito, compromisso, inovação e paixão por ajudar as pessoas a alcançarem seus objetivos."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover-scale">
                  <h3 className="text-2xl font-bold mb-4 text-gym-dark">{item.title}</h3>
                  <p className="text-gym-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Facilities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Nossas Instalações</h2>
              <p className="text-gym-gray">
                Equipamentos modernos, espaços amplos e ambiente motivador para o seu treinamento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  title: "Área de Musculação"
                },
                {
                  image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  title: "Área de Cardio"
                },
                {
                  image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  title: "Sala de Aulas Coletivas"
                },
                {
                  image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  title: "Espaço Funcional"
                },
                {
                  image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  title: "Vestiários"
                },
                {
                  image: "https://images.unsplash.com/photo-1606335543042-57c525922933?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  title: "Café e Nutrição"
                }
              ].map((facility, index) => (
                <div key={index} className="group overflow-hidden rounded-xl hover-scale">
                  <div className="relative h-64">
                    <img 
                      src={facility.image} 
                      alt={facility.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-white text-xl font-bold p-6">{facility.title}</h3>
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
            <h2 className="text-3xl font-bold mb-4">Venha conhecer pessoalmente</h2>
            <p className="text-gym-gray max-w-2xl mx-auto mb-8">
              Agende uma visita e conheça de perto tudo o que a TreinoForte pode oferecer para você.
            </p>
            <Button size="lg" className="bg-gym-red hover:bg-gym-red/90">
              Agendar visita gratuita
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sobre;
