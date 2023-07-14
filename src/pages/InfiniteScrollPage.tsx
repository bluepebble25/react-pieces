import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CardList from '../InfiniteScroll/components/CardList';
import styled from 'styled-components';
import Loading from '../InfiniteScroll/components/Loading';

function InfiniteScrollPage() {
  const [images, setImages] = useState<any[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const pageEnd = useRef<HTMLDivElement>(null);
  useEffect(() => {
    fetchImages(pageNum);
  }, [pageNum]);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      if (!isLoading && entries[0].isIntersecting) {
        loadMore();
      }
    };
    const observer = new IntersectionObserver(callback, { threshold: 1 });
    let target = pageEnd.current;
    target && observer.observe(target);

    return () => {
      target && observer.unobserve(target);
    };
  }, [isLoading]);

  async function fetchImages(page: number) {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=${page}&per_page=15`
      );
      // await sleep(5000); // 5초의 시간동안 지연시켜서 loading으로 인해 callback이 중복실행되지 않는지 검사하기 위함
      setImages([...images, ...res.data]);
    } catch (e) {
      alert('err: ' + e);
    } finally {
      setIsLoading(false);
    }
  }

  const sleep = (delay: number) => {
    return new Promise((resolve) => setTimeout(resolve, delay));
  };

  const loadMore = () => {
    setPageNum((prev) => prev + 1);
  };

  return (
    <Wrapper>
      {images && <CardList images={images} />}
      <Loading pageEnd={pageEnd} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 24px 0 24px;
  margin-right: auto;
  margin-left: auto;
`;

export default InfiniteScrollPage;
