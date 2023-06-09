import React from 'react';
import styled from 'styled-components';

interface SearchPreviewProps {
  previewList: string[];
}

function SearchPreview({ previewList }: SearchPreviewProps) {
  return (
    <SearchPreviewList>
      {previewList.length === 0 ? (
        <SearchPreviewItem>
          <p>No Matching Results</p>
        </SearchPreviewItem>
      ) : (
        previewList.map((item, index) => (
          <SearchPreviewItem key={index}>
            <p>{item}</p>
          </SearchPreviewItem>
        ))
      )}
    </SearchPreviewList>
  );
}

const SearchPreviewList = styled.ul`
  width: 340px;
  max-height: 300px;
  background-color: #fcfcfc;
  border-radius: 0 0 5px 5px;
  padding: 5px 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
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

  p {
    font-size: 1.8rem;
    line-height: 4.4rem;
  }
`;

export default React.memo(SearchPreview);
