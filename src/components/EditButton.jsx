import React from 'react';
import { Button } from '@material-ui/core';


export default function EditButton({ editMode, setEditMode, type }) {
  return (
    <Button
      type={type}
      color={editMode ? 'primary' : 'secondary'}
      {...editMode && { style: { background: 'green' } }}
      onClick={() => setEditMode(!editMode)}
      variant={editMode ? 'contained' : 'outlined'}
    >
      {editMode ? 'Save' : 'Edit'}
    </Button>
  )
}