import { getEtiquetaEstilos } from "../utils/etiquetas";

export default function ContactoCard({ id, nombre, telefono, correo, etiqueta, onDelete, onEdit }) {
  const estiloEtiqueta = getEtiquetaEstilos(etiqueta);

  return (
    <article className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4 h-full">
      <div>
        <div className="flex justify-between items-start gap-2 mb-3">
          <h3 className="font-semibold text-slate-800 text-base leading-snug line-clamp-1">
            {nombre}
          </h3>
          {etiqueta && (
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border ${estiloEtiqueta.bg} ${estiloEtiqueta.text} ${estiloEtiqueta.border}`}
            >
              {etiqueta}
            </span>
          )}
        </div>

        <div className="space-y-1.5 text-sm text-slate-600">
          <p className="flex items-center gap-2">
            <span>📞</span> <span className="font-medium text-slate-700">{telefono}</span>
          </p>
          <p className="flex items-center gap-2 truncate">
            <span>✉️</span> <span className="text-slate-600 truncate">{correo}</span>
          </p>
        </div>
      </div>

      <div className="flex gap-2 justify-end border-t border-slate-100 pt-3">
        <button
          type="button"
          onClick={() => onEdit({ id, nombre, telefono, correo, etiqueta })}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg px-3 py-1.5 transition"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={() => onDelete(id)}
          className="bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-semibold rounded-lg px-3 py-1.5 transition"
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}