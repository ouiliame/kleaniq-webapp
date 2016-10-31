import React from 'react';
import autobind from 'autobind-decorator';
import { connect } from 'react-redux';
import './style.css';

@autobind
class AdminPage extends React.Component {
  render () {
    return (
      <div id="admin-wrapper">
        <div id="admin-nav">Hello</div>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
