import styled from '@emotion/styled';
import { media } from 'theme/theme';

export const Root = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px 0;
  margin: 3px 0;
  border-bottom: solid 1px #f0f0f0;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }

  @media ${media.tablet} {
    font-size: unset;
  }
`;

export const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 80px;

  @media ${media.tablet} {
    flex: 0 0 120px;
  }
`;

export const RoomName = styled.span`
  font-weight: bold;
`;
