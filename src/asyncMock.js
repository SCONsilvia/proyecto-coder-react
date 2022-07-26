const products = [
    {
        id : "1",
        name : "God of war",
        price: 20,
        category : "Ps4",
        img: "images/GodOfWar.png",
        stock: 10,
        description : "Vive una aventura siendo un dios de la guerra que debe enfretar desafios junto a su hijo",
    },
    {
        id : "2",
        name : "Zelda breath of the wild ",
        price: 60,
        category : "Nintendo switch",
        img: "images/ZeldaBreathOfWheWild.jpg",
        stock: 20,
        description : "Excuse me, princess!",
    },
    {
        id : "3",
        name : "Gear of war 3",
        price: 20,
        category : "Xbox360",
        img: "images/GearsOfWar3.jpg",
        stock: 10,
        description : "Juego de disparo en tercera persona",
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const objeto = products.find( element => element.id === id)
            if(objeto){
                resolve(objeto)
            }else{
                reject("Ocurrio un error");
            }
            /* resolve(products.find( element => element.id === id)); */
        },2000)
    })
}