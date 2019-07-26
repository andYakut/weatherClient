import React from 'react';
import { Spinner as ReactSpinner } from 'reactstrap';
import styled from 'styled-components';

const CentralSpinner = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Spinner = () => {
  return (
    <CentralSpinner>
      <ReactSpinner color="dark" />
    </CentralSpinner>
  )
}

export default Spinner;