import { Observable, of, from, fromEvent, concat, interval, timer } from 'rxjs';
import { allBooks, allReaders } from './data';
import { buffer, take, bufferCount, bufferTime, window, switchMap, toArray, windowCount, windowTime, skip, skipLast, skipUntil, distinct, min, max } from 'rxjs/operators';
// function subscribe1 (sub){
//     for (let book of allBooks)
//         sub.next(book);
// }
//title error is beacuse of the js ecma
// use typescript annotaion
//let allMyBooks$ = new Observable(
//  using the create ln stead of the new 
let allMyBooks$ = Observable.create(

    sub => {
        // if (document.title !== 'xx') {
        //     sub.error("error");
        // }

        for (let book of allBooks)
            sub.next(book);

        setTimeout(() => {
            sub.complete();
        }
            , 2000);

        return () => console.log('end');
    });
// allMyBooks$.subscribe(
//     book => console.log(book.title))

//let usingOf$ = of('heelo', 10, true, allReaders[0].name);
//let from$ = from(allBooks);
//from$.subscribe(res => console.log(res.publicationYear))
// concat(usingOf$, from$).subscribe(
//     res=> console.log (res)
// );

// let button = document.getElementById('readerid');
// fromEvent(button,'click').subscribe(
//     res =>{
//         let result =  document.getElementById('readers');
//         for (let reader  of allReaders) {
//             result.innerHTML += reader.name + "<br>"

//         }
//     }

// )



let usingOf$ = of(allReaders);
let from$ = from(allBooks);
//let from$ = from(allBooks);
//const open =usingOf$.pipe(tap(() => console.log('open')));
//const close = () => from$.pipe(tap(() => console.log('close')));

// from$.pipe(
//   distinct(x=>x.bookID)
//     //switchMap(w => w.pipe(toArray()))
// )
//     .subscribe(res => console.log(res));

//from$.subscribe(res => console.log(res.publicationYear))
// concat(usingOf$, from$).subscribe(
//     res=> console.log (res)
// );
// const source = timer(0, 100).pipe(take(12));
// source.pipe(
//     windowTime(400),
//     switchMap(w => w.pipe(toArray()))
// )
//     .subscribe(res => console.log(res));

 
of(...allBooks).pipe(
    distinct(),
    max((x,y)=> x.bookID ===1 ? 1 :-1 )
      //switchMap(w => w.pipe(toArray()))
  )
      .subscribe(res => console.log(res));