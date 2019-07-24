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
import Spinner from '../components/share/Spinner';
import Error from '../components/share/Error';
import Success from '../components/share/Success';
import { login } from '../store/actions/auth.thunk';

class LoginPage extends Component {
  onSubmitLogin = async (formValues) => {
    this.props.login(formValues);
  }

  renderLoginForm() {
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

  render() {
    const res = this.props.responce;
    if(!this.props.isLoading) {
      if(!res) {
        return this.renderLoginForm();
      } else {
        return res.success ? <Success message={res.message} /> : <Error err={res.message} />
      }
    } else {
      return <Spinner />
    }
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

const mapStateToProps = state => {
  return { ...state.auth }
}

const connectedPage = connect(mapStateToProps, { login })(LoginPage);

export default reduxForm({ form: 'loginForm', validate })(connectedPage);