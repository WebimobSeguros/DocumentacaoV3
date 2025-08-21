// Utils
import { docs_skeleton } from "@/utils/docs_skeleton"
// Components
import BpmnViewer from "./components/BpmnViewer"
// Shadnc
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
        <div className={'w-4/5 mx-auto mb-4 border-b text-center'}>
            <h2 className={'font-bold text-lg'}>{process?.titulo}</h2>
            <p className={'text-muted-foreground text-sm mt-1 mb-4'}>{process.descricao}</p>
        </div>

        <section className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
            <div className={'m-2'}>
                <h3 className={'font-medium pb-3'}>Diagrama do Processo</h3>
                <BpmnViewer xmlUrl={'/artefatos-docs/camunda/' + process?.arquivo_bpmn} />
            </div>
            <div className={'m-2 overflow-y-scroll max-h-[350px]'}>
                <h3 className={'font-medium pb-3'}>Regras de Negócio</h3>
                <ul className={'list-disc ml-4 text-sm'}>
                    {process.regras_de_negocio.map((item, index) => (
                        <li key={item} className={'mb-2'}>
                            <span className={'font-bold'}>{`[RN-${index + 1}]`}:</span> {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={'m-2'}>
                <h3 className={'font-medium pb-3'}>Diagrama de Casos De Uso</h3>
                <iframe
                    src={`/drawio-viewer.html?url=${encodeURI(`/artefatos-docs/drawio/casos-de-uso/${process.arquivo_casos_de_uso}`)}`}
                    allowFullScreen
                    className={'border rounded-lg w-full h-[350px]'}
                    loading="lazy"
                />
            </div>
            <div className={'m-2 overflow-y-scroll max-h-[400px]'}>
                <h3 className={'font-medium pb-3'}>Casos de Uso e Requisitos Funcionais</h3>
                <ul className={'list-disc ml-4 text-sm'}>
                    <Accordion type="single" collapsible>
                        {process.casos_de_uso.map((item, index_actor) => (
                            <AccordionItem value={item.nome_ator} key={item.nome_ator}>
                                <AccordionTrigger>
                                    {item.nome_ator}
                                </AccordionTrigger>
                                <AccordionContent>
                                    {item.itens.map((item, index_uc) => (
                                        <div key={item.titulo}>
                                            <h4 className={'mb-3 font-medium'}>• {item.titulo}</h4>
                                            <ol className={'list-decimal ml-4 text-sm'} >
                                                {item.requisitos_funcionais.map((item, index) => (
                                                    <li key={item} className={'mb-2 text-xs'}>
                                                        <span className={'font-bold'}>
                                                            {`[RF-${index_actor + 1}.${index_uc + 1}.${index + 1}]`}:
                                                        </span> {item}
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
            </div>
        </section>

    </>)
}
