import styled from '@emotion/styled';
import React from "react";

const Button = styled.button`
  background-color: white;
  color: black;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px 25px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const DetailButton: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Button>더보기</Button>
    </div>
  );
};

export default DetailButton;
