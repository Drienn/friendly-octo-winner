import React from 'react';
import { shape } from 'prop-types'
import { useHistory } from 'react-router-dom';
import { WorkOrdersRow, WorkOrderData } from '../../styles/workOrders';
import WorkStatus from './WorkStatus';
import { safeText, dateFormat } from '../../utils';

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
      <WorkOrderData>{dateFormat(dueDate)}</WorkOrderData>
      <WorkOrderData>{number}</WorkOrderData>
      <WorkOrderData>
        <WorkStatus status={status} />
      </WorkOrderData>
      <WorkOrderData>{safeText(title?.toUpperCase())}</WorkOrderData>
      <WorkOrderData>{priority}</WorkOrderData>
      <WorkOrderData>
        <div>{safeText(location?.map(loc => <div key={loc.name}>{loc.name}</div>))}</div>
      </WorkOrderData>
      <WorkOrderData>{dateFormat(updatedAt)}</WorkOrderData>
      <WorkOrderData>{dateFormat(createdAt)}</WorkOrderData>
    </WorkOrdersRow>
  )
}

WorkOrder.propTypes = {
  workOrder: shape({}).isRequired,
}

export default WorkOrder;
