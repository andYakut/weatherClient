import React from 'react';
import { Alert } from 'reactstrap';

const Error = ({err}) => {
  return <Alert color="danger">{err}</Alert>
}

export default Error;