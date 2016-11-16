import React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import { scaleRotate } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';
import { Header, Icon, Button, Menu } from 'semantic-ui-react';
import './style.css';

var menuStyles = {
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    zIndex: 100,
    background: '#1c1c1c',
    paddingTop: '2.5em',
    paddingLeft: '0.5em',
    paddingRight: '0.5em'
  },
  bmItemList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

const SideMenu = reduxBurgerMenu(scaleRotate);

@autobind
class NavMenu extends React.Component {

  handleMenuClick(e, {name}) {
    this.props.redirectTo('/app/' + name);
  }

  render () {
    const { activeApp } = this.props;

    return (
      <SideMenu
        isOpen={false}
        width={325}
        customBurgerIcon={false}
        styles={menuStyles}
        pageWrapId='admin-app'
        outerContainerId='admin-wrapper'>

        <div id="side-menu-contents">fgr
          <Header
            as='h3'
            inverted>
            <Icon name='user' />
            <Header.Content>
              {this.props.user.name.first} {this.props.user.name.last}
              <Header.Subheader>
                {this.props.user.affiliation}
              </Header.Subheader>
            </Header.Content>
          </Header>

          <div style={{textAlign: 'center'}}>
            <Link to="/logout"><Button basic inverted fluid color='red' content='Logout' icon='sign out' /></Link>
            <br/><br/>
          </div>

          <Menu fluid vertical inverted>

            <Menu.Item name='AdminMap' active={activeApp==='AdminMap'} onClick={this.handleMenuClick}>
              <Icon name='map outline'/>
              Admin Map
            </Menu.Item>

            <Menu.Item name='Database' active={activeApp==='Database'} onClick={this.handleMenuClick}>
              <Icon name='database'/>
              Database
            </Menu.Item>
          </Menu>

        </div>
      </SideMenu>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  activeApp: state.appInfo.name
});

export default connect(mapStateToProps, {redirectTo: push})(NavMenu);
