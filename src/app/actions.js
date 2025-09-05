"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";

// Validación con Zod
const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  celular: z.string().min(10, "El celular debe tener al menos 10 dígitos"),
  edad: z.string().min(1, "La fecha de nacimiento es requerida"),
  noservidorpublico: z.boolean(), // <- nombre en minúsculas para coincidir con la DB
});

export async function submitContactForm(prevState, formData) {
  // Validamos los campos
  const validatedFields = contactSchema.safeParse({
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    celular: formData.get("celular"),
    edad: formData.get("edad"),
    noservidorpublico: formData.get("noServidorPublico") === "on", // <- el input sigue con camelCase
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Por favor corrige los errores en el formulario",
    };
  }

  try {
    // Insertamos los datos en Supabase
    const { error } = await supabase
      .from("contactos")
      .insert([validatedFields.data]);

    if (error) throw error;

    return {
      success: true,
      message: "¡Formulario enviado exitosamente! Te contactaremos pronto.",
    };
  } catch (err) {
    console.error("Supabase error:", err);
    return {
      success: false,
      message: "Error Supabase: " + err.message,
    };
  }
}
