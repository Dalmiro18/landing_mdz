export class User {
    constructor(_id = '', name = '', lastName = '', number = 0, email = '',
        location = '', question = '') {

        this._id = _id;
        this.email = email;
        this.lastName = lastName;
        this.location = location;
        this.name = name;
        this.number = number;
        this.question = question;
    }
    _id: string
    name: string
    lastName: string
    email: string
    number: number
    location: string
    question: string
}
