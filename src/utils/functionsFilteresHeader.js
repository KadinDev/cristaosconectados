import {
    collection,
    query,
    where,
    getDocs,
    getFirestore,
    orderBy
} from 'firebase/firestore';

// Todos Os Posts
export async function handleLoadPosts(){
    const firestore = getFirestore();
    const postClientesCollectionRef = collection(firestore, 'posts'); //mudar para posts
    const querySnapshot = await getDocs(postClientesCollectionRef)
    
    const allPosts = querySnapshot.docs.map(doc => ({ userId: doc.id, ...doc.data() }));
    return allPosts;
}

// Todos onde o Estado e a Cidade são iguais aos do usuário logado
export async function handleLoadPostsByStateAndCity(state, city) {
    const firestore = getFirestore();
    const postsCollectionRef = collection(firestore, 'posts');

    const stateQuery = query(postsCollectionRef,
        where('selectedState', '==', state),
        where('selectedCity', '==', city),
        orderBy('likes', 'desc'),
        orderBy('comments', 'desc')
    );

    try {
        const querySnapshot = await getDocs(stateQuery);
        const postsInCity = querySnapshot.docs.map(doc => ({ userId: doc.id, ...doc.data() }));
        return postsInCity;
    } catch (error) {
        console.error('Erro ao carregar usuários da cidade:', error);
        return [];
    }
}

// Todos por Estado Selecionado
export async function handleLoadPostsByState(state) {
    const firestore = getFirestore();
    const postsCollectionRef = collection(firestore, 'posts');

    const stateQuery = query(postsCollectionRef,
        where('selectedState', '==', state),
        orderBy('likes', 'desc'),
        orderBy('comments', 'desc')
    );

    try {
        const querySnapshot = await getDocs(stateQuery);
        const postsInState = querySnapshot.docs.map(doc => ({ userId: doc.id, ...doc.data() }));
        return postsInState;
    } catch (error) {
        console.error('Erro ao carregar posts por estado:', error);
        return [];
    }
}

// Todos de acordo com a cidade que o usuario escolher
export async function handleLoadPostsByCity(city) {
    const firestore = getFirestore();
    const postsCollectionRef = collection(firestore, 'posts');

    const cityQuery = query(postsCollectionRef,
        where('selectedCity', '==', city),
        orderBy('likes', 'desc'),
        orderBy('comments', 'desc')
    );

    try {
        const querySnapshot = await getDocs(cityQuery);
        const postsInCity = querySnapshot.docs.map(doc => ({ userId: doc.id, ...doc.data() }));
        return postsInCity;
    } catch (error) {
        console.error('Erro ao carregar posts por cidade:', error);
        return [];
    }
}

// Todos do Estado e Cidade que o usuario logado escolher
export async function handleLoadPostsByDifferentStateAndCity(state, city) {
    const firestore = getFirestore();
    const postsCollectionRef = collection(firestore, 'posts');

    const stateCityQuery = query(postsCollectionRef,
        where('selectedState', '==', state),
        where('selectedCity', '==', city),
        orderBy('likes', 'desc'),
        orderBy('comments', 'desc')
    );

    try {
        const querySnapshot = await getDocs(stateCityQuery);
        const postsInStateCity = querySnapshot.docs.map(doc => ({ userId: doc.id, ...doc.data() }));
        return postsInStateCity;
    } catch (error) {
        console.error('Erro ao carregar usuários do estado e cidade selecionados:', error);
        return [];
    }
}
