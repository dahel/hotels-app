import { useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import Skeleton from './components/skeleton/Skeleton';
import { useSearchParams } from 'react-router-dom';
import { useHotelsStore, FilterParams } from 'store/hotels/hotels.store';
import FilterBox from './components/filterBox/FilterBox';
import HotelsList from './components/hotelsList/HotelsList';
import ErrorFallback from 'components/errorFallback/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';

const Hotels = () => {
  const { fetch, filteredHotels, hotels, filter, pending } = useHotelsStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const adultsAmount = +(searchParams.get('adultsAmount') || 2);
  const childrenAmount = +(searchParams.get('childrenAmount') || 0);
  const rating = +(searchParams.get('rating') || 3);
  const handleFilterChange = (options: FilterParams) => {
    setSearchParams(options as unknown as { [key: string]: string });
  };
  const debounceFilter = useMemo(() => debounce(filter, 300), []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    hotels.length && debounceFilter({ adultsAmount, childrenAmount, rating });
  }, [filter, hotels, adultsAmount, childrenAmount, rating]);

  return (
   <>
   <FilterBox
        rating={rating}
        adultsAmount={adultsAmount}
        childrenAmount={childrenAmount}
        onChange={handleFilterChange}
      />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={fetch}>
        {pending ? <Skeleton /> : <HotelsList hotels={filteredHotels} />}
        {!pending && !filteredHotels.length && <div>No rooms available for selected filters</div>}
      </ErrorBoundary>
   </>
      
  );
};

export default Hotels;
