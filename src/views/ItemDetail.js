import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";

// FB
import { db } from "../firebase/config";
import { getDoc, doc } from 'firebase/firestore'


const ItemDetail = () => {
    const [item, setItem] = useState([null]);
    const { id } = useParams();

    useEffect(() => {
    ( async () => {
        const docRef = doc(db, 'productos', id)
        const docSnap = await getDoc(docRef)
        setItem({...docSnap.data(), id: id})
    } )()
}, [id]);

console.log(item)
  return (
    <>
      <ItemDetailContainer disco={item} />
    </>
  );
};

export default ItemDetail;
