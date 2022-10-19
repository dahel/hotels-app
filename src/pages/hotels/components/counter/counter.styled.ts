import styled from '@emotion/styled';
import { media } from 'theme/theme';

export const Root = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  border: solid 1px #e4f0fc;
  padding: 5px;
  border-radius: 5px;
  margin: 0 auto;

  @media ${media.tablet} {
    margin: unset;
  }

  button {
    min-width: 40px;
  }
`;

export const Amount = styled.span`
  font-size: 18px;
  width: 30px;
`;

export const Label = styled.span`
  min-width: 70px;
`;