import React, { RefObject } from 'react';

interface LoadingProps {
  pageEnd: RefObject<HTMLDivElement>;
}

function Loading({ pageEnd }: LoadingProps) {
  return (
    <div
      ref={pageEnd}
      style={{ fontSize: '2rem', marginTop: '16px', textAlign: 'center' }}
    >
      ...Loading
    </div>
  );
}

export default Loading;
