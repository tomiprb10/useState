import { useContactos } from "./hooks/useContactos";
import Sidebar from "./components/Sidebar";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";
import "./App.css";

export default function App() {
  const {
    contactos,
    totalContactos,
    contactoEditando,
    guardarContacto,
    editarContacto,
    cancelarEdicion,
    eliminarContacto,
  } = useContactos();

  return (
    <div className="layout-dashboard">
      <Sidebar total={totalContactos}>
        <FormularioContacto
          onGuardar={guardarContacto}
          contactoEditando={contactoEditando}
          onCancelar={cancelarEdicion}
        />
      </Sidebar>

      <main className="panel-principal">
        <header className="header-principal">
          <div className="header-info">
            <h2>Directorio de Contactos</h2>
            <p>Selecciona "Editar" para modificar la información de una tarjeta</p>
          </div>
        </header>

        <section className="lista-container">
          {contactos.length === 0 ? (
            <div className="lista-vacia">
              <span className="vacia-icono">📭</span>
              <h3>No hay contactos guardados</h3>
              <p>Agrega un contacto desde el formulario lateral.</p>
            </div>
          ) : (
            <div className="grid-contactos">
              {contactos.map((contacto) => (
                <ContactoCard
                  key={contacto.id}
                  id={contacto.id}
                  nombre={contacto.nombre}
                  telefono={contacto.telefono}
                  correo={contacto.correo}
                  etiqueta={contacto.etiqueta}
                  onDelete={eliminarContacto}
                  onEdit={editarContacto}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}