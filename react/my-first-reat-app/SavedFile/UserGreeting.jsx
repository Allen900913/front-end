function UserGreeting(props) {
    if (props.isLoggedIn) {
        return <h1 className="welcome">Welcome back {props.username}</h1>
    } else {
        return <h1 className="login">Please log in</h1>
    }
}

export default UserGreeting