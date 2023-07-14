import React from 'react';
import styled from 'styled-components';
import Card from './Card';

interface CardListProps {
  images: any[];
}

function CardList({ images }: CardListProps) {
  return (
    <CardListBlock>
      {images.map((image, i) => {
        const imgUrl = image.urls.small;
        return <Card key={i} imgUrl={imgUrl} />;
      })}
    </CardListBlock>
  );
}

const CardListBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0 auto;
  max-width: 900px;
`;

export default CardList;
