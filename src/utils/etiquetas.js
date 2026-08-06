export const ETIQUETAS = [
  { value: "Familia", bg: "bg-rose-100", text: "text-rose-700", border: "border-rose-200" },
  { value: "Trabajo", bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200" },
  { value: "Amigo", bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200" },
  { value: "Compañero", bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
  { value: "Otro", bg: "bg-slate-100", text: "text-slate-700", border: "border-slate-200" },
];

export function getEtiquetaEstilos(etiqueta) {
  const encontrada = ETIQUETAS.find(
    (item) => item.value.toLowerCase() === (etiqueta || "").toLowerCase()
  );
  return encontrada || ETIQUETAS[4];
}