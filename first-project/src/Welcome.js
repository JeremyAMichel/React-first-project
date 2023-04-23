import { useState } from 'react';

function Welcome(props){
    
    const [count, setCount] = useState(0)

    function addOne(){
        setCount(count + 1);
    }

    function removeOne(){
        setCount(count - 1);
    }

    return (
        <>
            <h1>Welcome {props.firstname} {props.lastname} !</h1>
            <p>Vous avez cliqué : {count} fois !</p>
            <button onClick={addOne}>Ajouter 1</button>
            <button onClick={removeOne}>Enlever 1</button>
        </>
        

    )
}

export default Welcome;