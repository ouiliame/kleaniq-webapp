import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import _ from 'lodash';
import { Motion, spring } from 'react-motion';

import {
  Container,
  Button,
  Header,
  Image,
  Item,
  List
} from 'semantic-ui-react';

import './style.css';

const mouseIsHovering = (selector) => $(selector+":hover").length != 0;

class SolutionsMenu extends Component {
  render() {
    return (
      <div className="solutions" {...this.props}>
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

class EnvironmentMenu extends Component {
  render() {
    return (
      <div className="environment" {...this.props}>
        <h4>FOR RESTAURANTS</h4>
        <h4>FOR PROVIDERS</h4>
      </div>
    )
  }
};


class CompanyMenu extends Component {
  render() {
    return (
      <div className="company" {...this.props}>
        <List>
          <List.Item>
            <Image avatar src='http://semantic-ui.com/images/avatar2/small/rachel.png' />
            <List.Content>
              <List.Header as='a'>Rachel</List.Header>
              <List.Description>Last seen watching <a><b>Arrested Development</b></a> just now.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src='http://semantic-ui.com/images/avatar2/small/lindsay.png' />
            <List.Content>
              <List.Header as='a'>Lindsay</List.Header>
              <List.Description>Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src='http://semantic-ui.com/images/avatar2/small/matthew.png' />
            <List.Content>
              <List.Header as='a'>Matthew</List.Header>
              <List.Description>Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
            <List.Content>
              <List.Header as='a'>Jenny Hess</List.Header>
              <List.Description>Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image avatar src='http://semantic-ui.com/images/avatar/small/veronika.jpg' />
            <List.Content>
              <List.Header as='a'>Veronika Ossi</List.Header>
              <List.Description>Has not watched anything recently</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
};

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
    }
  }

  @autobind
  _enter(selectedItem) {

    $("#kiq-menu-content div").removeClass('active');

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

    let content = $("#kiq-menu-content ." + selectedItem);
    content.addClass('active').css({
      transform: 'translate3d(' + left + 'px, ' + top + 'px, 0px)'
    });

  }

  @autobind
  _leave() {
    setTimeout(() => {
      // close the dropdown IF
      //      mouse aint over menu item      and       mouse aint over the dropdown
      if (!mouseIsHovering("#kiq-menu-center ul") && !mouseIsHovering("#kiq-menu-content ."+this.state.selectedItem)) {
        this.setState({
          isOpen: false
        });
        $("#kiq-menu-content div").removeClass('active');
      }
    }, 200);
  }


  @autobind
  _getMenu(selectedItem) {
    switch (selectedItem) {
      case 'solutions':
      return <SolutionsMenu onMouseLeave={this._leave} />
      case 'environment':
      return <EnvironmentMenu onMouseLeave={this._leave} />
      case 'company':
      return <CompanyMenu onMouseLeave={this._leave} />
      default:
      return null;
    }
  }


  @autobind
  _getMenuDimensions(selectedItem) {
    let content = $("#kiq-menu-content ." + selectedItem);
    let [height, width] = [content.innerHeight(), content.innerWidth()];
    return { width, height };
  }


  // NOTE: set offset from menu item
  @autobind
  _getMenuItemCoords(selectedItem) {
    let item = $("#kiq-menu-item-" + selectedItem);
    let content = $("#kiq-menu-content ." + selectedItem);
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
      }
    } else {
      bgStyle = {
        X: spring(this.state.bgX),
        Y: spring(this.state.bgY),
        width: spring(this.state.bgWidth),
        height: spring(this.state.bgHeight),
        opacity: spring(0)
      }
    }

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
          </div>

          <div id="kiq-menu-right">
            <ul>
              <li>Help</li>
              <li>Sign Up</li>
            </ul>
          </div>


        </Container>
      </div>

    );
  }
};

export default Navigation;
