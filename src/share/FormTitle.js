import React from 'react';
import { CardTitle, CardSubtitle } from 'reactstrap';

const FormTitle = props => {
  const { title, subtitle } = props;

  return (
    <React.Fragment>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </React.Fragment>
  )
}

export default FormTitle;