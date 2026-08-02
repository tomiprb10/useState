export const ETIQUETAS = [
  { value: "Familia", color: "#e11d48" },
  { value: "Trabajo", color: "#2563eb" },
  { value: "Amigo", color: "#16a34a" },
  { value: "Compañero", color: "#d97706" },
  { value: "Otro", color: "#6b7280" },
];

export function getEtiquetaColor(etiqueta) {
  const encontrada = ETIQUETAS.find(
    (item) => item.value.toLowerCase() === (etiqueta || "").toLowerCase()
  );
  return encontrada ? encontrada.color : "#64748b";
}