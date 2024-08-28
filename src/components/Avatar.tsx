import { styled } from 'styled-components';

interface AvatarProps {
  border: Boolean;
  width: boolean;
  src: string;
}

const AvatarStyled = styled.img<AvatarProps>`
  width: ${props => (props.width ? '3.5rem' : '6rem')};
  border: ${props => (props.border ? 'none' : '2px solid black')};
  border-radius: 10rem;
  align-self: flex-start;
`;

function Avatar({ border, width, src }: AvatarProps) {
  return (
    <>
      <AvatarStyled src={`https://www.gravatar.com/avatar/${src}?d=robohash`} border={border} width={width} />
    </>
  );
}

export default Avatar;
