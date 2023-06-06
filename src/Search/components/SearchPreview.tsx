import React from 'react';
import styled from 'styled-components';

function SearchPreview() {
  return (
    <SearchPreviewList>
      <SearchPreviewItem>
        <ItemText>1</ItemText>
      </SearchPreviewItem>
      <SearchPreviewItem>
        <ItemText>2</ItemText>
      </SearchPreviewItem>
      <SearchPreviewItem>
        <ItemText>3</ItemText>
      </SearchPreviewItem>
    </SearchPreviewList>
  );
}

const SearchPreviewList = styled.ul`
  width: 340px;
  background-color: #fcfcfc;
  border-radius: 0 0 5px 5px;
  padding: 5px 0;
`;

const SearchPreviewItem = styled.li`
  height: 4.4rem;
  border-bottom: 1px solid #dedede;
  vertical-align: center;
  padding: 0 10px;

  &:hover {
    background-color: #efefef;
  }

  &:last-child {
    border: none;
  }
`;

const ItemText = styled.p`
  font-size: 2rem;
  line-height: 4.4rem;
`;

export default SearchPreview;
