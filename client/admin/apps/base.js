import React from 'react';
import { connect } from 'react-redux';
import { observer } from 'mobx-react';
import { Application } from 'state/application/actions';

export default function registerApp(name, customMapStateToProps = () => ({})) {
  // yes, I know it's confusing with all of these references of 'App' and 'Application'
  // NOTE: YOU STILL NEED TO ADD YOUR APP TO state/application/index !!!!

  const mapStateToProps = (state) => ({
    ...customMapStateToProps(state),
    store: state.application.store
  });

  const mapDispatchToProps = (dispatch) => ({
    init: () => dispatch(Application.setName(name))
  });

  const wrapComponent = (raw) => {
    // apply mobx first
    const component = connect(mapStateToProps)(observer(raw));
    class _wrapper extends React.Component {

      constructor(props) {
        super(props);
        this.props.init();
      }

      render() {
        return (
          <component />
        );
      }

    }

    return connect(null, mapDispatchToProps)(_wrapper);
  };

  return wrapComponent;
}
