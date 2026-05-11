function Button() {
    const handleClick = () => { console.log('OUCH!')}
    function handleClick2(name) {
        console.log('Hello ' + name)
    }

    return(<button onClick={() => handleClick2('Leo')}>Click me!!</button>)
}

export default Button