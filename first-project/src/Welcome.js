import { useEffect, useState } from 'react';

function Welcome(props){

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    function addOne(){
        setCount(count + 1);
    }

    function removeOne(){
        setCount(count - 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {  
          setCount2(count2 + 1);
        }, 1000);

        if(count2 === 10){
            clearInterval(interval);
            document.body.classList.add('backgroundBlack');
            document.querySelectorAll('p').forEach(e => e.style.color = "white");
            document.querySelectorAll('h1').forEach(e => e.style.color = "white");
            let h2 = document.createElement("h2");
            h2.innerHTML = 'ZA WARUDO !!!';
            document.querySelector('.countSeconds').appendChild(h2);
            document.querySelectorAll('h2').forEach(e => e.style.color = "white");
            document.querySelector('h2').classList.add('bigSize');
        }

        return () => clearInterval(interval);
      });

    
    

    return (
        <>
            <section className='countOnClick'>
                <h1>Welcome {props.firstname} {props.lastname} !</h1>
                <p>Vous avez cliqué : {count} fois !</p>
                <div>
                    <button onClick={addOne}>Ajouter 1</button>
                    <button onClick={removeOne}>Enlever 1</button>
                </div>               
            </section>
            <section className='countSeconds'>
                <p>{count2} secondes sont passées...</p>
            </section>
            
        </>
        

    )
}

export default Welcome;