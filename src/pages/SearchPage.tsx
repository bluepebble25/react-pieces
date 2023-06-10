import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import SearchForm from '../Search/components/SearchForm';
import SearchPreview from '../Search/components/SearchPreview';
import useFetchCities from '../Search/hooks/useFetchCities';

import useDebounce from '../Search/hooks/useDebounce';
import { filterCity } from '../Search/_lib/utils';

function SearchPage() {
  const [tmpQuery, setTmpQuery] = useState(''); // tmpQuery 값을 debounce한 후 query에 set함
  const [previewList, setPreviewList] = useState<string[]>([]);
  const [currIndex, setCurrIndex] = useState(-1);
  const query = useDebounce(tmpQuery, 500);
  const cityList = useFetchCities();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmpQuery(e.target.value);
  };

  const handleArrowKey = (e: React.KeyboardEvent) => {
    const DOWN = 'ArrowDown';
    const UP = 'ArrowUp';
    const ESCAPE = 'Escape';

    if (previewList.length > 0) {
      switch (e.key) {
        case DOWN:
          setCurrIndex((prev) => ++prev);
          if (previewList.length === currIndex + 1) {
            // 자동완성 리스트 맨 아래에서 아래 화살표 눌렀을 때 맨 위로
            setCurrIndex(0);
          }
          break;
        case UP:
          setCurrIndex((prev) => --prev);
          if (currIndex <= 0) setCurrIndex(-1);
          break;
        case ESCAPE:
          setCurrIndex(-1);
          break;
      }
    }
  };

  useEffect(() => {
    setPreviewList(filterCity(cityList, query));
  }, [query, cityList]);

  return (
    <Container>
      <Title>Search for Cities</Title>
      <SearchForm
        hasQuery={query ? true : false}
        onChangeInput={onChangeInput}
        onKeyDown={handleArrowKey}
      />
      {query && (
        <SearchPreview previewList={previewList} currIndex={currIndex} />
      )}
    </Container>
  );
}

const Title = styled.h1`
  margin: 200px 0 30px 0;
  font-size: 3.2rem;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SearchPage;
