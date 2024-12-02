import config from "../config/envconfiq";
import {Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async crateAccount({email, password, name}) {
        try {
            const userAcc =await this.account.create(ID.unique(), email, password, name );
            if (userAcc) {
                // Automatically log the user in after account creation
                return await this.login({ email, password });
            } else {
                throw new Error("Account creation failed.");
            }
        } catch (error) {
            throw new Error("Account creation failed.", error.message);

        }
    }

    async login ({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw new Error("Error login: ", error.message);
            
        }
    }

    async getUserAcc(){
        try {
            await this.account.get()
            if (!user) {
                return null
            }
        } catch (error) {
            throw new Error("Error Account: ", error.message);
            
        }
    }
    
    async logOut() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw new Error("Error logout: ", error.message);
            
        }
    }
}

const authService = new AuthService();       // jehetu new obj na hoie use kora jabe na protibar sehetu eksathe e export kore deya hoice
export default authService      //reuse korar jonno class component kora hoice