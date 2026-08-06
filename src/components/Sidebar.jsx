export default function Sidebar({ total, children }) {
  return (
    <aside className="w-full lg:w-96 bg-slate-900 text-white p-6 flex flex-col justify-between gap-6 shrink-0 border-r border-slate-800">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="bg-purple-600/20 border border-purple-500/30 p-2 rounded-xl text-2xl">
            📇
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">Agenda ADSO</h1>
            <p className="text-xs text-slate-400">Directorio profesional de contactos</p>
          </div>
        </div>

        <div>{children}</div>
      </div>

      <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-4 flex items-center justify-between">
        <span className="text-3xl font-extrabold text-purple-400">{total}</span>
        <span className="text-xs text-slate-300 font-medium uppercase tracking-wider">
          {total === 1 ? "contacto registrado" : "contactos registrados"}
        </span>
      </div>
    </aside>
  );
}