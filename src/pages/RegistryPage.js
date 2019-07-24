import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  CardBody,
  Spinner,
  Alert,

} from 'reactstrap';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';

import FormInput from '../components/share/FormInput';
import FormTitle from '../components/share/FormTitle';
import { register } from '../store/actions/auth.thunk';

const CentralSpinner = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class RegistryPage extends Component {
  onSubmitRegistry = async (formValues) => {
    this.props.register(formValues);
  }

  renderSpinner() {
    return (
      <CentralSpinner>
        <Spinner color="dark" />
      </CentralSpinner>
    )
  }

  renderSuccess(message) {
    return (
      <Alert color="success">{message}</Alert>
    )
  }
  
  renderError(error) {
    return <Alert color="danger">{error}</Alert>
  }

  renderRegisterForm() {
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

  render() {
    let content = null;
    const res = this.props.response;

    if(!this.props.isLoading) {
      if(!res.status) {
        content = this.renderRegisterForm()
      } else {
        content = res.status === 200 ? this.renderSuccess(res.message) : this.renderError(res.message);
      }
    } else {
      content = this.renderSpinner()
    }
    return content;
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

const mapStateToProps = state => {
  return { ...state.register }
}
const connectedPage = connect(mapStateToProps, { register })(RegistryPage);

export default reduxForm({ form: 'registryForm', validate })(connectedPage);