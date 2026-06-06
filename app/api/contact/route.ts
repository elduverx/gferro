import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, type, message } = await req.json();

    // Configuración del transporte (ejemplo con Gmail o SMTP genérico)
    // Para producción, se recomienda usar variables de entorno (.env.local)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // O tu proveedor (SMTP, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@grupoferrero.es', // Email donde quieres recibir las consultas
      subject: `Nueva solicitud de presupuesto: ${name}`,
      text: `
        Has recibido una nueva solicitud de presupuesto desde la web:
        
        Nombre: ${name}
        Teléfono: ${phone}
        Tipo de Reforma: ${type}
        Mensaje: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Nueva Solicitud de Presupuesto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Tipo de Reforma:</strong> ${type}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #777;">Este mensaje fue enviado desde el formulario de contacto de Grupo Ferrero.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email enviado correctamente' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ message: 'Error al enviar el email' }, { status: 500 });
  }
}
