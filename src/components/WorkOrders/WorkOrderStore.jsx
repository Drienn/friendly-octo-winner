import React, { useState, useEffect } from 'react';
import { StoreContext } from '../../hooks'
import workOrdersData from '../../stubs/workOrders.json';

export default function WorkOrderStore({ children }) {
  const [dataFetched, setDataFetched] = useState(false);
  const [data, setData] = useState([]);
  const updateData = changes => {
    const changeIndex = data.findIndex(({ id }) => id === changes.id);
    const updatedData = { ...data[changeIndex], ...changes };
    setData([
      ...data.slice(0, changeIndex),
      updatedData,
      ...data.slice(changeIndex + 1)
    ])
  }
  useEffect(() => {
    setDataFetched(true)
    setData(workOrdersData.data.workOrders)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // * No values in the dependency array essentially mimics componentDidMount
  const context = {
    data,
    dataFetched,
    updateData,
  }
  return (
    <StoreContext.Provider value={context} >
      {children}
    </StoreContext.Provider >
  )
}
