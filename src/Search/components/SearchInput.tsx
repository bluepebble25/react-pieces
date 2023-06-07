import React from 'react';
import styled from 'styled-components';

interface SearchInputProps {
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
}

function SearchInput({ onChangeInput }: SearchInputProps) {
  return <SearchInputBlock onChange={onChangeInput} />;
}

const SearchInputBlock = styled.input`
  all: unset;
  font: 16px system-ui;
  color: #fff;
  height: 100%;
  width: 100%;
  padding: 6px 10px;
`;

export default SearchInput;
