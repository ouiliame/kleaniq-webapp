import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { Motion, spring } from 'react-motion';
import { action as toggleMenu } from 'redux-burger-menu';
import { Button } from 'semantic-ui-react';

@autobind
class NavButton extends React.Component {

  handleClick() {
    this.props.toggleMenu();
  }

  render () {

    const buttonStyle = {
      position: 'fixed',
      zIndex: 100,
      visibility: this.props.menuIsOpen ? 'hidden' : 'visible'
    };

    const hovering = this.props.mouseX < 100 && this.props.mouseY < 55;

    const buttonVisible = {
      top: spring(-15),
      left: spring(10)
    };

    const buttonHidden = {
      top: spring(-55),
      left: spring(10)
    };

    return (
      <div>
        <Motion style={ hovering ? buttonVisible : buttonHidden }>
          { (style) =>
              <Button
                style={{
                  ...buttonStyle,
                  top: style.top,
                  left: style.left
                }}
                id="menu-button"
                size='huge'
                onClick={this.props.toggleMenu}
                icon='content' />
          }
        </Motion>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mouseX: state.mouse.x,
  mouseY: state.mouse.y,
  menuIsOpen: state.burgerMenu.isOpen
});

export default connect(mapStateToProps, {toggleMenu})(NavButton);
