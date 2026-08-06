import { useContactos } from "./hooks/useContactos";
import Sidebar from "./components/Sidebar";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

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
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar total={totalContactos}>
        <FormularioContacto
          onGuardar={guardarContacto}
          contactoEditando={contactoEditando}
          onCancelar={cancelarEdicion}
        />
      </Sidebar>

      <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
        <header className="mb-8 border-b border-slate-200 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Directorio de Contactos</h2>
            <p className="text-sm text-slate-500">
              Gestiona, crea y modifica las tarjetas de tu directorio.
            </p>
          </div>
        </header>

        <section>
          {contactos.length === 0 ? (
            <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center max-w-md mx-auto my-12 shadow-sm">
              <span className="text-5xl block mb-3">📭</span>
              <h3 className="text-lg font-bold text-slate-800 mb-1">No hay contactos guardados</h3>
              <p className="text-sm text-slate-500">
                Agrega un nuevo contacto desde el formulario de la barra lateral.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
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