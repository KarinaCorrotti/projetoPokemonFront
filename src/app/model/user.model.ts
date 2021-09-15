export class User {
    public userName: string;
    public userPokemon: number;
    public userGender: number;
    public userId: number;
    public team: number[];


    constructor(user?: User) {
        if(user){
            this.userId = user.userId || 1;
            this.userName = user.userName || '';
            this.userPokemon = user.userPokemon || 1;
            this.userGender = user.userGender || 1;
            this.team = user.team || new Array(6);
        }else{
            this.userId = 1;
            this.userName = '';
            this.userPokemon = 1;
            this.userGender = 1;
            this.team = new Array(6);
        }        
    }
}