import React from 'react';
import styled from 'styled-components/native';

const CardWrapper = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
})`
  background-color: white;
  border-radius: 45px;
  padding: 16px;
  margin: 8px 0;
  height: 100%;
`;

export const Card = ({ children }: { children: ChildNode }) => {
  return <CardWrapper>{children && children}</CardWrapper>;
};

export default Card;
