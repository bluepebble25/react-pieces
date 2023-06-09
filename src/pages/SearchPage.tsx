import React, { useState } from 'react';
import styled from 'styled-components';

import SearchForm from '../Search/components/SearchForm';
import SearchPreview from '../Search/components/SearchPreview';
import useFetchCities from '../Search/hooks/useFetchCities';

import useDebounce from '../Search/hooks/useDebounce';

function SearchPage() {
  const [tmpQuery, setTmpQuery] = useState(''); // tmpQuery 값을 debounce한 후 query에 set함
  const query = useDebounce(tmpQuery, 500);
  const cityList = useFetchCities();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmpQuery(e.target.value);
  };

  return (
    <Container>
      <Title>Search for Cities</Title>
      <SearchForm
        hasQuery={query ? true : false}
        onChangeInput={onChangeInput}
      />
      {query && <SearchPreview cityList={cityList} query={query} />}
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
