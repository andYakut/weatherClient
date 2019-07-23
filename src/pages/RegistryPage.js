import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  CardBody,

} from 'reactstrap';
import { reduxForm } from 'redux-form';

import FormInput from '../components/share/FormInput';
import FormTitle from '../components/share/FormTitle';
import api from '../apis/api';
import history from '../browserHistory';

class RegistryPage extends Component {
  onSubmitRegistry = async (formValues) => {
    const user = { username: formValues.username, email: formValues.email, password: formValues.password };
    try {
      const response = await api.post('/user/register', user);
      console.log(response);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container className="mt-2">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <FormTitle
                title="Weather Forecast"
                subtitle="Registration"
              />
              <CardBody>
                <Form onSubmit={this.props.handleSubmit(this.onSubmitRegistry)}>
                  <FormInput
                    name="username"
                    type="text"
                    lable="Username"
                  />
                  <FormInput
                    name="email"
                    type="email"
                    lable="Email"
                  />
                  <FormInput
                    name="password"
                    type="password"
                    lable="Password"
                  />
                  <FormInput
                    name="confirmPassword"
                    type="password"
                    lable="Confirm password"
                  />
                  <Button>Registry</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container >
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "Required";
  } else if (formValues.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!formValues.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'Invalid email address'
  }

  if (!formValues.password) {
    errors.password = 'Required'
  } else if (formValues.password.length < 2) {
    errors.password = 'Must be 2 characters or more'
  }

  if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Password must be concurrent"
  }

  return errors;
}

export default reduxForm({ form: 'registryForm', validate })(RegistryPage);