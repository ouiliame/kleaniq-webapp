import React, { Component } from 'react';
import {
  Modal,
  Segment,
  Form,
  Grid,
  Button,
  Input,
  Header
} from 'semantic-ui-react';

export default class SignInButton extends Component {
  render() {
    return (
      <Modal dimmer='blurring' trigger={<li><Button>Sign In</Button></li>}>
        <Grid columns={2}>
          <Grid.Column>
            <Segment basic padded='very'>
              <Form>
                <Form.Field>
                  <label>User ID</label>
                  <Input icon='users' iconPosition='left' placeholder='User ID' />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <Input icon='lock' type='password' iconPosition='left' placeholder='Password' />
                </Form.Field>
                <Button primary fluid>Login</Button><br/>
                <Button fluid disabled>I can't log in</Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <div style={{padding: 25, paddingLeft: 0}}>
              <Header as='h2'>
                <Header.Content>
                  No account? Sign up today.
                  <Header.Subheader>
                    Join the world's most advanced kitchen network
                  </Header.Subheader>
                </Header.Content>
              </Header>
              <Form>
                <Form.Field>
                  <label>Your Name</label>
                  <Input icon='user' iconPosition='left' placeholder='Your Name' />
                </Form.Field>
                <Form.Field>
                  <label>Phone Number</label>
                  <Input icon='call' iconPosition='left' placeholder='Phone Number' />
                </Form.Field>
                <Form.Field>
                  <label>Establishment Address</label>
                  <Input icon='marker' iconPosition='left' placeholder='Establishment' />
                </Form.Field>
                <Button primary fluid>Request a demo</Button><br/>
              </Form>
            </div>
          </Grid.Column>
        </Grid>
      </Modal>
    );
  }
}
