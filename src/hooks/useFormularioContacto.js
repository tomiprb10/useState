import { useState, useEffect } from "react";

const FORM_VACIO = {
  id: null,
  nombre: "",
  telefono: "",
  correo: "",
  etiqueta: "",
};

export function useFormularioContacto(contactoEditando, onGuardar) {
  const [form, setForm] = useState(FORM_VACIO);

  // Cuando cambia el contactoEditando, cargamos sus datos en el formulario
  useEffect(() => {
    if (contactoEditando) {
      setForm(contactoEditando);
    } else {
      setForm(FORM_VACIO);
    }
  }, [contactoEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre.trim() || !form.telefono.trim()) {
      alert("Por favor completa el Nombre y el Teléfono.");
      return;
    }

    onGuardar(form);

    // Si se estaba agregando uno nuevo, limpiar campos
    if (!contactoEditando) {
      setForm(FORM_VACIO);
    }
  };

  return { form, handleChange, handleSubmit };
}