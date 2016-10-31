import React, { Component } from 'react';

const style = {
  width: 647
};

export default class EnvironmentMenu extends Component {
  render() {
    return (
      <div className="environment" style={style} {...this.props}>
        <h4>FOR RESTAURANTS</h4>
        <h4>FOR PROVIDERS</h4>
      </div>
    );
  }
}
