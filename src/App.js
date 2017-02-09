import React, { Component } from 'react'
import { Container, Icon, Menu } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router'

class App extends Component {
  state = { activeItem: 'movies' }

  handleItemClick = (e, { name, href }) => {
    e.preventDefault();

    this.setState({ activeItem: name });

    browserHistory.push(href);
    
  }

  render() {
    const { activeItem } = this.state

    return (
      <Container>
      
        <Menu icon='labeled'>

          <Menu.Item name='movies' href="/" active={activeItem === 'movies'} onClick={this.handleItemClick}>
              Movies
          </Menu.Item>

          <Menu.Item name='actors' href="/actors" active={activeItem === 'actors'} onClick={this.handleItemClick}>
            Actors
          </Menu.Item>

        </Menu>

        {this.props.children}
      </Container>
    )
  }
}

export default App;