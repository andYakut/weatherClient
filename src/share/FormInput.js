import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FormInput = props => {
  const { id, lable, type, name, placeholder } = props;

  return (
    <FormGroup>
      <Label for={id}>{lable}</Label>
      <Input type={type} name={name} id={id} placeholder={placeholder}></Input>
    </FormGroup>
  )
}

export default FormInput;