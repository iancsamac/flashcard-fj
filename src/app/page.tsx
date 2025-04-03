'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import ContentCard from '@/components/contentCard';
import { flashCards, alunos } from '@/lib/utils';




export default function FlashcardsPage() {
  const [flashcards] = useState(flashCards);
  const [nomeAlunos] = useState(alunos);
  const [flippedCards, setFlippedCards] = useState<{[key: number]: boolean}>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);


  const toggleCardFlip = (cardId: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Flashcards</h1>

      <div ref={scrollContainerRef} className="w-full overflow-x-auto flex space-x-4 pb-4 scroll-smooth">
        {flashcards.map((card) => (
          <motion.div 
            key={card.id}
            className="min-w-[250px] w-64 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card 
              className={`h-96 cursor-pointer transition-transform duration-500 ${
                flippedCards[card.id] ? 'rotate-y-180' : ''
              }`}
              onClick={() => toggleCardFlip(card.id)}
            >
              <CardContent className="flex items-center justify-center rounded-2xl h-full relative bg-red-500 shadow-sm">
                <div 
                  className={`absolute w-full h-full flex items-center justify-center text-center text-xl flex-col ${
                    flippedCards[card.id] ? 'rotate-y-180 opacity-0' : 'opacity-100'
                  }`}
                >
                  <ContentCard >
                    {card.front}
                  </ContentCard>
                  <span className='text-xs font-extrabold'>
                  {card.aluno} - {nomeAlunos[card.aluno] || ""}
                  </span>
                  <span className='text-sm font-extrabold mb-2'>
                  TURMA DELTA
                  </span>
                </div>

                <div 
                  className={`absolute w-full h-full flex items-center justify-center text-center text-xl ${
                    flippedCards[card.id] ? 'rotate-y-180 opacity-100' : 'rotate-y-180 opacity-0'
                  }`}
                >
                  <div className='flex bg-white w-full p-2 font-bold'>

                  {card.back}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
