import { useState, useEffect } from "react";

const CONTACTOS_INICIALES = [
  {
    id: "init-1",
    nombre: "Carolina Pérez",
    telefono: "300 123 4567",
    correo: "carolina@sena.edu.co",
    etiqueta: "Compañero",
  },
  {
    id: "init-2",
    nombre: "Alejandro Gómez",
    telefono: "311 987 6543",
    correo: "alejandro.g@gmail.com",
    etiqueta: "Trabajo",
  },
];

export function useContactos() {
  const [contactos, setContactos] = useState(() => {
    try {
      const guardados = localStorage.getItem("contactos");
      return guardados ? JSON.parse(guardados) : CONTACTOS_INICIALES;
    } catch {
      return CONTACTOS_INICIALES;
    }
  });

  const [contactoEditando, setContactoEditando] = useState(null);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (nuevo) => {
    const nuevoContacto = { ...nuevo, id: `contacto-${Date.now()}` };
    setContactos((prev) => [nuevoContacto, ...prev]);
  };

  const actualizarContacto = (contactoActualizado) => {
    setContactos((prev) =>
      prev.map((c) => (c.id === contactoActualizado.id ? contactoActualizado : c))
    );
    setContactoEditando(null);
  };

  const guardarContacto = (datos) => {
    if (contactoEditando) {
      actualizarContacto(datos);
    } else {
      agregarContacto(datos);
    }
  };

  const editarContacto = (contacto) => {
    setContactoEditando(contacto);
  };

  const cancelarEdicion = () => {
    setContactoEditando(null);
  };

  const eliminarContacto = (id) => {
    setContactos((prev) => prev.filter((c) => c.id !== id));
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