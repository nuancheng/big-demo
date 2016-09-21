import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
    render () {
        return(
            <div className="nav-header">
                <p className="glyphicon glyphicon-fire" aria-hidden="true"></p>
                <h1>nuan~</h1>
                <p className="glyphicon glyphicon-heart" aria-hidden="true"></p>
            </div>
        )
    }
}

export default NavHeader;
