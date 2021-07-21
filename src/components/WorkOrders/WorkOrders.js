import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

import workOrdersData from '../../stubs/workOrders.json';
import WorkOrder from './WorkOrder';
import { headers } from '../../constants';
import { WorkOrdersWrapper, WorkOrdersTable, WorkOrdersHeaderRow, WorkOrdersHeader } from '../../styles/workOrders';

// TODO: Convert this to a functional component
export default function WorkOrders() {
  const [dataFetched, setDataFetched] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setDataFetched(true)
    setData(workOrdersData.data.workOrders)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // * No values in the dependency array essentially mimics componentDidMount

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
            {headers.map((header) => <WorkOrdersHeader>{header}</WorkOrdersHeader>)}
          </WorkOrdersHeaderRow>
        </thead>
        <tbody>
          {data.map((workOrder) => <WorkOrder workOrder={workOrder} />)}
        </tbody>
      </WorkOrdersTable>
    </WorkOrdersWrapper>
  );
}
// }