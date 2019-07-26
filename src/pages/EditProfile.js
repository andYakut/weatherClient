import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Form,
  Card,
  CardBody,
  Alert,

} from 'reactstrap';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form';

import FormInput from '../components/share/FormInput';
import FormTitle from '../components/share/FormTitle';
import Spinner from '../components/share/Spinner';
import Error from '../components/share/Error';
import Success from '../components/share/Success';
import { editProfile, getProfile } from '../store/actions/editProfile/editProfile.thunk';


class EditProfile extends Component {
  async componentDidMount() {
    await this.props.getProfile();
    this.props.changeField('username', this.props.profile.username);
  }

  onSubmitEdit = async (formValues) => {
    this.props.editProfile(formValues);
  }

  renderServerError() {
    if (!this.props.error) return null;
    return (
      <Alert color="danger">
        {this.props.error.message}
      </Alert>
    )
  }

  renderEditForm() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <Card>
              <CardBody className="form-title">
                <FormTitle
                  title="Weather Forecast"
                  subtitle="Edit profile"
                />
                {this.renderServerError()}
              </CardBody>
              <CardBody>
                <Form onSubmit={this.props.handleSubmit(this.onSubmitEdit)}>
                  <FormInput
                    name="username"
                    type="username"
                    lable="User Name"
                    component="input"
                    value="username"
                  />
                  <FormInput
                    name="password"
                    type="password"
                    lable="Password"
                    component="input"
                  />
                  <ButtonGroup>
                    <Button>Edit</Button>
                    <Button>Cancel</Button>
                  </ButtonGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }

  render() {
    if (!this.props.isLoading) {
      if (this.props.profile !== null) {
        return this.renderEditForm();
      } else {
        return this.props.success ? <Success message={this.props.success} /> : <Error err={this.props.error} />
      }
    } else {
      return <Spinner />
    }
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = 'Required'
  }

  if (!formValues.password) {
    errors.password = 'Required'
  } else if (formValues.password.length < 2) {
    errors.password = 'Must be 2 characters or more'
  }

  return errors;
}

const mapDispatchToProps = dispatch => {
  return {
    changeField: (field, value) => {
      dispatch(change('editForm', field, value));
    },
    editProfile: (values) => {
      dispatch(editProfile(values));
    },
    getProfile: () => {
      dispatch(getProfile());
    }
  }
}

const mapStateToProps = state => {
  return {...state.editProfile}
}

const connectedPage = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default reduxForm({ form: 'editForm', validate })(connectedPage);