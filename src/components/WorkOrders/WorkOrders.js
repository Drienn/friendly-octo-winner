import React from 'react';
import { Box } from '@material-ui/core';
import WorkOrder from './WorkOrder';
import { headers } from '../../constants';
import { WorkOrdersWrapper, WorkOrdersTable, WorkOrdersHeaderRow, WorkOrdersHeader } from '../../styles/workOrders';
import { useStore } from '../../hooks';

export default function WorkOrders() {
  const { data, dataFetched } = useStore();

  if (!dataFetched) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <WorkOrdersWrapper>
      <Box fontSize={20} fontWeight='fontWeightBold'>Work Orders</Box>
      <WorkOrdersTable>
        <thead>
          <WorkOrdersHeaderRow>
            {headers.map((header) => <WorkOrdersHeader key={header}>{header}</WorkOrdersHeader>)}
          </WorkOrdersHeaderRow>
        </thead>
        <tbody>
          {data.map((workOrder) => <WorkOrder key={workOrder?.id} workOrder={workOrder} />)}
        </tbody>
      </WorkOrdersTable>
    </WorkOrdersWrapper>
  );
}