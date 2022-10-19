import create from 'zustand';
import type { Hotel, HotelDetails, HotelWithDetails } from 'types/hotel';

const getHotelFullInfo = async (hotel: Hotel): Promise<HotelWithDetails> => {
  const response = await fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotel.id}`);
  const data: Awaited<Promise<HotelDetails>> = await response.json();

  return { ...hotel, ...data, availableRooms: [] };
};

interface BearState {
  pending: boolean;
  hotels: Hotel[];
  filteredHotels: HotelWithDetails[];
  fetch: () => Promise<void>;
  filter: (params: FilterParams) => Promise<void>;
}

export interface FilterParams {
  rating: number;
  adultsAmount: number;
  childrenAmount: number;
}

export const useHotelsStore = create<BearState>((set, get: any) => ({
  pending: false,
  hotels: [],
  filteredHotels: [],
  fetch: async () => {
    set({ pending: true });

    const url = 'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG';
    const response = await fetch(url);

    set({ hotels: await response.json() });
  },
  filter: async ({ rating, adultsAmount, childrenAmount }) => {
    set({ pending: true });

    const hotelsWithRating = get().hotels.filter((hotel: Hotel) => +hotel.starRating >= rating);
    const hotelsFullInfo: Awaited<Promise<HotelWithDetails[]>> = await Promise.all(
      hotelsWithRating.map(getHotelFullInfo)
    );
    const filteredHotels = hotelsFullInfo.reduce(
      (result: HotelWithDetails[], hotelFullInfo: HotelWithDetails) => {
        const availableRooms = hotelFullInfo.rooms.filter(
          ({ occupancy }) =>
            occupancy.maxAdults >= adultsAmount && occupancy.maxChildren >= childrenAmount
        );

        return availableRooms.length ? [...result, { ...hotelFullInfo, availableRooms }] : result;
      },
      [] as HotelWithDetails[]
    );

    set({ pending: false, filteredHotels });
  }
}));
