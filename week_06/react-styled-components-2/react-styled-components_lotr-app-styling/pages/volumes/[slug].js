import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  font: var(--font-body);
  color: var(--color-earth);
  &:hover {
    color: var(--color-smoke);
  }
`;

const StyledHeader = styled.div`
  padding: 2rem;
`;

const StyledSection = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-image: linear-gradient(
    0.29turn,
    ${(props) => (props.$color ? props.$color : "red")} 65%,
    var(--color-smoke) 100%
  );
  color: var(--color-smoke);
  font: var(--font-caption);
  margin-bottom: 2rem;
`;

const StyledBookTitle = styled.strong`
  font: var(--font-title);
`;

const Styledtext = styled.p`
  margin: 0;
`;

const StyledList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledListElement = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font: var(--font-headline-1);
`;

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <StyledHeader>
        <StyledLink href="/volumes">← All Volumes</StyledLink>
        <StyledTitle>{title}</StyledTitle>
        <Styledtext>{description}</Styledtext>
      </StyledHeader>
      <StyledSection $color={color}>
        <StyledList>
          {books.map(({ ordinal, title }) => (
            <StyledListElement key={title}>
              {ordinal}: <StyledBookTitle>{title}</StyledBookTitle>
            </StyledListElement>
          ))}
        </StyledList>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledSection>
      {previousVolume ? (
        <div>
          <StyledLink href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </StyledLink>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </StyledLink>
        </div>
      ) : null}
    </>
  );
}
