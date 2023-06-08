import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import SearchForm from '../Search/components/SearchForm';
import SearchPreview from '../Search/components/SearchPreview';
import useFetchCities from '../Search/hooks/useFetchCities';

import { filterCity } from '../Search/_lib/utils';

function SearchPage() {
  const [query, setQuery] = useState('');
  const cityList = useFetchCities();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  console.log(cityList);
  console.log('입력값:', query);

  return (
    <Container>
      <Title>Search for Cities</Title>
      <SearchForm
        hasQuery={query ? true : false}
        onChangeInput={onChangeInput}
      />
      {query && <SearchPreview previewList={filterCity(cityList, query)} />}
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
