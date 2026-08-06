import { useFormularioContacto } from "../hooks/useFormularioContacto";
import { ETIQUETAS } from "../utils/etiquetas";

export default function FormularioContacto({ onGuardar, contactoEditando, onCancelar }) {
  const { form, handleChange, handleSubmit } = useFormularioContacto(contactoEditando, onGuardar);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-slate-800/60 border border-slate-700/80 rounded-xl p-4 text-slate-100"
    >
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-300">Nombre *</label>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Ej. Maria Lopez"
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-300">Teléfono *</label>
        <input
          type="text"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="Ej. 300 123 4567"
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-300">Correo *</label>
        <input
          type="email"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-slate-300">Etiqueta</label>
        <select
          name="etiqueta"
          value={form.etiqueta}
          onChange={handleChange}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 cursor-pointer transition"
        >
          <option value="">Sin etiqueta</option>
          {ETIQUETAS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.value}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 pt-2">
        <button
          type="submit"
          className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg py-2 text-sm transition shadow-sm"
        >
          {contactoEditando ? "Guardar" : "Agregar"}
        </button>
        {contactoEditando && (
          <button
            type="button"
            onClick={onCancelar}
            className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold rounded-lg px-3 py-2 text-sm transition"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}