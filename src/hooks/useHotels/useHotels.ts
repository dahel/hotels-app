import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const fetchHotels = () => {
  const url = 'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG';

  const { data, error } = useSWR(url, fetcher);
};
