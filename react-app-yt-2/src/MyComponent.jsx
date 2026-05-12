import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState('Guest')
    const [age, setAge] = useState(0)

    const updateName = () => {
        setName('Leo')
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    return(
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
            </div>
            <div>
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment</button>
            </div>
        </>
    )
}

export default MyComponent