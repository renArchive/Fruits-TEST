import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
import Details from "./components/Details";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:fruitId",
      element: <Details />,
    },
  ]);

  return <RouterProvider router={router} />;
  // <div className="App">
  //   <h1>Fruit Test</h1>
  //   <p>
  //     1. Consultar a la API:{" "}
  //     <a href="https://www.fruityvice.com/">https://www.fruityvice.com/</a>
  //   </p>
  //   <p>
  //     2. Muestra un listado de frutas con estilos y colores de tu agrado, pero
  //     con un diseño "tipo card" que muestre solamente las propiedades 'name' y
  //     'family'
  //   </p>
  //   <p>
  //     3. Dar clic en una card, llevara a un componente/pantalla que muestre el
  //     resto de información de la fruta
  //   </p>
  //   <p>4. Incluir un botón "back" que permita volver al listado de frutas</p>
  // </div>
}
