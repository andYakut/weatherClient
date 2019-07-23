import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  CardBody,

} from 'reactstrap';

import FormInput from '../../share/FormInput';
import FormTitle from '../../share/FormTitle';
import { login } from '../../store/actions';

import './styles/login-registry.css';

class LoginPage extends Component {
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
                <Form>
                  <FormInput
                    id="email-login"
                    name="email"
                    type="email"
                    lable="Email"
                    placeholder="example@mail.com"
                  />
                  <FormInput
                    id="password-login"
                    name="password"
                    type="password"
                    lable="Password"
                    placeholder=""
                  />
                  <Button onClick={() => this.props.login('andy', 'sdkfjl43kjfl43f')}>Login</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(null, { login })(LoginPage);