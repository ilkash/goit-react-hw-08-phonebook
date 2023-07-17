import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageWrapper = styled.div`
  margin-top: 120px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Warning = styled.p`
  color: purple;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: darkblue;
  font-weight: 500;
`;
