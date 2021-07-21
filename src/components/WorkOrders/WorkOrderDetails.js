import React from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { WorkOrderDetailsWrapper, WorkOrderDetailsHeader, WorkOrderDetailsContent, WorkOrderDetailsInfo, WorkOrderDetailsDescription, WorkOrderDetailsData } from '../../styles/workOrders';

const WorkOrderDetails = () => {
  const { state } = useLocation();
  const { workOrderDetails } = state;
  const { priority, updatedAt, number, title, description, category, createdAt, totalTime, additionalCosts, location } = workOrderDetails;

  return (
    <WorkOrderDetailsWrapper>
      <WorkOrderDetailsContent>
        <WorkOrderDetailsHeader>
          Details
        </WorkOrderDetailsHeader>
        <WorkOrderDetailsInfo>
          <div>
            Priority: {priority}
          </div>
          <div>
            Updated: {moment(updatedAt).format('MM/DD/YY h:mm:ss a')}
          </div>
        </WorkOrderDetailsInfo>
        <WorkOrderDetailsDescription>
          <div>
            Work Order#:{number}
          </div>
          <div>
            Title: {title}
          </div>

          <div>
            Description: {description}
          </div>
        </WorkOrderDetailsDescription>
        <WorkOrderDetailsData>
          <div>
            Category: {category}
          </div>
          <div>
            Created: {moment(createdAt).format('MM/DD/YY h:mm:ss a')}
          </div>
        </WorkOrderDetailsData>

        <div>Locations</div>
        <div>{location?.map(loc =>
          <div>{loc.name}</div>
        )}
        </div>
      </WorkOrderDetailsContent>
    </WorkOrderDetailsWrapper>
  )
};

export default WorkOrderDetails;