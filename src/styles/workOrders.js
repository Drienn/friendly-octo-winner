import styled from 'styled-components';

export const WorkOrdersWrapper = styled.form`
    height: 100vh;
    overflow: scroll;
    padding: 0px 20px;
    background: white;
`;

export const WorkOrdersTable = styled.table`
    width: 100%;
    position: relative;
    border-collapse: collapse;
    margin-bottom: 10px;
`;

export const WorkOrdersHeaderRow = styled.tr`
    background: white;
    position: sticky;
    top: 0px;
`;

export const WorkOrdersHeader = styled.th`
    padding: 10px;
`;

export const WorkOrdersRow = styled.tr`
    height: 30px;
    cursor: pointer;
    transition: 0.5s;
	:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
`;

export const WorkOrderData = styled.td`
    text-align: center;
    font-size: 14px;
`;


export const WorkOrderDetailsWrapper = styled(WorkOrdersWrapper)`
    padding: 20px;
`;

export const WorkOrderDetailsHeader = styled.h3`
  border-bottom: 1px solid black;
  padding-bottom: 5px;
`;


export const WorkOrderDetailsContent = styled.div`
    max-width: 30%;
`;

export const WorkOrderDetailsInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
`;

export const WorkOrderDetailsDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0 10px 0;
`;

export const WorkOrderDetailsData = styled.div`
    display: flex;
    flex-direction: column;
`;
export const WorkOrderStatus = styled.div`
  border-radius: 5px;
  font-weight: bold;
  width: 100px;
  margin: 0px auto;
`;
