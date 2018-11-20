import React from 'react'

class CartFooter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            copyright: 2016,
        }
    }


    render() {
        return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">&copy; {this.state.copyright}</a>
        </nav>
      )
    }
}

export default CartFooter