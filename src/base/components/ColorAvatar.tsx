import React from 'react';
import styled from 'styled-components';

const StyledCircle = styled.article`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: ${props => props.color};


`;

interface ColorAvatarProps {
  color: string;
}
const ColorAvatar: React.FC<ColorAvatarProps> = ({ color }) => {

  return <StyledCircle color={color} />
};

export default ColorAvatar;