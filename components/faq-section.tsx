import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "O que é um certificado digital?",
    answer:
      "Um certificado digital é um documento eletrônico que contém dados sobre a identidade de uma pessoa ou empresa, permitindo a realização de transações online com segurança e validade jurídica, em conformidade com os padrões ICP-Brasil.",
  },
  {
    question: "Quanto tempo leva para obter um certificado digital?",
    answer:
      "O processo de obtenção pode variar, mas geralmente leva de 30 minutos a algumas horas, dependendo do tipo de certificado e da verificação necessária. Nossos processos são otimizados para garantir a emissão mais rápida possível, mantendo todos os requisitos de segurança.",
  },
  {
    question: "Quais são os tipos de certificados digitais disponíveis?",
    answer:
      "Oferecemos diversos tipos, incluindo e-CPF para pessoas físicas, e-CNPJ para empresas, NF-e para emissão de notas fiscais eletrônicas, entre outros. Cada um tem características específicas para diferentes necessidades e todos são homologados pela ICP-Brasil.",
  },
  {
    question: "Como posso renovar meu certificado digital?",
    answer:
      "A renovação pode ser feita online através do nosso site, desde que seu certificado atual ainda esteja válido. O processo é simples e rápido, mantendo o mesmo nível de segurança e seguindo todos os protocolos estabelecidos pela ICP-Brasil.",
  },
  {
    question: "O que acontece se minha chave privada for comprometida?",
    answer:
      "Em caso de comprometimento da chave privada, entre em contato imediatamente conosco. Temos um procedimento específico para revogação do certificado comprometido, conforme nosso Plano de Continuidade de Negócios, garantindo a segurança das suas informações.",
  },
  {
    question: "A VixCert possui planos de contingência para garantir a continuidade dos serviços?",
    answer:
      "Sim, a VixCert possui um Plano de Continuidade de Negócios (PCN) completo que atende às exigências do Instituto Nacional de Tecnologia da Informação (ITI). Este plano inclui procedimentos para diversos cenários, garantindo a disponibilidade contínua dos nossos serviços.",
  },
]

export function FAQSection() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left font-semibold py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
