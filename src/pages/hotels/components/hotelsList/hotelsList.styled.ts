import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import { media } from 'theme/theme';

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
  justify-content: space-between;
  gap: 10px;
  border-bottom: solid 1px #f0f0f0;
  padding-bottom: 15px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  flex: 1;

  @media ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Name = styled.span`
  font-size: 18px;
`;

export const Address = styled.span`
  display: block;
`;

export const CardStyled = styled(Card)`
  padding: 15px;
  margin: 15px 0;
`;
