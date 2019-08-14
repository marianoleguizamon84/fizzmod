import React, { Component } from 'react'
import { connect } from "react-redux"

class Header extends Component {
    render() {
        let {links} = this.props
        return (
            <header>
                <h1>SPA</h1>
                <nav>
                {links.map(link=>
                    <a href="#" key={link} >{link}</a>    
                )}
                </nav>
            </header>
        )
    }
}

export default connect(store=>({
    links: store.links
}))(Header)