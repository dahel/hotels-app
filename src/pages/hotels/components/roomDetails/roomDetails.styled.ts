import styled from '@emotion/styled';

export const Root = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px;
  margin: 3px 0;
  border-bottom: solid 1px #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 100px;
`;

export const RoomName = styled.span`
  font-weight: bold;
`;
