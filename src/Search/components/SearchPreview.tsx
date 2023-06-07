import React, { useState } from 'react';
import styled from 'styled-components';

interface SearchPreviewProps {
  query: string;
  cityList: { [key: string]: string[] };
}

function SearchPreview({ query, cityList }: SearchPreviewProps) {
  const [filteredResult, setFilteredResult] = useState([]);

  const filterCity = () => {
    // state를 돌며 하위의 도시 중 일치하는 것들을 배열에 담아 반환한다. => 이중 map 사용
    const states = Object.keys(cityList);
    const matchedResults: string[] = [];
    states.forEach((state) => {
      cityList[state].forEach((city) => {
        if (query === '') {
          return;
        } else if (city.toLowerCase().startsWith(query.toLowerCase())) {
          matchedResults.push(city);
        }
      });
    });

    console.log('일치', matchedResults);
  };

  filterCity();

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
