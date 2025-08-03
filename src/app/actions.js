"use server"

import { z } from "zod"

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  celular: z.string().min(10, "El celular debe tener al menos 10 dígitos"),
  edad: z.string().min(1, "La fecha de nacimiento es requerida"),
  noServidorPublico: z.boolean(),
})

export async function submitContactForm(prevState, formData) {
  const validatedFields = contactSchema.safeParse({
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    celular: formData.get("celular"),
    edad: formData.get("edad"),
    noServidorPublico: formData.get("noServidorPublico") === "on",
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Por favor corrige los errores en el formulario",
    }
  }

  // Simular envío del formulario
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Aquí podrías enviar los datos a tu base de datos o servicio de email
  console.log("Datos del formulario:", validatedFields.data)

  return {
    success: true,
    message: "¡Formulario enviado exitosamente! Te contactaremos pronto.",
  }
}
