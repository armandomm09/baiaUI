import { router } from 'expo-router';
import { Account, Avatars, Client, Databases, ID, Query, Storage } from 'react-native-appwrite';

const appwriteConfig = {
    endpoint: "http://cdasanjose.myqnapcloud.com/v1",
    platform: 'com.baiaUI.galliard',
    projectId: '66a693b0001302ec1bd0',
    databaseId: '66a6f15000252d1b9ca3',
    clientCollectionId: '66a6f18d001dca50e703',
    convosCollectionId: '66a6f22c0029eed08442',
    ordersCollectionId: '66a6f25d00064fbe539c',
    storageId: '66a6f411000c07d1a55d'
};
const {
    endpoint,
    platform,
    projectId,
    databaseId,
    clientCollectionId,
    convosCollectionId,
    ordersCollectionId,
    storageId,
} = appwriteConfig
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
const storage = new Storage(client)

export const signOut = async () => {
    try {
        const sessions = await account.listSessions();
        for (const session of sessions.sessions) {
            await account.deleteSession(session.$id);
        }
        console.log('User signed out');
        return true;
    } catch (error) {
        console.error('Error signing out', error);
        throw new Error(error.message);
    }
}


export async function getCurrentUser() {
    try {
        const currentAccount = await account.get()
        if (currentAccount === null) console.log('Account = null')
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.clientCollectionId,
            [Query.equal("serviceID", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function signIn(email, password) {
    try {
        // await signOut()
        const session = await account.createEmailPasswordSession(email, password) //account.createEmailSession(email, password);

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const createUser = async (email, password, username, serviceName) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );
        if (!newAccount) throw new Error('Account creation failed');

        const avatarUrl = avatars.getInitials(username);
        await signIn(email, password);
        console.log("Service Name", serviceName)
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.clientCollectionId,
            ID.unique(),
            {
                serviceName: serviceName,
                email: email,
                serviceID: newAccount.$id,
            }
        );
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error(error);
    }
};

export const getAvatarUrl = async (username) => {
    try {

        const avatarUrl = avatars.getInitials(username);
        return avatarUrl.href;
    } catch (error) {
        console.error('Error fetching avatar URL:', error);
        throw new Error(error);
    }
};
