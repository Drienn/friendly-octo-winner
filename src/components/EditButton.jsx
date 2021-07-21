import React from 'react';
import { Button } from '@material-ui/core';

export default function EditButton({ editMode, setEditMode, type }) {
  return (
    <Button
      {...editMode && { style: { background: 'green' } }}
      type={type}
      color={editMode ? 'primary' : 'secondary'}
      onClick={() => setEditMode(!editMode)}
      variant={editMode ? 'contained' : 'outlined'}
    >
      {editMode ? 'Save' : 'Edit'}
    </Button>
  )
}