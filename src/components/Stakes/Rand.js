import React, { useEffect, useRef, useState } from 'react';
import { CardData } from './CardData';
import Card from './Cards';
import { motion, useTransform, useScroll } from 'framer-motion';
import styled from 'styled-components';

const Div = styled(motion.div)`
  font-size: 12rem;
  font-family: 'Playfair Display', serif;

  //height: 100%;
`;
const DivWrap2 = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ff548d;
  color: #fff;
`;
const DivWrap = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Bot = styled.div`
  height: 10px;
  width: 10px;
  background: orange;
`;
const BotWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: baseline;
  justify-content: baseline;
`;

const Rand = () => {
  //   const [isSticky, setIsSticky] = useState(false);
  //   const targetRef = useRef(null);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           setIsSticky(entry.isIntersecting);
  //         });
  //       },
  //       { threshold: 0.5 } // Adjust threshold as needed
  //     );

  //     if (targetRef.current) {
  //       observer.observe(targetRef.current);
  //     }

  //     return () => {
  //       if (targetRef.current) {
  //         observer.unobserve(targetRef.current);
  //       }
  //     };
  //   }, []);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);
  const opacityWord1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const opacityWord2 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.32],
    [0, 1, 0.4]
  );
  const opacityWord3 = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.57],
    [0, 0.4, 1, 0.4]
  );
  const opacityWord4 = useTransform(
    scrollYProgress,
    [0, 0.6, 0.75, 0.8],
    [0, 0.4, 1, 0.4]
  );
  const opacityWord5 = useTransform(
    scrollYProgress,
    [0, 0.85, 1, 1],
    [0, 0.4, 1, 1]
  );
  return (
    <div style={{ height: '300vh' }} ref={targetRef}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '105vh',
          background: 'rgb(245,245,245)',

          display: 'flex',
          alignItems: 'center',
          overflowX: 'auto',
          color: '#FF0054',
        }}
      >
        <motion.div
          style={{ x, transform: 'translate3d(0, 0, 0)' }}
          className="flex "
        >
          <DivWrap2>
            <Div style={{ opacity: opacityWord1 }}>DON'T</Div>
            <br />
          </DivWrap2>
          <DivWrap2>
            <Div style={{ opacity: opacityWord2 }}>SACRIFICE</Div>
          </DivWrap2>
          <DivWrap2>
            <Div style={{ opacity: opacityWord3 }}>QUALITY</Div>
          </DivWrap2>
          <DivWrap2>
            <Div style={{ opacity: opacityWord4 }}>FOR</Div>
          </DivWrap2>
          <DivWrap2>
            <Div style={{ opacity: opacityWord5 }}>PRICE</Div>
          </DivWrap2>
          {/* {CardData.map((card) => {
            return <Card card={card} key={card.id} title={card.title}></Card>;
          })} */}
        </motion.div>
      </div>
    </div>
  );
};

export default Rand;
