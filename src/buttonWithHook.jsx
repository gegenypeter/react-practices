import React, {useState} from 'react'



function ButtonWithHook() {
    const [greeting, setGreeting] =  useState("Hello2");
    const [title, setTitle] =  useState("MyTitle");

    return (
        <div>
            <h1> {title} </h1>
            <p>{greeting}</p>
            <button onClick={() => setGreeting("Bye2")}>Click Me</button>
            <button onClick={() => setTitle("MyBye")}>Click Me</button>
        </div>
    )
}

export default ButtonWithHook