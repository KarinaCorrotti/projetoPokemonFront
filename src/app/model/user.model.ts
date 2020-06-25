export class User {
    private userName: string;
    private userPokemon: number;

    constructor(user?: User) {
        this.userName = user.userName || '';
        this.userPokemon = user.userPokemon || 1;
    }
}