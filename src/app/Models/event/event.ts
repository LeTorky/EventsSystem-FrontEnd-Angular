import { Speaker } from "./../speaker/speaker";
import { Student } from "./../student/student";
export class Event {
    constructor(public _id:number, public title:string, public date:Date, public mainSpeaker:Speaker, 
        public otherSpeakers:Speaker[], public students:Student[], public accepted:boolean, public mainRequesting:boolean){}
}
