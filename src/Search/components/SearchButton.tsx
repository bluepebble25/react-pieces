import React from 'react';
import styled from 'styled-components';

function SearchButton() {
  return (
    <SearchButtonBlock>
      <SVG viewBox="0 0 1024 1024">
        <path d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z" />
      </SVG>
    </SearchButtonBlock>
  );
}

const SearchButtonBlock = styled.button`
  all: unset;
  cursor: pointer;
  width: 44px;
  height: 44px;
`;

const SVG = styled.svg`
  color: #fff;
  fill: currentColor;
  width: 100%;
  height: 100%;
  padding: 5px;
`;

export default SearchButton;
