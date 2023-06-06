import styled from 'styled-components';
import SearchForm from '../Search/components/SearchForm';
import SearchInput from '../Search/components/SearchInput';
import SearchButton from '../Search/components/SearchButton';
import SearchPreview from '../Search/components/SearchPreview';

function SearchPage() {
  return (
    <Container>
      <Title>Search for Cities</Title>
      <SearchForm>
        <SearchInput />
        <SearchButton />
      </SearchForm>
      <SearchPreview />
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
