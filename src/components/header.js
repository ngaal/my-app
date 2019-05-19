import Link from 'gatsby-link';
import React from 'react';
import './header.css';


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState ({hasScrolled: true})
    } else {
      this.setState ({hasScrolled: false})
    }
  }
render() {
  return (
    <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
        <Link to="/"><img src={require('../images/hun_logo.svg')} width="40" /></Link>
        <Link to="/courses">Célunk</Link>
        <Link to="/downloads">Workshops</Link>
        <Link to="/workshops">Blog</Link>
        <Link to="/workshops">Facebook csoport</Link>
        <Link to="/buy"><button>Buy</button> </Link>
      </div>
    </div>
  )
}
}

export default Header
