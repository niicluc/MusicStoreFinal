import { addDoc, collection, Timestamp, updateDoc, doc, increment } from "firebase/firestore";
import { Formik, Form, Field } from 'formik'
import { Link } from "react-router-dom";


//Context
import { UseContext } from '../../Context/CartContext'
//fb
import { db } from '../../firebase/config'


const PurchaseForm = () => {
    const { cart, totalPrices, clear } = UseContext()
    
    const validateUser = value => {
        let error 
        if (!value) error = 'Requerido'
        else if (!/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(value)) error = 'Ingrese un nombre'
        return error
    }

    const validateCp = value => {
        let error
        if (!value) error = 'Required'
        else if (!/\w/) error = 'Ingrese valor correcto'
        return error
    }

const validateEmail = value => {
    let error
    if (!value) error = 'Requerido'
    else if (!/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(value)) error = 'Ingrese un email'
    return error
} 

    return (
        <>
        
        <div className="me-5 ms-5 pe-5 ps-5 mt-4">
        <div className="container fluid" >
            <h1>¡Estas a un paso de finalizar tu compra!</h1>
            <p>Completa los siguientes datos:</p>
            <Formik
                initialValues = {{
                    user: '',
                    email: '',
                    phonenumber : '',
                    street: '',
                    city: '',
                    cp: '' 
                }}
                onSubmit = { async (values) => {
                    if(cart.length > 0) {
                        const docRef = await addDoc(collection(db, 'buys'), {
                            buyer: {
                                name: values.user,
                                email: values.email,
                                phone: values.phonenumber,
                                street: values.street,
                                city: values.city,
                                cp: values.cp
                                },
                            items: cart,
                            date: Timestamp.fromDate(new Date()),
                            total: totalPrices
                        })
                        console.log(`Cargado correctamente ${docRef.id}`)
                        cart.forEach(  item => {
                            const itemRef = doc(db, 'products', item.id)
                            updateDoc(itemRef, {
                                stock: increment(- item.quantity) 
                            } 
                            )
                        })
                        clear()
                    }}}>
                {({ errors, touched, validateField, validateForm }) => (
                    <div className='row'>
                    <Form className="g-3">
                    <div className='row'>
                        <div className=' xxl-6 xl-6 lg-6 md-6 xs-12 sm-12'>
                            <label for="inputName" className="form-label">Nombre</label>
                            <Field name="user" validate={validateUser} type="text" className="form-control" id="inputName" required placeholder="Ej: Nicole"  />
                            {errors.user && touched.user && <div>{errors.user}</div>}
                        </div>

                        <div className=' xxl-6 xl-6 lg-6 md-6 xs-12 sm-12'>
                            <label for="inputEmail" className="form-label">Email</label>
                            <Field name="Email" validate={validateEmail} type="text" className="form-control" id="inputEmail" required placeholder="Ej: mail@gmail.com"  />
                        </div>

                        <div className=' xxl-6 xl-6 lg-6 md-6 xs-12 sm-12'>
                            <label for="inputAddress" className="form-label">Dirección</label>
                            <Field type="text" name="street" className="form-control" id="inputAddress" placeholder="Ej: Av. Rivadavia 10034" required />
                        </div>
                        </div>
                    <div>
                    <div className=' xxl-6 xl-6 lg-6 md-6 xs-12 sm-12'>
                            <label for="inputCity" className="form-label">Ciudad</label>
                            <Field type="text" name="city" className="form-control" id="inputCity" placeholder="Ej: CABA" required="true"/>
                        </div>
                        
                        <div className=' xxl-6 xl-6 lg-6 md-6 xs-12 sm-12'>
                            <label for="inputZip" className="form-label">Codigo postal</label>
                            <Field type="text" validate={validateCp} name="cp" className="form-control" id="inputZip" placeholder="Ej: 1754" required />
                            {errors.cp && touched.cp && <div>{errors.cp}</div>}
                        </div>
                    </div>
                    <div classname='row'>
                        <div className=' xxl-6 xl-6 lg-6 md-6 xs-12 sm-12'>
                            <label for="inputZip" className="form-label">Telefono</label>
                            <Field type="text" name="phonenumber" className="form-control" id="inputPhoneNumber" placeholder="Ej: 1122334455" required />
                        </div>
                    </div>    
                        <div className="col-12 mt-2">
                            <Link to="/" type="submit" className="btn btn-info" >Finalizar compra</Link>
                        </div>
                    </Form>
                    </div>
                )}
            </Formik>
            </div>
        </div>
        </>
    )
}

export default PurchaseForm