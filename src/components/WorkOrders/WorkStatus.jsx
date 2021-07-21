import React from 'react';
import { WorkOrderStatus } from '../../styles/workOrders';
import { statusMap } from '../../constants'

export default function WorkStatus({ status }) {
  const { text, style } = statusMap[status];
  return <WorkOrderStatus style={{ ...style }}>{text}</WorkOrderStatus>
}
