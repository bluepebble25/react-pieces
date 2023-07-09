import React, { RefObject } from 'react';

interface LoadingProps {
  pageEnd: RefObject<HTMLDivElement>;
}

function Loading({ pageEnd }: LoadingProps) {
  return <div ref={pageEnd}>...Loading</div>;
}

export default Loading;
