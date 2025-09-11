import React from "react"
class UserClass extends React.Component {

    constructor(props) {
        console.log("constructor is called")
        super(props);
        // console.log(props)
        this.state = {
            userInfo: {
                name: "john doe",
                location: "mars",
            },
            count: 0,
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/jainthakhil");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        // console.log(json);
        console.log("component Did Update")
    }

    componentWillUnmount() {
        console.log("component is unmounted")
    }

    render() {
        console.log("render is called")
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div>
                <img src={avatar_url} alt="" />
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: "akhil@email.com"</h4>
            </div>
        )
    }
}

export default UserClass