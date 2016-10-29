import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

const style = {
  width: 550
}

export default class SolutionsMenu extends Component {
  render() {
    return (
      <div className="solutions" style={style} {...this.props}>
        <Header
          as='h3'
          image='http://semantic-ui.com/images/icons/school.png'
          content='For Restaurant Managers'
          subheader='Manage your account settings and set email preferences'
          />

        <Header
          as='h3'
          image='http://semantic-ui.com/images/icons/school.png'
          content='For Grease Service Providers'
          subheader='Manage your account settings and set email preferences'
          />

        <Header
          as='h3'
          image='http://semantic-ui.com/images/icons/school.png'
          content='For Biofuel Refiners and Distributors'
          subheader='Manage your account settings and set email preferences'
          />
      </div>
    )
  }
};
