import React from 'react';
import { bool, func, string } from 'prop-types'
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

EditButton.defaultProps = {
  type: 'button',
}

EditButton.propTypes = {
  type: string,
  editMode: bool.isRequired,
  setEditMode: func.isRequired,
}