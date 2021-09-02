const puppeteer = require('puppeteer')

// Creamos una función para extraer la información de cada libro y envolvemos en una promesa
const extractBookData = (link, browser) => new Promise (async (resolve, reject) => {

    try{
        // Creamos un objeto vacío donde almacenaremos la información de cada libro
        // ...
        // Abrimos una nueva pestaña
        // ...
        // Accedemos al link de cada libro que nos llega por parámetros
        //...

        // Esperamos que aparezca alguno de los nodos con los que trabajaremos en el DOM, por ejemplo, la etiqueta h1
        // ...

        // utilizamos el método newPage.$eval(selector, function) y almacenamos en bookData:
            // bookTitle ---> h1
            // bookPrice ---> p
            // imgUrl --> img
            // bookDescription --> p
            // stars --> div

        // ...

    }
    catch(err){
        // Devolvemos el error 
        // ...
    }
    
})

const scraper = async (url) => {
    try {
        // Creamos un array vacío scrapedData donde almacenaremos la información obtenida del scraping

        // inicializamos una instancia del navegador (browser) con puppeteer.launch() y añadimos en el objeto de configuración la opción headless
        console.log("Opening the browser......");

        // Abrimos una nueva pestaña en el navegador creando una instancia con el método newPage() a la que llamaremos page

        // Indicamos la url que debe cargarse en la pestaña con page.goto(url)
        console.log(`Navigating to ${url}...`);


        // Utilizamos waitForSelector(selector) para que la función espere un nodo del DOM determinado antes de continuar con la ejecución, en este caso esperaremos al contenedor '.page_inner'

        // Puppeteer también nos permite interactuar con un sitio web a través de eventos que simulan la interacción humanas
        // Clickeamos en el botón next para recoger los libros de la segunda página del catálogo
        // Utilizamos el método page.click(selector)

        // Extraemos todos los links a los que luego navegaremos para obtener el detalle de cada libro
        // Utilizamos el método $$eval(selector, callback) para capturar una colección de nodos y aplicar la lógica que necesitemos
        // En este caso , en el CB filtramos el array de items, guardando en un nuevo array solo los que contienen la leyenda "In Stock"
        // Luego mapeamos dicho array y extraeremos el atributo href 


            // Filtramos los libros en stock


            // Extraemos el link de cada uno

        //console.log(`${urls.length} links encontrados`);

        // Iteramos el array de urls con un bucle for/in y ejecutamos la promesa extractBookData por cada link en el array. Luego pusheamos el resultado a scraped data
        // for(bookLink in urls){

        // }
        //console.log(scrapedData, "Lo que devuelve mi función scraper", scrapedData.length)
       
        // cerramos el browser con el método browser.close
        // Devolvemos el array con los resultados

    } catch (err) {
        console.log("Error:", err);
    }
}

// scraper('º')

// exportamos nuestra función scraper para poder hacer uso de ella en el controlador que corresponda