import React from 'react';
import styled from '@emotion/styled';

interface ItemProps {
  href: string;
  imageSrc: string;
  text: string;
}

const Item: React.FC<ItemProps> = ({ href, imageSrc, text }) => (
  <StyledItem href={href}>
    <div>
      <img src={imageSrc} alt={text} />
      <p>{text}</p>
    </div>
  </StyledItem>
);

export default Item;

const StyledItem = styled.a`
  color: black;
  text-decoration: none;
  outline: none;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 90px;
      border-radius: 32px;
    }
    p {
      padding-top: 7px;
    }
  }
`;
