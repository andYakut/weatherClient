import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Spinner from './Spinner';

const StyledLink = styled(Link)`
  display: block;

  :hover {
    text-decoration: none;
  }
`

const HistoryTable = (props) => {
  if(!props.body) return <Spinner />
  if(props.body.length === 0) return <div>You don't have weather requests</div>
  return <Table>
      <tbody>
        {props.body.map((item, index) => {
          return (
            <tr key={`history-table-body-${index}`}>
              <th>
                {item.date}
              </th>
              <th>
                {item.cityName}
              </th>
              <th>
                <StyledLink to={`/history/details/${item._id}`}>Details</StyledLink>
              </th>
            </tr>
          )
        })}
      </tbody>
    </Table>
}

export default HistoryTable;