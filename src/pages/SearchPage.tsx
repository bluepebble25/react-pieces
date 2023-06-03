import styled from 'styled-components';
import SearchForm from '../Search/SearchForm';
import SearchInput from '../Search/components/SearchInput';
import SearchButton from '../Search/components/SearchButton';

function SearchPage() {
  return (
    <Container>
      <Title>Search for Cities</Title>
      <SearchForm>
        <SearchInput />
        <SearchButton />
      </SearchForm>
    </Container>
  );
}

const Title = styled.h1`
  margin: 200px 0 30px 0;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SearchPage;
