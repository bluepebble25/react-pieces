import React from 'react';
import styled from 'styled-components';

interface SearchFormProps {
  children: React.ReactNode;
}

function SearchForm({ children }: SearchFormProps) {
  return <SearchFormBlock>{children}</SearchFormBlock>;
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
