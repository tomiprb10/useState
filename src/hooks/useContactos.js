import { useState, useEffect } from "react";

const CONTACTOS_INICIALES = [
  {
    id: 1,
    nombre: "Carolina Pérez",
    telefono: "300 123 4567",
    correo: "carolina@sena.edu.co",
    etiqueta: "Compañero",
  },
  {
    id: 2,
    nombre: "Alejandro Gómez",
    telefono: "311 987 6543",
    correo: "alejandro.g@gmail.com",
    etiqueta: "Trabajo",
  },
];

export function useContactos() {
  // 1. Carga inicial desde localStorage (si no hay nada, usa CONTACTOS_INICIALES)
  const [contactos, setContactos] = useState(() => {
    const guardados = localStorage.getItem("contactos");
    return guardados ? JSON.parse(guardados) : CONTACTOS_INICIALES;
  });

  const [contactoEditando, setContactoEditando] = useState(null);

  // 2. Persistencia automática: guarda en localStorage cada vez que cambie 'contactos'
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  // Agregar contacto nuevo
  const agregarContacto = (nuevo) => {
    setContactos((prev) => [{ id: Date.now(), ...nuevo }, ...prev]);
  };

  // Actualizar contacto existente usando .map()
  const actualizarContacto = (contactoActualizado) => {
    setContactos((prev) =>
      prev.map((contacto) =>
        contacto.id === contactoActualizado.id ? contactoActualizado : contacto
      )
    );
    // Vuelve automáticamente al modo "Agregar"
    setContactoEditando(null);
  };

  // Decide si guarda uno nuevo o actualiza existente
  const guardarContacto = (datos) => {
    if (contactoEditando) {
      actualizarContacto(datos);
    } else {
      agregarContacto(datos);
    }
  };

  // Carga el contacto en el formulario
  const editarContacto = (contacto) => {
    setContactoEditando(contacto);
  };

  const cancelarEdicion = () => {
    setContactoEditando(null);
  };

  const eliminarContacto = (id) => {
    setContactos((prev) => prev.filter((contacto) => contacto.id !== id));
    if (contactoEditando?.id === id) {
      setContactoEditando(null);
    }
  };

  return {
    contactos,
    totalContactos: contactos.length,
    contactoEditando,
    guardarContacto,
    editarContacto,
    cancelarEdicion,
    eliminarContacto,
  };
}