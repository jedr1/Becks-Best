import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Tick from '../../assets/tickg.png';
import Img1 from '../../assets/bbr-min.jpg';
import './Value.css';
import { useInView } from 'react-intersection-observer';

const Container = styled.div`
  display: flex;
  overflow: hidden;
  background: #fff;
  position: relative;
`;
const Content = styled.div`
  background: rgb(245, 245, 245);
  padding: 100px;
  padding-left: 275px;
  padding-right: 225px;
  max-width: 900px;
`;
const Header = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
`;
const List = styled.ul`
  padding-top: 25px;
`;
const ListItem = styled.li`
  display: flex;
  padding-top: 20px;
  gap: 15px;
`;
const TickIcon = styled.img`
  height: 20px;
  width: 20px;
`;
const Div = styled.div``;
const ImgWrap = styled.div`
  height: 300px;
  width: 550px;
  margin-left: -150px;
  margin-top: 100px;
  position: relative;
  overflow: hidden;
  //background: rgb(237, 237, 237);
  //background: black;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  /* transform: translateX(-550px);
  transition: 300ms ease-in-out;
  ${ImgWrap}:hover {
    transform: translateX(0px);
  }*/
  //transform: translateX(-540px);
`;
const Block = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  overflow: hidden;
  //transform: translateX(-550px);
  transition: transform 0.5s ease-in-out;
`;
const Block2 = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  position: absolute;
  /* transform: translateX(-550px);
  transition: transform 1s ease-in-out; */
`;

const Value = () => {
  //   const blockRef = useRef(null);
  //   const imgRef = useRef(null);

  //   useEffect(() => {
  //     const options = {
  //       root: null,
  //       threshold: 0.5, // Change this threshold based on your needs
  //     };

  //     const blockObserver = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.style.transform = 'translateX(0)';
  //         }
  //       });
  //     }, options);

  //     const imgObserver = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.style.transform = 'translateX(0)';
  //         }
  //       });
  //     }, options);

  //     if (blockRef.current) {
  //       blockObserver.observe(blockRef.current);
  //     }

  //     if (imgRef.current) {
  //       imgObserver.observe(imgRef.current);
  //     }

  //     return () => {
  //       if (blockRef.current) {
  //         blockObserver.unobserve(blockRef.current);
  //       }

  //       if (imgRef.current) {
  //         imgObserver.unobserve(imgRef.current);
  //       }
  //     };
  //   }, []);
  const [view, setView] = useState(false);
  const [view2, setView2] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true, // Set this to true if you want the callback to be executed only once
  });

  useEffect(() => {
    if (inView) {
      //setView(true);

      const timeoutId = setTimeout(() => {
        setView(true);
      }, 500);

      const timeoutId2 = setTimeout(() => {
        setView2(true);
      }, 800);
      return () => {
        clearTimeout(timeoutId);
        clearTimeout(timeoutId2);
      };

      // Clean up the timeout if the component is unmounted before the timeout expires
    }
  }, [inView]);
  console.log(view2);
  return (
    <Container>
      <Content>
        <Header>Why purchase from us?</Header>
        <List>
          <ListItem>
            <TickIcon src={Tick} />
            <Div>Luxury assured</Div>
          </ListItem>
          <ListItem>
            <TickIcon src={Tick} />
            <Div>Worldwide delivery</Div>
          </ListItem>
          <ListItem>
            <TickIcon src={Tick} />
            <Div ref={ref}>You'll save money</Div>
          </ListItem>
          <ListItem>
            <TickIcon src={Tick} />
            <Div>Crafted to last</Div>
          </ListItem>
          <ListItem>
            <TickIcon src={Tick} />
            <Div>28 day money back guarantee</Div>
          </ListItem>
        </List>
      </Content>
      <ImgWrap>
        {/* <Block />
        <Img src={Img1} /> */}

        {view ? (
          <Block className="block">
            {view2 ? (
              <>
                <Block2 className="block2" />
                <Img src={Img1} />
              </>
            ) : (
              <div></div>
            )}
          </Block>
        ) : (
          <p></p>
        )}
      </ImgWrap>
    </Container>
  );
};

export default Value;
