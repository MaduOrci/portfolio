import { NextResponse } from "next/server";
import { Resend } from "resend";

const fromEmail = process.env.FROM_EMAIL;
let resend;

try {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Chave de API não configurada. Verifique suas variáveis de ambiente.");
  }

  resend = new Resend(apiKey);
} catch (error) {
  console.error(error.message);
  // Lidar com a falta da chave de API conforme necessário
  // Aqui você pode fornecer um valor padrão para 'resend', ignorar o código, ou tomar outra ação apropriada.
}

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    if (resend) {
      const data = await resend.emails.send({
        from: fromEmail,
        to: [fromEmail, email],
        subject: subject,
        react: (
          <>
            <h1>{subject}</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted:</p>
            <p>{message}</p>
          </>
        ),
      });
      return NextResponse.json(data);
    } else {
      // Tratamento específico para quando 'resend' não está disponível (chave de API ausente)
      return NextResponse.json({ error: "Erro de configuração: Chave de API ausente." });
    }
  } catch (error) {
    return NextResponse.json({ error });
  }
}
