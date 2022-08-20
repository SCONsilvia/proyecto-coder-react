import { Link } from "react-router-dom"
import "./FormView.css"

const FormView = ({data}) =>{
    const {name, setName, email, setEmail, phone, setPhone, funcForm, purchaseCompleted, itemOutStock,buttonDisabled} = data;

    const mensaje = purchaseCompleted !== "" && itemOutStock.length === 0 ? `Compra realizada su codigo de compra es: ${purchaseCompleted}` : "Lo sentimos pero hay productos que superan el stock"

    if(purchaseCompleted !== "" || itemOutStock.length > 0){
        return <>
            <p>{mensaje}</p>
            <Link to="/" ><button className={"navbar__lista__item" + " purchaseForm__button"}>Regresar al inicio</button></Link>
        </>
    }

    return(
        <form className="purchaseForm" onSubmit={funcForm}>
            <ul>
                <li>
                    <label >Nombre:
                        <input type="text"  value={name} onChange={(e) => setName(e.target.value)} required ></input>
                    </label>
                </li>
                <li>
                    <label >Correo Electronico:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required ></input>
                    </label>
                </li>
                <li>
                    <label >Telefono:
                        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                    </label>
                </li>
            </ul>
            <button type="submit" className={"navbar__lista__item" + " purchaseForm__button"} disabled={buttonDisabled}>Generar orden</button>
        </form>
    )
}

export default FormView;