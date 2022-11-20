import "./ItemListContainer.css" ;
import ItemCount from "../CarWidget/ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where, querySnapshot, getFirestore } from "firebase/firestore";
import Items from "./Items";


const ItemListContainer = () => {

    const [products, setProducts] = useState([null])
    const {categoria} = useParams()
console.log(categoria)
    useEffect(() => {
    
        const db = getFirestore()
        const docRef = categoria ? query(collection(db, 'productos'), where("categoria", "==", categoria)) : collection(db, 'productos');
        
        getDocs(docRef)
            .then((snapshot) => {
            setProducts(snapshot.docs.map((doc)=> ({id:doc.id, ...doc.data()})));
            })
            console.log(products)
            }, [categoria]);





    return ( 
        <div className="Container-General">
            {products.map((disco) => {
                return(
                    <Link to={`../item/${disco?.id}`}> <Items disco={disco}/> </Link>
            )})}
        </div>
    );
}

export default ItemListContainer;
