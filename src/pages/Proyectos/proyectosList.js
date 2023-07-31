import PortalEmpleo from "../../../public/img/portalEmpleo.png";
import RickAndMorty from "../../../public/img/rick_morty.png"
import WeatherApp from "../../../public/img/weatherApp.png"
import GifApp from "../../../public/img/gifApp.png"
import Porfolio from "../../../public/img/portfolio.png"

const proyectosList = [
    {
        "title": "PortFolio",
        "img": Porfolio,
        "descripcion": "PortFolio realizado con Reactjs, React-Router, Hooks, SweetAlert y EmailJs para el formulario de Contacto",
        "repositorio": "https://github.com/lizandronarvaez/React-PortFolio",
    }
    ,
    {
        "title": "WeatherApp",
        "img": WeatherApp,
        "descripcion": "App Realizada con Reactjs, muestra la temperatura de ciudades españolas",
        "repositorio": "https://github.com/lizandronarvaez/React-app-weather",
        "enlaceProyecto": "https://react-app-weather-psi.vercel.app"
    },
    {
        "title": "GifApp",
        "img": GifApp,
        "descripcion": "App de busqueda de Gifs realizada con Reactjs,",
        "repositorio": "https://github.com/lizandronarvaez/gifs-app-reactjs",
        "enlaceProyecto": "https://gifs-app-reactjs.vercel.app"
    }, {
        "title": "DevJobs",
        "img": PortalEmpleo,
        "descripcion": "Portal de empleo realizado con NodeJs,ExpressJs, Handlebars, Autenticaciones, Notificaciones de Registro con Nodemailer, ODM Mongoose.",
        "repositorio": "https://github.com/lizandronarvaez/DevJobs",
        "enlaceProyecto": "https://empleo-it-devjobs.onrender.com"
    }, {
        "title": "Rick and Morty",
        "img": RickAndMorty,
        "descripcion": "SingleApp realizada con ReactJs, contiene un formulario para buscar los personajes.",
        "repositorio": "https://github.com/lizandronarvaez/Rick-Morty-API",
        "enlaceProyecto": "https://rick-morty-api-phi.vercel.app"
    }
]

export default proyectosList