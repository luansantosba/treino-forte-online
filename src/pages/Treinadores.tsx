
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Treinadores = () => {
  const trainers = [
    {
      id: 1,
      name: "André Silva",
      role: "Especialista em Musculação",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bio: "André é formado em Educação Física com especialização em treinamento de força. Com mais de 10 anos de experiência, ele já ajudou centenas de alunos a atingirem seus objetivos.",
      specialties: ["Hipertrofia", "Força", "Reabilitação"],
      instagram: "andre.silva"
    },
    {
      id: 2,
      name: "Camila Pereira",
      role: "Nutricionista",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bio: "Camila é nutricionista esportiva com especialização em nutrição para hipertrofia e definição muscular. Ela combina ciência e praticidade para criar planos alimentares eficientes.",
      specialties: ["Nutrição Esportiva", "Emagrecimento", "Suplementação"],
      instagram: "camila.nutri"
    },
    {
      id: 3,
      name: "Lucas Mendes",
      role: "Personal Trainer",
      image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bio: "Lucas é especialista em treinamento personalizado e preparação física. Com foco na individualidade de cada aluno, ele cria programas eficientes para resultados rápidos.",
      specialties: ["HIIT", "Cross Training", "Funcional"],
      instagram: "lucas.trainer"
    },
    {
      id: 4,
      name: "Fernanda Almeida",
      role: "Instrutora de Grupo",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bio: "Fernanda é especializada em aulas coletivas e treinamento funcional. Sua energia contagiante e conhecimento técnico fazem de suas aulas uma experiência única.",
      specialties: ["Spinning", "Step", "Zumba"],
      instagram: "fe.fit"
    },
    {
      id: 5,
      name: "Roberto Gomes",
      role: "Fisioterapeuta",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bio: "Roberto é fisioterapeuta com especialização em reabilitação esportiva. Trabalha integrando a atividade física na recuperação e prevenção de lesões.",
      specialties: ["Reabilitação", "Avaliação Postural", "Prevenção de Lesões"],
      instagram: "roberto.fisio"
    },
    {
      id: 6,
      name: "Julia Santos",
      role: "Yoga e Pilates",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bio: "Julia é instrutora certificada de yoga e pilates. Combina técnicas tradicionais e modernas para melhorar flexibilidade, força e bem-estar mental.",
      specialties: ["Hatha Yoga", "Pilates", "Meditação"],
      instagram: "julia.yoga"
    }
  ];

  const categories = [
    { value: "all", label: "Todos" },
    { value: "personal", label: "Personal Trainers" },
    { value: "nutrition", label: "Nutrição" },
    { value: "group", label: "Aulas em Grupo" },
    { value: "health", label: "Saúde" }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gym-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossa Equipe</h1>
            <p className="text-gym-gray max-w-2xl mx-auto">
              Profissionais qualificados e apaixonados, prontos para guiar você na jornada de transformação.
            </p>
          </div>
        </section>

        {/* Trainers Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="all" className="mb-12">
              <TabsList className="flex justify-center flex-wrap gap-2 mb-8">
                {categories.map(category => (
                  <TabsTrigger key={category.value} value={category.value}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trainers.map(trainer => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="personal">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trainers.filter(t => t.role.includes("Personal") || t.role.includes("Musculação")).map(trainer => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="nutrition">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trainers.filter(t => t.role.includes("Nutricionista")).map(trainer => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="group">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trainers.filter(t => t.role.includes("Grupo") || t.role.includes("Yoga")).map(trainer => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="health">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trainers.filter(t => t.role.includes("Fisioterapeuta") || t.role.includes("Yoga")).map(trainer => (
                    <TrainerCard key={trainer.id} trainer={trainer} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Join the Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Junte-se à Nossa Equipe</h2>
                <p className="text-gym-gray mb-6">
                  Estamos sempre em busca de talentos apaixonados por fitness e transformação. Se você é um profissional qualificado e compartilha da nossa missão, queremos conhecer você!
                </p>
                <ul className="space-y-3 mb-8">
                  {["Ambiente de trabalho dinâmico e motivador", 
                    "Oportunidades de crescimento profissional", 
                    "Programas de capacitação contínua",
                    "Remuneração competitiva"].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gym-red" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-gym-red hover:bg-gym-red/90">
                  Enviar currículo
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -left-8 -top-8 w-32 h-32 bg-gym-red/20 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Equipe de treinadores" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gym-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Treine com os melhores</h2>
            <p className="text-gym-gray max-w-2xl mx-auto mb-8">
              Agende uma aula experimental com um de nossos profissionais e comece sua transformação hoje mesmo.
            </p>
            <Button size="lg" className="bg-gym-red hover:bg-gym-red/90">
              Agendar aula experimental
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

interface TrainerProps {
  trainer: {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    specialties: string[];
    instagram: string;
  }
}

const TrainerCard = ({ trainer }: TrainerProps) => {
  return (
    <Card className="overflow-hidden hover-scale">
      <div className="h-64 overflow-hidden">
        <img 
          src={trainer.image} 
          alt={trainer.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
        <p className="text-gym-red font-medium mb-3">{trainer.role}</p>
        <p className="text-gym-gray mb-4 text-sm">{trainer.bio}</p>
        <div className="mb-4">
          <p className="text-sm font-semibold mb-2">Especialidades:</p>
          <div className="flex flex-wrap gap-2">
            {trainer.specialties.map((specialty, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a 
            href={`https://instagram.com/${trainer.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gym-gray hover:text-gym-red flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @{trainer.instagram}
          </a>
          <Button variant="outline" size="sm" className="text-sm">
            Ver perfil
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Treinadores;
