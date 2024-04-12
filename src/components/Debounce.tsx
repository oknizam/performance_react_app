import React from "react";

const DebounceComp = () => {

    const debounce = (fn: Function, delay: number) => {
        let timer: any;
        return function (...args: any) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn(...args);
            }, delay)

        }

    };


    const onChange = (e: any) => {
        console.log("change event -->", e)
    }

    return (
        <>
            <label htmlFor="Search">
                Search Text
            </label>
            <input type="text" onKeyUp={debounce(onChange, 1000)} />
        </>
    )

};

export default DebounceComp;


// we use this for delay search means we delay network call for each key stroke

