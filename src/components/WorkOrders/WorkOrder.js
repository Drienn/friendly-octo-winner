import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { WorkOrdersRow, WorkOrderData } from '../../styles/workOrders';
import WorkStatus from './WorkStatus';

const WorkOrder = ({ workOrder }) => {
  const history = useHistory();
  const { id, dueDate, number, status, title, priority, updatedAt, createdAt, location } = workOrder;
  const showWorkOrderDetails = (id, workOrderDetails) => {
    history.push({
      pathname: `/workOrders/${id}`,
      state: {
        workOrderDetails
      }
    });
  }
  return (
    <WorkOrdersRow onClick={() => showWorkOrderDetails(id, workOrder)}>
      <WorkOrderData>{moment(dueDate).format('MM/DD/YY')}</WorkOrderData>
      <WorkOrderData>{number}</WorkOrderData>
      <WorkOrderData>
        <WorkStatus status={status} />
      </WorkOrderData>
      <WorkOrderData>{title?.toUpperCase() || 'Not Listed'}</WorkOrderData>
      <WorkOrderData>{priority}</WorkOrderData>
      <WorkOrderData>
        <div>{location?.map(loc => <div>{loc.name}</div>) || 'Not listed'}</div>
      </WorkOrderData>
      <WorkOrderData>{moment(updatedAt).format('MM/DD/YY')}</WorkOrderData>
      <WorkOrderData>{moment(createdAt).format('MM/DD/YY')}</WorkOrderData>
    </WorkOrdersRow>
  )
}

export default WorkOrder;
