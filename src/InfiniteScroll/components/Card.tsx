import React from 'react';
import styled from 'styled-components';

interface CardProps {
  imgUrl: string;
}

function Card({ imgUrl }: CardProps) {
  return (
    <CardBlock>
      <CardImage src={imgUrl} />
    </CardBlock>
  );
}

const CardBlock = styled.div``;

const CardImage = styled.img`
  width: 300px;
  height: 400px;
`;

export default Card;
