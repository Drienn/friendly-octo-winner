import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { WorkOrderDetailsWrapper, WorkOrderDetailsHeader, WorkOrderDetailsContent, WorkOrderDetailsInfo, WorkOrderDetailsDescription, WorkOrderDetailsData } from '../../styles/workOrders';
import { dateTimeFormat, safeText } from '../../utils';
import EditButton from '../EditButton';
import EditableInput from '../EditableInput';
import { priorityOptions } from '../../constants'
import { useLocaleState, useStore } from '../../hooks';
import WorkOrderNotFound from './WorkOrderNotFound';

const WorkOrderDetails = () => {
  const { updateData } = useStore();
  const [editMode, setEditMode] = useState(false);
  const { state = {} } = useLocation();
  const { workOrderDetails = {} } = state;
  const [{
    id,
    priority,
    updatedAt,
    number,
    title,
    description,
    category,
    createdAt,
    location }, setState] = useLocaleState(workOrderDetails)

  if (!id) {
    return <WorkOrderNotFound />
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!editMode) {
      updateData({ id, priority, title, description });
    }
  }
  return (
    <WorkOrderDetailsWrapper onSubmit={onSubmit}>
      <EditButton editMode={editMode} setEditMode={setEditMode} type="submit" />
      <WorkOrderDetailsContent>
        <WorkOrderDetailsHeader>
          <b>Details</b>
        </WorkOrderDetailsHeader>
        <WorkOrderDetailsInfo>
          <EditableInput
            label="Priority:"
            name="priority"
            editMode={editMode}
            value={priority}
            type="select"
            options={priorityOptions}
            onChange={setState}
          />
          <div>
            <b>Updated:</b> {dateTimeFormat(updatedAt)}
          </div>
        </WorkOrderDetailsInfo>
        <WorkOrderDetailsDescription>
          <div>
            <b>Work Order#:</b> {safeText(number)}
          </div>
          <EditableInput
            label="Title:"
            name="title"
            editMode={editMode}
            value={title}
            onChange={setState}
          />
          <EditableInput
            label="Description"
            name="description"
            editMode={editMode}
            value={description}
            onChange={setState}
          />
        </WorkOrderDetailsDescription>
        <WorkOrderDetailsData>
          <div>
            <b>Category:</b> {safeText(category)}
          </div>
          <div>
            <b>Created:</b> {dateTimeFormat(createdAt)}
          </div>
        </WorkOrderDetailsData>

        <label><b>Locations:</b></label><br />
        <ul>
          {safeText(location?.map(loc => <li key={loc.name}>{loc.name}</li>))}
        </ul>
      </WorkOrderDetailsContent>
    </WorkOrderDetailsWrapper>
  )
};

export default WorkOrderDetails;