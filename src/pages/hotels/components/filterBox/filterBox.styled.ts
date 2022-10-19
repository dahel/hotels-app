import styled from '@emotion/styled';
import { media } from 'theme/theme';

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  align-items: center;

  @media ${media.tablet} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  button {
    min-width: 40px;
  }
`;
