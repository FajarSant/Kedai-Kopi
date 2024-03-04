import { Skeleton } from '@mui/material';

const Loading = ({ tableWidth, tableHeight }) => {
  return (
    <div className="text-center">
      <Skeleton variant="text" width={100} height={20} />
      <Skeleton variant="rect" width={tableWidth} height={tableHeight} style={{ margin: '10px 0' }} />
    </div>
  );
};

export default Loading;