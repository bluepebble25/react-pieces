import React from 'react';
import styled from 'styled-components';

import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

interface SearchFormProps {
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  hasQuery: boolean;
}

interface SerachFormBlock {
  hasQuery: boolean;
}

function SearchForm({ onChangeInput, onKeyDown, hasQuery }: SearchFormProps) {
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <SearchFormBlock hasQuery={hasQuery} onSubmit={onSubmitHandler}>
      <SearchInput onChangeInput={onChangeInput} onKeyDown={onKeyDown} />
      <SearchButton />
    </SearchFormBlock>
  );
}

const SearchFormBlock = styled.form<SerachFormBlock>`
  background-color: #4654e1;
  width: 340px;
  height: 44px;
  border-radius: ${(props) => (props.hasQuery ? '5px 5px 0 0' : '5px')};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default SearchForm;
