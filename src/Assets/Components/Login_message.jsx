const LoginMessage = (props) => {
    const {login, text} = props
    return (
        <div>
            <p className={`alert alert-${login}`}>{text}</p>
        </div>
    )
}

export default LoginMessage