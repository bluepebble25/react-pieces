import React from 'react';
import styled from 'styled-components';

import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

interface SearchFormProps {
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
}

function SearchForm({ onChangeInput }: SearchFormProps) {
  return (
    <SearchFormBlock>
      <SearchInput onChangeInput={onChangeInput} />
      <SearchButton />
    </SearchFormBlock>
  );
}

const SearchFormBlock = styled.form`
  background-color: #4654e1;
  width: 340px;
  height: 44px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default SearchForm;
