import "./Sidebar.css";

export default function Sidebar({ total, children }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-glow" aria-hidden="true" />

      <div className="sidebar-marca">
        <span className="sidebar-indice">📇</span>
        <div>
          <h1 className="sidebar-titulo">Agenda ADSO</h1>
          <p className="sidebar-subtitulo">Directorio profesional de contactos</p>
        </div>
      </div>

      <div className="sidebar-formulario">{children}</div>

      <div className="sidebar-stats">
        <span className="stats-numero">{total}</span>
        <span className="stats-etiqueta">
          {total === 1 ? "contacto registrado" : "contactos registrados"}
        </span>
      </div>
    </aside>
  );
}