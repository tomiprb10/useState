import { getEtiquetaColor } from "../utils/etiquetas";
import "./ContactoCard.css";

export default function ContactoCard({
  id,
  nombre,
  telefono,
  correo,
  etiqueta,
  onDelete,
  onEdit,
}) {
  const inicial = nombre.trim().charAt(0).toUpperCase() || "?";
  const colorEtiqueta = getEtiquetaColor(etiqueta);

  return (
    <article className="tarjeta-contacto">
      <div className="tarjeta-avatar">{inicial}</div>

      <div className="tarjeta-contenido">
        <div className="tarjeta-header">
          <h3 className="tarjeta-nombre">{nombre}</h3>
          {etiqueta && (
            <span
              className="tarjeta-badge"
              style={{
                backgroundColor: `${colorEtiqueta}15`,
                color: colorEtiqueta,
                borderColor: `${colorEtiqueta}30`,
              }}
            >
              {etiqueta}
            </span>
          )}
        </div>

        <div className="tarjeta-datos">
          <a href={`tel:${telefono}`} className="dato-item dato-link">
            <span className="dato-icono">📞</span>
            <span>{telefono}</span>
          </a>

          {correo && (
            <a href={`mailto:${correo}`} className="dato-item dato-link">
              <span className="dato-icono">✉️</span>
              <span>{correo}</span>
            </a>
          )}
        </div>

        <div className="acciones">
          <button
            type="button"
            className="btn-editar"
            onClick={() => onEdit({ id, nombre, telefono, correo, etiqueta })}
          >
            Editar
          </button>
          <button
            type="button"
            className="btn-eliminar"
            onClick={() => onDelete(id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}