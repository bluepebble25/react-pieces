import React from 'react';
import styled from 'styled-components';

interface SearchInputProps {
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

function SearchInput({ onChangeInput, onKeyDown }: SearchInputProps) {
  return <SearchInputBlock onChange={onChangeInput} onKeyDown={onKeyDown} />;
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
