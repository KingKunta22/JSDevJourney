
function Student(props) {
    return(
        <>
            <h1>Student Information</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
        </>
    );
}

export default Student