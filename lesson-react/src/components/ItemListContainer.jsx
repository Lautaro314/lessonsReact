export function ItemListContainer ({name}) {

    const productosDisponibles = [
        {
            nombre: "JEAN MOM DE MUJER",
            Precio: 25000, 
        }
    ]


    return (
        <>  
        <div className="bienvenida">
            <h2>Bienvenido a nuestra pagina {name}!!!</h2>
            <h3>Te dejamos los siguientes productos a continuación...</h3>
        </div>
        <div>
        </div>
        </>
    )
}

export default ItemListContainer