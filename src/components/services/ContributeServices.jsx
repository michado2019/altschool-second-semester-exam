// import { db } from "../../firebase";
// import {collection, getDocs, doc, deleteDoc, updateDoc} from 'firebase/firestore'
// const dbRef = collection(db, "contribution");

// class ContributeServices{
//     updateContribute = (id, updatedContribute) => {
//         const getDoc = doc(dbRef, "contribute", id)
//         return updateDoc(getDoc, updatedContribute)
//     }
//     getAllContributes = () => {
//         return getDocs(dbRef)
//     }
//     getContribute = (id) => {
//         const getDoc = doc(dbRef, "contribute", id)
//         return getDoc(getDoc)
//     }
//     deleteContribute = (id) => {
//         const getDoc = doc(dbRef, "contribute", id)
//         return deleteDoc(getDoc)
//     }
// }
// export default new ContributeServices()