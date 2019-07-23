import React from 'react';
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

import './styles/login-registry.css';

const RegistryPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card>
            <CardBody className="form-title">
            <FormTitle 
                title="Weather Forecast"
                subtitle="Registration"
              />
            </CardBody>
            <CardBody>
              <Form>
                <FormInput
                  id="username-registry"
                  name="username"
                  type="text"
                  lable="Username"
                  placeholder=""
                />
                <FormInput
                  id="email-registry"
                  name="email"
                  type="email"
                  lable="Email"
                  placeholder="example@mail.com"
                />
                <FormInput
                  id="password-registry"
                  name="password"
                  type="password"
                  lable="Password"
                  placeholder=""
                />
                <FormInput
                  id="confirm-pass-registry"
                  name="confirm-password"
                  type="password"
                  lable="Confirm password"
                  placeholder=""
                />
                <Button>Registry</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RegistryPage;