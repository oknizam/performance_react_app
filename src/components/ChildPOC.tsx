import * as React from 'react';
import { Observable, Subject, of } from "rxjs";

function ChildPOC() {

    React.useEffect(() => {
        // observableFunc();
        subjectAsObservable();
    }, []);


    // plain observer
    const observableFunc = () => {
        const observable$ = new Observable((observer) => {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
        });


        const observer1 = {
            next: (value: number) => console.log("observer 1", value),
            error: (err: any) => console.log("observer error 1", err),
            complete: () => console.log("complete observer 1")
        };

        const observer2 = {
            next: (value: number) => console.log("observer 2", value),
            error: (err: any) => console.log("observer error 2", err),
            complete: () => console.log("complete observer 2")
        };


        observable$.subscribe(observer1); // 1,2,3
        observable$.subscribe(observer2);

        // plain observable is unicast means it will send data to one observer at a time 
        //  In above example first observer one recieves data first and then data will be sent to observer 2

    };


    // subject observable

    const subjectAsObservable=()=>{
        const observable$ = of(1,2,3,4);

        const subject= new Subject();


        const observer1 = {
            next: (value: number) => console.log("observer 1", value),
            error: (err: any) => console.log("observer error 1", err),
            complete: () => console.log("complete observer 1")
        };

        const observer2 = {
            next: (value: number) => console.log("observer 2", value),
            error: (err: any) => console.log("observer error 2", err),
            complete: () => console.log("complete observer 2")
        };


        subject.subscribe(observer1);
        subject.subscribe(observer2);

        observable$.subscribe(subject);


    }

    // subject is multicast observable at time send data to multiple observer

    return (
        <div>Hello POC component!</div>
    );
}
export default ChildPOC;