import React from 'react';
import { Alert } from 'reactstrap';

const Success = ({message}) => {
  return <Alert color="success">{message}</Alert>
}

export default Success;