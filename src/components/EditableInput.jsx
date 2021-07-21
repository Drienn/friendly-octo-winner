import React from 'react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { safeText } from '../utils';

const inputTypeMap = {
  select: Select,
  text: Input,
  input: Input,
  undefined: Input,
}

export default function EditableInput({ editMode, value, type, onChange, options, label, name, ...rest }) {
  const InputComponent = inputTypeMap[type]
  const children = options?.map(({ label, value }) => <MenuItem value={value}>{label}</MenuItem>)
  return editMode ? (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <InputComponent {...rest} onChange={({ target: { value: val } }) => onChange({ [name]: val })} value={value || ''} children={children} />
    </FormControl >
  ) : <div><b>{label}</b> {safeText(value)}</div>
}

EditableInput.defaultProps = {
  onChange: () => null,
}