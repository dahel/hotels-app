import React from 'react';
import { Root, RoomInfo, RoomName } from './roomDetails.styled';

const RoomDetails = ({ room }: any) => {
  return (
    <Root key={room.name}>
      <RoomInfo>
        <RoomName>{room.name}</RoomName>
        <span>Adults: {room.occupancy.maxAdults}</span>
        <span>Children: {room.occupancy.maxChildren}</span>
      </RoomInfo>
      <div>{room.longDescription}</div>
    </Root>
  );
};

export default RoomDetails;
