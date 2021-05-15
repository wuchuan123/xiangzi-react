import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Nav} from './Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

type Props = {
  className?: string
  scrollTop?: number
}

export const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const {className, scrollTop = 0, children} = props;
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) return;
      mainRef.current.scrollTop = scrollTop;
    }, 0);
  }, [scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={className}>
        {children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};