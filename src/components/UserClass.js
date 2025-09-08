import React from "react"
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            count: 0,
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact: akkuu</h4>
            </div>
        )
    }
}

export default UserClass