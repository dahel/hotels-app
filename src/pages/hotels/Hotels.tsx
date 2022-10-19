import { useEffect } from 'react';
import Skeleton from './components/skeleton/Skeleton';
import { useSearchParams } from 'react-router-dom';
import { useHotelsStore, FilterParams } from 'store/hotels/hotels.store';
import FilterBox from './components/filterBox/FilterBox';
import HotelsList from './components/hotelsList/HotelsList';

const Hotels = () => {
  const { fetch, filteredHotels, hotels, filter, pending } = useHotelsStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const adultsAmount = +(searchParams.get('adultsAmount') || 2);
  const childrenAmount = +(searchParams.get('childrenAmount') || 0);
  const rating = +(searchParams.get('rating') || 3);
  const handleFilterChange = (options: FilterParams) => {
    setSearchParams(options as unknown as { [key: string]: string });
  };

  useEffect(() => {
    fetch();
  }, [fetch]);

  useEffect(() => {
    hotels.length && filter({ adultsAmount, childrenAmount, rating });
  }, [filter, hotels, adultsAmount, childrenAmount, rating]);

  return (
    <>
      {pending && <Skeleton />}
      <FilterBox
        rating={rating}
        adultsAmount={adultsAmount}
        childrenAmount={childrenAmount}
        onChange={handleFilterChange}
      />
      <HotelsList hotels={filteredHotels} />
    </>
  );
};

export default Hotels;
