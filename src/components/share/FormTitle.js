import React from 'react';
import { CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import styled from 'styled-components';

const FormTitle = props => {
  const { title, subtitle } = props;

  const TitleBody = styled(CardBody)`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Title = styled(CardTitle)`
    font-size: 1.5rem;
  `;

  return (
    <TitleBody>
      <Title>{title}</Title>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </TitleBody>
  )
}

export default FormTitle;