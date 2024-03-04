import React from 'react';
import { Skeleton } from '@mui/material';

const LoadingComponent = () => {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="text" width={200} />
    </div>
  );
};

export default LoadingComponent;
