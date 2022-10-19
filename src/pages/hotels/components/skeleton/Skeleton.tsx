import Skeleton from '@mui/material/Skeleton';
import { Root, Row, ImageRow, Column } from './skeleton.styled';

const HotelsSkeleton = () => {
  return (
    <Root data-testid="skeleton">
      <Row>
        <ImageRow>
          <Skeleton variant="rectangular" width={100} height={100} />
          <Column>
            <Skeleton variant="rectangular" width={100} height={15} />
            <Skeleton variant="rectangular" width={100} height={15} />
          </Column>
        </ImageRow>

        <Skeleton variant="rectangular" width={100} height={30} />
      </Row>
      <Row>
        <Column>
          <Skeleton variant="rectangular" width={100} height={20} />
          <Skeleton variant="rectangular" width={100} height={20} />
          <Skeleton variant="rectangular" width={100} height={20} />
        </Column>
        <Column>
          <Skeleton variant="rectangular" width={550} height={10} />
          <Skeleton variant="rectangular" width={550} height={10} />
          <Skeleton variant="rectangular" width={550} height={10} />
        </Column>
      </Row>
    </Root>
  );
};

export default HotelsSkeleton;
