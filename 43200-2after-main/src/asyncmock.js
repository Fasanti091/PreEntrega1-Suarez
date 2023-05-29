const productos = [
    { nombre: "RedBull Energy Drink", precio: 5500, id: "1", img: "../img/Imagen2.webp", idCat: "1", info: "Red Bull, la icónica bebida energética, te ofrece un impulso instantáneo de energía y vitalidad. Su fórmula única y su sabor distintivo te darán alas para superar cualquier desafío que enfrentes en tu día a día." },
    { nombre: "RedBull Sugarfree", precio: 5600, id: "2", img: "../img/Imagen3.webp", idCat: "1", info: "Cuando necesitas un aumento de energía, Red Bull es tu aliado confiable. Una lata de 250 ml contiene ingredientes clave, como la cafeína y la taurina, que te brindan una dosis de energía concentrada para mantenerte alerta y enfocado."},
    { nombre: "RedBull Zero", precio: 5000, id: "3", img: "../img/Imagen4.webp", idCat: "1", info: "Red Bull no solo es una bebida, sino también un símbolo de aventura y emoción. Desde deportes extremos hasta competiciones musicales, Red Bull ha sido un patrocinador de eventos que desafían los límites y estimulan tus sentidos." },
    { nombre: "RedBull Coconut", precio: 7000, id: "4", img: "../img/Imagen5.webp", idCat: "2", info: "¿Buscas un impulso creativo? Red Bull puede ser tu aliado. Con su combinación de estimulantes y sabores únicos, esta bebida puede ayudarte a mantener la concentración y desatar tu potencial creativo." },
    { nombre: "RedBull Red", precio: 8500, id: "5", img: "../img/Imagen6.webp", idCat: "3", info: "Red Bull te ofrece la energía necesaria para mantenerte en movimiento durante esas largas jornadas de estudio o trabajo. Su fórmula diseñada para proporcionar una energía sostenida te ayuda a mantener la productividad y el rendimiento a lo largo del día." },
    { nombre: "RedBull Green", precio: 8500, id: "6", img: "../img/Imagen7.webp", idCat: "3", info: "Con Red Bull, puedes potenciar tus entrenamientos y maximizar tu rendimiento físico. Sus ingredientes energéticos te brindan la resistencia necesaria para superar tus límites y alcanzar tus metas deportivas." },
    { nombre: "RedBull Apricot", precio: 8500, id: "7", img: "../img/Imagen8.webp", idCat: "3", info: "Red Bull no solo te da alas, también te ofrece una amplia variedad de opciones. Desde la clásica Red Bull Energy Drink hasta las versiones sin azúcar y los sabores especiales, hay una opción para cada preferencia y necesidad." },
    { nombre: "RedBull Summer", precio: 7000, id: "8", img: "../img/Imagen1.webp", idCat: "2", info: "Red Bull es más que una bebida, es una comunidad de personas apasionadas por la energía y la superación personal. Únete a la experiencia Red Bull y descubre un mundo de posibilidades ilimitadas." },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}