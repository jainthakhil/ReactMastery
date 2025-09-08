import User from "./User"
import UserClass from "./UserClass"
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is about page</p>
            <User />
            <UserClass name={"akhil"} location={"muzaffarnagar"} />
        </div>
    )
}

export default About