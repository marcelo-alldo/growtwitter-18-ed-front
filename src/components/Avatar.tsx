import { styled } from 'styled-components';

interface AvatarProps {
  useBorder: boolean;
  useWidth: boolean;
  src: string;
}

const AvatarStyled = styled.img<AvatarProps>`
  width: ${props => (props.useWidth ? '3.5rem' : '6rem')};
  border: ${props => (!props.useBorder ? 'none' : '2px solid black')};
  border-radius: 10rem;
  align-self: flex-start;
`;

function Avatar({ useBorder, useWidth, src }: AvatarProps) {
  return (
    <>
      <AvatarStyled
        src={`https://www.gravatar.com/avatar/${src}?d=robohash`}
        useBorder={useBorder}
        useWidth={useWidth}
      />
    </>
  );
}

export default Avatar;
