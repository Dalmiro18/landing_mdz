export class Promotion{
    constructor(users = [], content =''){
        // this._id = _id;
        this.users = users;
        this.content = content;
    }
    // _id: String
    users: Array<String>
    content: String
}
