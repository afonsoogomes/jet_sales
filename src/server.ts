import app from "@/app";
import { env } from "@config/env";
import { bootstrap } from "./bootstrap";

const PORT = env.port ?? 3000;

app.listen(PORT, async () => {
  await bootstrap();
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});