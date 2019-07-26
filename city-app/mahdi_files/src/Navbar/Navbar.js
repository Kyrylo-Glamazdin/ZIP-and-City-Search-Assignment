import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cssDiv: {
                backgroundColor: "black",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            },
            cssTitle: {
                color: "white"
            }
        }
    }

    render() {
        return (
            <div style={this.state.cssDiv}>
                <h1 style={this.state.cssTitle}>City Search</h1>
            </div>
        )
    }
}

export default Navbar