import { Root, Row, Image, Name, Address, RatingStyled, CardStyled } from './hotelsList.styled';
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
                <Image src={hotel.images[0].url} alt={'todo generate it'} />
                <div>
                  <Name>{hotel.name}</Name>
                  <Address>{hotel.address1}</Address>
                  <Address>{hotel.address2}</Address>
                </div>
                <RatingStyled name="read-only" value={+hotel.starRating} readOnly />
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
