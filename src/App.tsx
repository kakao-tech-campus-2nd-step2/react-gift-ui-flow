import React from "react";
import { Outlet } from "react-router-dom";
import styled from '@emotion/styled';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App = () => {
  const name = 'Josh Perez';

  return (
    <div>
      <Title>Hello, {name}</Title>
    </div>
  );
};

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  color: gray;
`;
