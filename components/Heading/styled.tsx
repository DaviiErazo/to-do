import styled, { css } from 'styled-components/native';

const baseStyles = css`
  color: white;
  font-weight: 800;
  margin-top: 8px;
  margin-bottom: 8px;
  color: rgb(55, 55, 55);
  font-family: 'Rubik-Black';
`;

const H1 = styled.Text`
  ${baseStyles}
  font-size: 56px;
  line-height: 64px;
`;

const H2 = styled.Text`
  ${baseStyles};
  font-size: 48px;
  line-height: 48px;
`;

const H3 = styled.Text`
  ${baseStyles};
  font-size: 40px;
  line-height: 40px;
`;

const H4 = styled.Text`
  ${baseStyles};
  font-size: 32px;
  line-height: 40px;
`;

const H5 = styled.Text`
  ${baseStyles};
  font-size: 24px;
  line-height: 32px;
`;

const Headings = {
  H1,
  H2,
  H3,
  H4,
  H5,
};

export default Headings;
