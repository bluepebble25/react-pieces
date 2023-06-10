import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SearchPreviewProps {
  previewList: string[];
  currIndex: number;
}

interface SearchPreviewItemProps {
  isFocused?: boolean;
  selectRef?: React.Ref<HTMLLIElement>;
}

function SearchPreview({ previewList, currIndex }: SearchPreviewProps) {
  return (
    <SearchPreviewList>
      {previewList.length === 0 ? (
        <SearchPreviewItem>
          <p>No Matching Results</p>
        </SearchPreviewItem>
      ) : (
        previewList.map((item, index) => {
          const location = item.split('>');
          return (
            <Link
              to={`https://www.google.com/maps/place/${location[0]}+${location[1]}`}
              target="_blank"
            >
              <SearchPreviewItem key={index} isFocused={index === currIndex}>
                <p>{item}</p>
              </SearchPreviewItem>
            </Link>
          );
        })
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

  a {
    text-decoration-line: none;
    color: black;
  }
`;

const SearchPreviewItem = styled.li<SearchPreviewItemProps>`
  height: 4.4rem;
  border-bottom: 1px solid #dedede;
  vertical-align: center;
  padding: 0 10px;
  background-color: ${(props) => props.isFocused && '#efefef'};

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
