import NavbarItem from "../NavbarItem/NavbarItem";

const NavbarList = ({categories}) => {
    return(
        <>
            {categories.map(category => (
                <NavbarItem key = {category.id} {...category} />
            ))}
        </>
    )
}

export default NavbarList;