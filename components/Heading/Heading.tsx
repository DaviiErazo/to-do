import * as React from 'react';
import Headings from './styled';

type Props = {
  type: string;
  text: string;
  props: any
}

const renderHeading = (p: Props) => {
  let Header = null;

  switch (p.type) {
    case 'H1':
      Header = Headings.H1;
      break;
    case 'H2':
      Header = Headings.H2;
      break;
    case 'H3':
      Header = Headings.H3;
      break;
    case 'H4':
      Header = Headings.H4;
      break;
    case 'H5':
      Header = Headings.H5;
      break;
    default:
      Header = Headings.H1;
      break;
  }

  return <Header {...p.props}>{p.text}</Header>;
};

const Heading = (p: Props) =>
  renderHeading(p);

export default Heading;
