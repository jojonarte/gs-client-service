import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageLoader: React.FC = () => {
  return (
    <Container>
      <Spin size="large" spinning style={{ fontSize: 50 }} />
    </Container>
  )
}

export default PageLoader;