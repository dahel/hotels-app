import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import {Root, Row, Image, Name, Address, RatingStyled, CardStyled, RoomRow, Column} from './hotelsList.styled';
import RoomDetails from '../roomDetails/RoomDetails';

const HotelsList = ({ items }: any) => {
  return <div>
    {items.map((hotel: any) => {
      return (
        <Root key={hotel.id}>
          <CardStyled>
            <Row>
              <Image src={hotel.images[0].url} alt={'todo generate it'}/>
              <div>
                <Name>{ hotel.name }</Name>
                <Address>{hotel.address1}</Address>
                <Address>{hotel.addres2}</Address>
              </div>
              <RatingStyled name="read-only" value={+hotel.starRating} readOnly />
            </Row>  
            {hotel.availableRooms.map((room: any) => <RoomDetails key={room.name} room={room} /> )}
          </CardStyled>
        </Root>
      )
    })}
  </div>
}

export default HotelsList;