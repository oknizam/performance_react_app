import React, { useEffect } from "react";

const ThrottleComp = () => {

    const throttle = (fn: Function, delay: number) => {
        let run = false;

        return function (...args: any) {
            if (!run) {
                fn(...args);
                run = true;
                setTimeout(() => run = false, delay)
            }

        }
    }

    const resizeFunc = () => {
        console.log("Window resize", window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", throttle(resizeFunc, 1000));
        return () => {
            window.removeEventListener("resize", throttle(resizeFunc, 1000))
        }
    }, []);

    // on change with throttle

    const onChange = (e: any) => {
        console.log("change event -->", e)
    }


    return (

        <>
            <div>

                Hello throttle

                <input type="text" onKeyUp={throttle(onChange, 1000)} />

            </div>
        </>

    )

};


export default ThrottleComp;


// usually we use throttle for rate limit function call 

//  example we have one function for click event that making network request (simply it is an expensive function) if user clicks multiple trimes same event itl will make that much network request in order to limit those network request we use throttling

// if function is called and it will delay call of same function for some time it will not call same function 


// main diffrence between debounce and throtle is

//  1. debounce if we have 1 second delay to make n/w request i type one char in input box timer is started and i again press new char  old timer get cleared and new timer is started it will make a n/w request when i stop typing for a second

//  2. Throttle it will call function on event because the flag is false and make flag true that n/w request has been made, and if you call same event within that  delay it will not call function because the flag will be true it will not make new request until that flag become false



// example for debounce and throttle

// 1. search bar (debounce) -> it will make api call when delay is greater than what we passed to it 

// 2. search bar (Throttle) -> it will make api call first and wait for that delay to be completed , afte delay get completed it will make next call 

// 3. window Resize (debounce) -> if you are resize window contineous it will not call api , it will call when you stop for that delay

// 4. window Resize (Throttle) -> if we make resize it will call and again it will call when that delay is completed it will limit calls

// 5. click event (debounce) ->

// 6. click event (Throttle) ->

