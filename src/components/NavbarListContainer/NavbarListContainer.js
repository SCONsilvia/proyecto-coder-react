import { useAsync } from "../../hooks/useAsync";
import NavbarList from "../NavbarList/NavbarList";
import { getProducts } from "../../services/firebase/firestore";

const NavbarListItem = () => {
    const {loading, data, error } = useAsync((()=>getProducts("categories")))

    if (loading) {
        return <h1>Cargando categorias...</h1>
    }

    if (error) {
        console.log(error);
    }

    return(
        <NavbarList categories = {data}/>
    )

}

export default NavbarListItem;