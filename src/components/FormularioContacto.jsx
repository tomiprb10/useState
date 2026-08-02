import { useFormularioContacto } from "../hooks/useFormularioContacto";
import { ETIQUETAS } from "../utils/etiquetas";
import "./FormularioContacto.css";

export default function FormularioContacto({
  onGuardar,
  contactoEditando,
  onCancelar,
}) {
  const { form, handleChange, handleSubmit } = useFormularioContacto(
    contactoEditando,
    onGuardar
  );

  const estaEditando = Boolean(contactoEditando);

  return (
    <form className="formulario-contacto" onSubmit={handleSubmit}>
      <div className="formulario-encabezado">
        <span className="formulario-eyebrow">
          {estaEditando ? "✏️ Modo edición" : "✨ Nuevo contacto"}
        </span>
        <h2 className="formulario-titulo">
          {estaEditando ? "Editar contacto" : "Agregar a la agenda"}
        </h2>
      </div>

      <div className="campo">
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          placeholder="Ej. Carolina Pérez"
          value={form.nombre}
          onChange={handleChange}
        />
      </div>

      <div className="campo">
        <label htmlFor="telefono">Teléfono</label>
        <input
          id="telefono"
          type="tel"
          name="telefono"
          placeholder="300 000 0000"
          value={form.telefono}
          onChange={handleChange}
        />
      </div>

      <div className="campo">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          type="email"
          name="correo"
          placeholder="nombre@correo.com"
          value={form.correo}
          onChange={handleChange}
        />
      </div>

      <div className="campo">
        <label htmlFor="etiqueta">Etiqueta</label>
        <select
          id="etiqueta"
          name="etiqueta"
          value={form.etiqueta}
          onChange={handleChange}
        >
          <option value="">Sin etiqueta</option>
          {ETIQUETAS.map((etiqueta) => (
            <option key={etiqueta.value} value={etiqueta.value}>
              {etiqueta.value}
            </option>
          ))}
        </select>
      </div>

      <div className="formulario-acciones">
        <button type="submit" className="btn-guardar">
          {estaEditando ? "Guardar cambios" : "Agregar contacto"}
        </button>

        {estaEditando && (
          <button type="button" className="btn-cancelar" onClick={onCancelar}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}