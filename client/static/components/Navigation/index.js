import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import { Motion, spring } from 'react-motion';

import {
  Container
} from 'semantic-ui-react';

import SignInButton from './SignInButton';
import {
  SolutionsMenu,
  EnvironmentMenu,
  CompanyMenu
} from './menus';

import './style.css';
import $ from 'jquery';

const mouseIsHovering = (selector) => $(selector+':hover').length != 0;

@autobind
class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      selectedItem: '',
      bgWidth: 0,
      bgHeight: 0,
      bgX: 0,
      bgY: 0
    };
  }

  _enter(selectedItem) {

    $('#kiq-menu-content > div').removeClass('active');

    let {width, height} = this._getMenuDimensions(selectedItem);
    let {top, left} = this._getMenuItemCoords(selectedItem);

    this.setState({
      isOpen: true,
      selectedItem,
      bgWidth: width,
      bgHeight: height,
      bgX: left,
      bgY: top
    });

    let content = $('#kiq-menu-content .' + selectedItem);
    content.addClass('active').css({
      transform: 'translate3d(' + left + 'px, ' + top + 'px, 0px)'
    });

  }

  _leave() {
    setTimeout(() => {
      // close the dropdown IF
      //      mouse aint over menu item      and       mouse aint over the dropdown
      if (!mouseIsHovering('#kiq-menu-center ul') && !mouseIsHovering('#kiq-menu-content .'+this.state.selectedItem)) {
        this.setState({
          isOpen: false
        });

        $('#kiq-menu-content > div').removeClass('active');
      }
    }, 300);
  }

  _getMenuDimensions(selectedItem) {
    let content = $('#kiq-menu-content .' + selectedItem);
    let [height, width] = [content.innerHeight(), content.innerWidth()];
    return { width, height };
  }


  // NOTE: set offset from menu item
  _getMenuItemCoords(selectedItem) {
    let item = $('#kiq-menu-item-' + selectedItem);
    let content = $('#kiq-menu-content .' + selectedItem);
    return {
      top: item.offset().top + 40,
      left: item.offset().left + item.innerWidth()/2 - content.innerWidth()/2
    };
  }

  _makeBackground(style) {
    const { X, Y, width, height, opacity } = style;
    return (
      <div id="kiq-menu-dropdown-bg" style={{
        transform: 'translate3d(' + X + 'px, '+ Y +'px, 0px)',
        width,
        height,
        opacity
      }}></div>
    );
  }

  render() {

    let bgStyle;

    if (this.state.isOpen) {

      let {width, height} = this._getMenuDimensions(this.state.selectedItem);
      let {top, left} = this._getMenuItemCoords(this.state.selectedItem);

      bgStyle = {
        X: spring(left),
        Y: spring(top),
        width: spring(width),
        height: spring(height),
        opacity: spring(1)
      };
    } else {
      bgStyle = {
        X: spring(this.state.bgX),
        Y: spring(this.state.bgY),
        width: spring(this.state.bgWidth),
        height: spring(this.state.bgHeight),
        opacity: spring(0)
      };
    }

      /* until further notice.
      const centerMenu = (
      <ul>
        <li id="kiq-menu-item-solutions" onMouseEnter={() => this._enter('solutions')}
        onMouseLeave={this._leave}>
        Solutions
        </li>
        <li id="kiq-menu-item-environment" onMouseEnter={() => this._enter('environment')}
        onMouseLeave={this._leave}>
        Environment
        </li>
        <li id="kiq-menu-item-company" onMouseEnter={() => this._enter('company')}
        onMouseLeave={this._leave}>
        Company
        </li>
      </ul>
      );

      */

    return (
        <div>
          <Motion style={bgStyle}>
            { (style) => this._makeBackground(style) }
          </Motion>

          <div id="kiq-menu-content">
            <SolutionsMenu onMouseLeave={this._leave} />
            <EnvironmentMenu onMouseLeave={this._leave} />
            <CompanyMenu onMouseLeave={this._leave} />
          </div>

          <Container id='kiq-menu'>
            <div id="kiq-menu-left">
              <object className='hvr-grow' id='kiq-menu-logo' type='image/svg+xml' data='/images/logo.svg'></object>
            </div>

            <div id="kiq-menu-center">
            </div>

            <div id="kiq-menu-right">
              <ul>
                <li>Help</li>
                <SignInButton />
              </ul>
            </div>
          </Container>
        </div>

    );
  }
}

export default Navigation;
