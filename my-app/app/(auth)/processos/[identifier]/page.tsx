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
                        <h2 className={'text-lg'}>• Regras de Negócio</h2>
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
                <AccordionItem value={'uc-diagrama'}>
                    <AccordionTrigger>
                        <h2 className={'text-lg'}>• Diagrama de Casos De Uso</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <iframe
                            src={`/drawio-viewer.html?url=${encodeURI(`/artefatos-docs/drawio/casos-de-uso/${process.arquivo_casos_de_uso}`)}`}
                            allowFullScreen
                            className={'border rounded-lg w-full h-[400px]'}
                            loading="lazy"
                        />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value={'uc-rf'}>
                    <AccordionTrigger>
                        <h2 className={'text-lg'}>• Casos de Uso e Requisitos Funcionais</h2>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className={'list-disc ml-4 text-sm'}>
                            <Accordion type="single" collapsible>
                                {process.atores.map((item, index_actor) => (
                                    <AccordionItem value={item.nome_ator} key={item.nome_ator}>
                                        <AccordionTrigger>
                                            Ator {index_actor + 1}: {item.nome_ator}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {item.casos_de_uso.map((uc, index_uc) => (
                                                <div key={uc.titulo}>
                                                    <h4 className={'mb-3 font-medium'}>• {uc.titulo}</h4>
                                                    <ol className={'list-decimal ml-4 text-sm'} >
                                                        {uc.requisitos_funcionais.map((rf, index) => (
                                                            <li key={rf} className={'mb-2 text-xs'}>
                                                                <span className={'font-bold'}>
                                                                    {`[RF-${index_actor + 1}.${index_uc + 1}.${index + 1}]`}:
                                                                </span> {rf}
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>
                                            ))}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </>)
}
