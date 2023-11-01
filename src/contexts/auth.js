import React, { 
    createContext,
    useState,
    useEffect 
} from 'react'

import { auth } from '../services/firebaseConfig'
import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from 'firebase/auth';

import {
    getDoc,
    doc,
    getFirestore,
    setDoc,
} from 'firebase/firestore';

import Toast from 'react-native-toast-message';
import {
    SuccessRegister,
    SuccessSendEmail,
    ErrorEmailPasswordEmpty,
    ErrorEmailRecoverPasswordEmpty,
    ErrorUserNotFound,
    ErrorEmailNotFound,
    ErrorEmailAlreadyRegistered
} from '../utils/messages';

import AsyncStorage from '@react-native-async-storage/async-storage';
const CRISTAOS_COLLECTION = "@cristaosconectados:users";

export const AuthContext = createContext({});

export function AuthProvider({children}){
    const [isLogging, setIsLogging] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        loadUserStorageData();
    },[]);
    
    async function loadUserStorageData(){
        setIsLogging(true);
        const storageUser = await AsyncStorage.getItem(CRISTAOS_COLLECTION);

        if(storageUser){
            const userData = JSON.parse(storageUser);
            setUser(userData);
        };

        setIsLogging(false);
    }

    async function signIn(email, password){
        if(!email || !password){
            ErrorEmailPasswordEmpty();
            return;
        };
        setIsLogging(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Inicializa o Firestore
            const firestore = getFirestore();
            
            // Acessando os dados do usuário logado
            const userDocRef = doc(firestore, 'users', user.uid);
            const userDocSnapshot = await getDoc(userDocRef);

            if(userDocSnapshot.exists()){
                const userData = userDocSnapshot.data();
                setUser(userData);
                await AsyncStorage.setItem(CRISTAOS_COLLECTION, JSON.stringify(userData));
            }
            setIsLogging(false);

        } catch (error) {
            ErrorUserNotFound();
            setIsLogging(false);
        }
    }

    async function signOutUser(){
        await signOut(auth);
        await AsyncStorage.removeItem(CRISTAOS_COLLECTION);
        setUser(null);
    };

    async function signUp(
        email,
        password, 
        name,
        bio,
        ministry,
        selectedState,
        selectedCity
    ){
        if(!email || !password){
            ErrorEmailPasswordEmpty();
            return;
        };
        setIsLogging(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const firestore = getFirestore();

            const userDocRef = doc(firestore, 'users', user.uid);
            const userData = {
                id: user.uid,
                email,
                createdUser: new Date(),
                name,
                bio,
                ministry,
                selectedState,
                selectedCity,
                avatar: ''
            };

            await setDoc(userDocRef, userData);

            setUser(userData);
            await AsyncStorage.setItem(CRISTAOS_COLLECTION, JSON.stringify(userData));
            SuccessRegister();
            setIsLogging(false);

        } catch (error) {
            ErrorEmailAlreadyRegistered();
            setIsLogging(false);
        };
    };

    // tem que ver se existe o email cadastrado antes de enviar um email para o usuario
    async function forgotPassword(email){
        if(!email){
            ErrorEmailRecoverPasswordEmpty();
            return;
        };
        setIsLogging(true);

        try {
            await sendPasswordResetEmail(auth, email);
            SuccessSendEmail();
            setIsLogging(false);
        } catch (error) {
            ErrorEmailNotFound();
            setIsLogging(false);
        };
    };

    return (
        <>
        <AuthContext.Provider
            value={{
                user,
                isLogging,
                signIn,
                signOutUser,
                signUp,
                forgotPassword
            }}
        >
            {children}
        </AuthContext.Provider>

        <Toast/>
        </>
    )
}

