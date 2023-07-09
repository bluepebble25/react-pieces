import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CardList from '../InfiniteScroll/components/CardList';
import styled from 'styled-components';
import Loading from '../InfiniteScroll/components/Loading';

function InfiniteScrollPage() {
  const [images, setImages] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const pageEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  async function fetchImages(page: number) {
    try {
      const res = await axios.get(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=${page}&per_page=10`
      );
      setTimeout(() => {
        setImages([...images, ...res.data]);
        setIsLoading(false);
      }, 1000);

      setIsLoading(true);
    } catch (e) {
      console.log('err', e);
    }
  }

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Wrapper>
      {images && <CardList images={images} />}
      {isLoading && <Loading pageEnd={pageEnd} />}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default InfiniteScrollPage;
