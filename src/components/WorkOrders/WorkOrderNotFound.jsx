import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { WorkOrderDetailsWrapper, WorkOrderDetailsHeader } from '../../styles/workOrders';


export default function WorkOrderNotFound() {
  const { id } = useParams();
  return (
    <WorkOrderDetailsWrapper>
      <WorkOrderDetailsHeader>Sorry</WorkOrderDetailsHeader>
      <b>{id}</b> appears to be an invalid work order. Head back to <Link to="/workOrders">work orders</Link>?
    </WorkOrderDetailsWrapper>
  )
}