import styled from '@emotion/styled';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  max-width: 700px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-bottom: solid 1px #f0f0f0;
  padding-bottom: 15px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const Name = styled.span`
  font-size: 18px;
`;

export const Address = styled.span`
  display: block;
`;

export const RatingStyled = styled(Rating)`
  flex: 1;
  justify-content: end;
`;

export const CardStyled = styled(Card)`
  padding: 15px;
  margin: 15px 0;
`;
