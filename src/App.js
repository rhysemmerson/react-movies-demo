import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from 'react-router'

class App extends Component {
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        {this.props.children}

        <Menu icon='labeled'>
          <Menu.Item name='movies' active={activeItem === 'gamepad'} onClick={this.handleItemClick}>
            <Icon name='gamepad' />
            <Link to="/movies">
              Movies
            </Link>
          </Menu.Item>

          <Menu.Item name='video camera' href="/actors" active={activeItem === 'video camera'} onClick={this.handleItemClick}>
            <Icon name='video camera' />
            Actors
          </Menu.Item>

        </Menu>

      </div>
    )
  }
}

export default App;