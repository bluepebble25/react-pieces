import React, { useMemo } from 'react';
import CardList from '../InfiniteScroll/components/CardList';
import styled from 'styled-components';
import Loading from '../InfiniteScroll/components/Loading';
import useFetchImages from '../InfiniteScroll/hooks/useFetchImages';
import useIntersect from '../InfiniteScroll/hooks/useIntersect';

function InfiniteScrollPage() {
  const { data, hasNextPage, isFetching, fetchNextPage } = useFetchImages(1);

  const images = useMemo(() => {
    return data ? data.pages.flatMap(({ data }) => data) : [];
  }, [data]);

  const pageEnd = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    // await sleep(5000);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  // 로딩 시간 지연 테스트용
  // const sleep = (delay: number) => {
  //   return new Promise((resolve) => setTimeout(resolve, delay));
  // };

  return (
    <Wrapper>
      {images && <CardList images={images} />}
      {hasNextPage && <Loading pageEnd={pageEnd} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 24px 0 24px;
  margin-right: auto;
  margin-left: auto;
`;

export default InfiniteScrollPage;
