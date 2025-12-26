import Encabezado from "./component/Encabezado";
import Presentacion from "./component/Presentacion";
import InformacionPersonal from "./component/InformacionPersonal";
import Capacidades from "./component/Capacidades";
import Proyecto from "./component/Proyecto";
import Formacion from "./component/Formacion";
import Contacto from "./component/Contacto";

const App = () => {
  return (
    <>
      <Encabezado />
      <main>
        <Presentacion />
        <InformacionPersonal />
        <Capacidades />
        <Proyecto />
        <Formacion />
        <Contacto />
      </main>
    </>
  );
};

export default App;
