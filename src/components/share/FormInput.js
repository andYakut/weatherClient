import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Field } from 'redux-form';

class FormInput extends Component {

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="mt-2">
          <div className="text-danger">
            {error}
          </div>
        </div>
      );
    }
  }

  renderInput = ({ input, lable, type, meta }) => {
    const inputDanger = `${meta.error && meta.touched ? 'alert-danger' : ''}`;
    const lableDanger = `${meta.error && meta.touched ? 'text-danger' : ''}`;
    
    return (
      <FormGroup>
        <Label className={lableDanger}>{lable}</Label>
        <Input className={inputDanger} {...input} type={type} ></Input>
        {this.renderError(meta)}
      </FormGroup>
    )
  }

  render() {
    const { lable, type, name } = this.props;

    return (
      <Field name={name} lable={lable} type={type} component={this.renderInput} />
    )
  }
}

export default FormInput;