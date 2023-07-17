import image from './pulp-fiction-john-travolta.gif';
import { ImageWrapper, StyledLink, Warning } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <ImageWrapper>
      <img src={image} alt="not found" style={{ width: 300 }} />
      <Warning>Opsss! This page doesn&apos;t exist</Warning>

      <StyledLink to="/">Open home page</StyledLink>
    </ImageWrapper>
  );
}
