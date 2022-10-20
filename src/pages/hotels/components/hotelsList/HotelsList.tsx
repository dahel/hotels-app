import Rating from '@mui/material/Rating';
import { Root, Row, Image, Details, Name, Address, CardStyled } from './hotelsList.styled';
import RoomDetails from '../roomDetails/RoomDetails';
import type { HotelWithDetails, Room } from 'types/hotel';

const HotelsList = ({ hotels }: { hotels: HotelWithDetails[] }) => {
  return (
    <div>
      {hotels.map((hotel: HotelWithDetails) => {
        return (
          <Root key={hotel.id}>
            <CardStyled>
              <Row>
                <Image src={hotel.images[0]?.url} alt="" />
                <Details>
                  <div>
                    <Name>{hotel.name}</Name>
                    <Address>{hotel.address1}</Address>
                    <Address>{hotel.address2}</Address>
                  </div>
                  <Rating name="read-only" value={+hotel.starRating} readOnly />
                </Details>
              </Row>
              {hotel.availableRooms.map((room: Room) => (
                <RoomDetails key={room.name} room={room} />
              ))}
            </CardStyled>
          </Root>
        );
      })}
    </div>
  );
};

export default HotelsList;
