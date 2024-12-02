import config from "../config/envconfiq";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DataServices {
    client= new Client();
    databases;
    storage;
    

constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client)
    }

    async crateData({title, slug, content, userId, featureImg, status }){
        try {
            return await this.databases.createDocument(config.appwriteDataBaseId, config.appwriteCollectionId, slug, {title, content,userId, featureImg, status} )
        } catch (error) {
            throw new Error("Data Creating failed due to: ", error.message);
            
        }
    }
    async getData (slug){
        try {
            return await this.databases.getDocument(config.appwriteDataBaseId, config.appwriteCollectionId, slug)
        } catch (error) {
            throw new Error("Error GetData: ", error.message);
            
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async updateData(slug, {title, featureImg, content, status}){
        try {
            return this.databases.updateDocument(config.appwriteDataBaseId, config.appwriteCollectionId, slug, {
                title, featureImg, content, status
            })
        } catch (error) {
            throw new Error("Error Updating: ", error.message);
        }
    }

    async deleteData(slug){
        try {
            await this.databases.deleteDocument(config.appwriteDataBaseId, config.appwriteCollectionId, slug)
            return true;
        } catch (error) {
            throw new Error("Error Updating: ", error.message);
            
            
        }
    }
    
    //File Handaling 

    async createFile(file){
        try {
            return await this.storage.createFile(config.appwriteBucketId, ID.unique(), file )
        } catch (error) {
            throw new Error(`Error creating file: ${error.message}`);
        }
    }

    async getFilePreview(fileId){
        return await this.storage.getFilePreview(config.appwriteBucketId, fileId)
    }
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(config.appwriteBucketId, fileId)
            return true
        } catch (error) {
            throw new Error(`Error deleting file: ${error.message}`);
            
        }
    }
}


const dataServices = new DataServices()
export default dataServices;