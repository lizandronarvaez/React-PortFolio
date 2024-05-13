import { crm_frontend, portalEmpleo, portfolio , protein_shop} from "../../../public"

export const projectsList = [
    
    {
        "title": "PortFolio",
        "img": portfolio,
        "descripcion": "PortFolio realizado con Reactjs, React-Router, Hooks, SweetAlert y EmailJs para el formulario de Contacto",
        "repositorio": "https://github.com/lizandronarvaez/React-PortFolio",
    },
    {
        "title": "E-Commerce ProteinSHOP",
        "img": protein_shop,
        "descripcion": "E-Commerce en desarrollo consumiendo productos desde una api y utilizando ReactJs para el frontend",
        "repositorio": "https://github.com/lizandronarvaez/App-ProteinShop-React",
        "enlaceProyecto": "https://app-protein-shop-react.vercel.app/products"
    },
    {
        "title": "Crm Sistema de Gestión",
        "img": crm_frontend,
        "descripcion": "Crm de gestión de productos, pedidos y clientes, desarrollado con SpringBoot, Spring Security y utilizando ReactJs para el frontend",
        "repositorio": "https://github.com/lizandronarvaez/FullStack-Frontend-Reactjs",
        "enlaceProyecto": "https://crm-frontend-alpha.vercel.app/login"
    },
    {
        "title": "DevJobs",
        "img": portalEmpleo,
        "descripcion": "Portal de empleo realizado con NodeJs,ExpressJs, Handlebars, Autenticaciones, Notificaciones de Registro con Nodemailer, ODM Mongoose.",
        "repositorio": "https://github.com/lizandronarvaez/DevJobs",
        "enlaceProyecto": "https://empleo-it-devjobs.onrender.com"
    }
]