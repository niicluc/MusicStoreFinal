import "./ItemListContainer.css" ;
import ItemCount from "../CarWidget/ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import Items from "./Items";


const ItemListContainer = () => {

    const [products, setProducts] = useState([null])
    const {categoria} = useParams()
    const getProducts = async() =>{
        const docs =[]
        const querySnapshot= await getDocs(collection(db, "productos"))
        querySnapshot.forEach(doc =>{
            docs.push({...doc.data(),id:doc.id})
        })
        setProducts(docs)
    }
    useEffect (()=> {
        getProducts()
    },[]) 
console.log(products)

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
