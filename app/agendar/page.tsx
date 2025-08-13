import { Scheduling } from "@/components/scheduling"

export const metadata = {
  title: "Agendar Validação - Vix Cert",
  description:
    "Agende sua videoconferência para validação do certificado digital com Agentes de Registro certificados ICP-Brasil.",
}

export default function SchedulePage() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Agende sua Validação</h1>
        <p className="text-lg text-muted-foreground">
          Escolha o melhor horário para realizar a validação do seu certificado digital através de videoconferência com
          nossos Agentes de Registro certificados. O processo é rápido, seguro e você pode fazer de onde estiver,
          seguindo todos os protocolos de segurança exigidos pela ICP-Brasil.
        </p>
      </div>
      <Scheduling />
      <div className="max-w-2xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4">Como funciona?</h2>
        <div className="grid gap-6">
          <div className="flex gap-4">
            <div className="flex-none w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="font-bold mb-2">Escolha um horário</h3>
              <p className="text-muted-foreground">
                Selecione uma data e horário disponível que melhor se adeque à sua agenda. Nosso sistema de agendamento
                é flexível e seguro.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="font-bold mb-2">Prepare seus documentos</h3>
              <p className="text-muted-foreground">
                Tenha em mãos seus documentos pessoais (RG e CPF) ou documentos da empresa (Contrato Social e
                Procuração). Todos os documentos devem ser originais e estar dentro da validade.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="font-bold mb-2">Participe da videoconferência</h3>
              <p className="text-muted-foreground">
                No horário agendado, acesse o link que será enviado para seu e-mail e siga as instruções do nosso Agente
                de Registro. Todo o processo é conduzido seguindo rigorosos protocolos de segurança e conformidade com a
                ICP- Todo o processo é conduzido seguindo rigorosos protocolos de segurança e conformidade com a
                ICP-Brasil, garantindo a validade jurídica do seu certificado digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
