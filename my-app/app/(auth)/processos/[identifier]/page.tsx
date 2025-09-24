// Utils
import { docs_skeleton } from "@/utils/docs_skeleton"
// Components
import BpmnViewer from "./components/BpmnViewer"
// Shadnc
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type Props = {
    params: Promise<{
        identifier: string
    }>
}

export default async function Process({ params }: Props) {

    const { identifier } = await params

    const process = docs_skeleton.processos.find(item => item.id === identifier)

    if (!process) {
        return (<p>Processo não encontrado</p>)
    }

    return (<>
        <div className={'text-center pb-4'}>
            <h2 className={'font-bold text-lg'}>{process?.titulo}</h2>
            <p className={'text-muted-foreground text-sm mt-1'}>{process.descricao}</p>
        </div>
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem value={'rn'}>
                    <AccordionTrigger>
                        <h2 className={'text-lg'}>• Regras de Negócio (mais relevantes)</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className={'text-sm ml-4'}>
                            {process.regras_de_negocio.map((item, index) => (
                                <li key={item} className={'mb-2'}>
                                    <span className={'font-bold'}>
                                        {`[RN-${process.id}-${index + 1}]`}:
                                    </span>
                                    {' '}{item}
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={'bpmn'}>
                    <AccordionTrigger>
                        <h2 className={'text-lg'}>• Diagrama de Processos</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <BpmnViewer xmlUrl={'/artefatos-docs/camunda/' + process?.arquivo_bpmn} />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={'rf'}>
                    <AccordionTrigger>
                        <h2 className={'text-lg'}>• Requisitos Funcionais (mais relevantes)</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className={'text-sm ml-4'}>
                            {process.requisitos_funcionais.map((item, index) => (
                                <li key={item} className={'mb-2'}>
                                    <span className={'font-bold'}>
                                        {`[RF-${process.id}-${index + 1}]`}:
                                    </span>
                                    {' '}{item}
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </>)
}
