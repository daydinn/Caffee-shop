//%
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // for listening and trigering something


@Injectable({
  providedIn: 'root'
})
export class MessengerService { //observable

subject = new Subject()


//productItem : Sender of message
//cartComponent(Observer): Receiver of message (observing the messenger.service)
  constructor() { }


sendMsg(getraenk) { //called by productitem
this.subject.next(getraenk); //Triggering an event                    

}

getMsg() { //called insede of the cartcomponent

  return this.subject.asObservable() //return subject, which  is triggering something as an observable
}
}