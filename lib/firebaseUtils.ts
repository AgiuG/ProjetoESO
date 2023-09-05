// lib/firebaseUtils.ts
import firebase from './firebase'; // Importe a instância do Firebase

// Função para adicionar um documento à coleção especificada
export const addDocument = async (collectionName: string, data: any) => {
  try {
    const collectionRef = firebase.firestore().collection(collectionName);
    const docRef = await collectionRef.add(data);
    return docRef.id; // Retorna o ID do documento inserido
  } catch (error) {
    console.error('Erro ao adicionar documento:', error);
    throw error;
  }
};

export const getDocument = async (collectionName: string) => {
  try {
    const snapshot = await firebase.firestore().collection(collectionName).get();
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    throw error;
  }
};
