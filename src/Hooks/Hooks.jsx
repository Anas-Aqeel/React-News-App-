import React, { useState, useEffect, useCallback } from "react";

const Hooks = () => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState({
        color: 'black',
        bgColor: 'white'
    });
    const toggleTheme = ()=>{
        setTheme({
        color: 'white',
        bgColor: 'black'
        })
    }
    const numList = () => {
        return [count, count++, count+2];
    };
    var a = {}

    useEffect(()=>{
        console.log('numlist!')
    },[a]);

    return (
        <div>
            {count}
            <hr />
            <button onClick={()=>setCount(count+1)}>Increment</button>
            {' '}
            <button onClick={toggleTheme}>Theme Change</button>
            <hr />
            {theme.color + '  '}
            {theme.bgColor}
            <hr />
        </div>
    );
};

export default Hooks;
