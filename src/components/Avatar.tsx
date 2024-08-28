import { styled } from 'styled-components';

interface AvatarProps {
  border: Boolean;
  width: boolean;
  url: string;
}

const AvatarStyled = styled.div<AvatarProps>`
  width: ${props => (props.width ? '3rem' : '6rem')};
  border: ${props => (props.border ? 'none' : '2px solid black')};
  border-radius: 10rem;
`;

function Avatar({ border, width, url }: AvatarProps) {
  return (
    <>
      <AvatarStyled url={`https://www.gravatar.com/avatar/${url}?d=robohash`} border={border} width={width} />
    </>
  );
}

export default Avatar;
