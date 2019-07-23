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
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import FormInput from '../components/share/FormInput';
import FormTitle from '../components/share/FormTitle';
import { login } from '../store/actions/auth.thunk';

class LoginPage extends Component {
  onSubmitLogin = async (formValues) => {
    this.props.login(formValues);
  }

  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <CardBody className="form-title">
                <FormTitle
                  title="Weather Forecast"
                  subtitle="Login to continue"
                />
              </CardBody>
              <CardBody>
                <Form onSubmit={this.props.handleSubmit(this.onSubmitLogin)}>
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
                  <Button>Login</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

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

  return errors;
}

const connectedPage = connect(null, { login })(LoginPage);

export default reduxForm({ form: 'loginForm', validate })(connectedPage);