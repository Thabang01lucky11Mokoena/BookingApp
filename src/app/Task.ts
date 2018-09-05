export class Task{
    name: string;
    email: string;
    date1: string;
    date2: string;
    room: string;
    payment: string;
    guest1: string;
    guest2: string
    boy = []

    constructor( name, email, date1, date2, room, guest1, guest2, payment){
        this.name = name;
        this.email = email;
        this.date1 = date1;
        this.date2 = date2;
        this.guest1 = guest1;
        this.guest2 = guest2;
        this.room = room;
        this.payment = payment;
    }
}