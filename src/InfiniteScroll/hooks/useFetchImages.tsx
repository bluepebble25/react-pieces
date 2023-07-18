import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';

function useFetchImages(startPage: number) {
  const getPageImageData = async ({ pageParam = startPage }) => {
    const res = await axios.get(`https://api.unsplash.com/photos`, {
      params: {
        client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
        page: pageParam,
        per_page: 15,
      },
    });

    return {
      current_page: pageParam,
      data: res.data,
      isLast: false,
    };
  };

  return useInfiniteQuery(['images'], getPageImageData, {
    getNextPageParam: (lastPage, totalPages) => {
      return lastPage.isLast ? undefined : lastPage.current_page + 1;
    },
    staleTime: 60000 * 20, // 1분 * n
  });
}

export default useFetchImages;
