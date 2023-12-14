import React, { useRef } from 'react';
import { CardData } from './CardData';
import Card from './Cards';
import { motion, useTransform, useScroll } from 'framer-motion';
import './Hori.css';

const HoriCarousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);
  return (
    <div ref={targetRef} className="h-[200vh] overflow-x-auto">
      <div className="sticky top-0  h-[100vh] flex items-center  bg-purple-600 overflow-x-auto">
        <motion.div style={{ x }} className="flex gap-4 min-w-[500vw]">
          {CardData.map((card) => {
            return <Card card={card} key={card.id} title={card.title}></Card>;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default HoriCarousel;
