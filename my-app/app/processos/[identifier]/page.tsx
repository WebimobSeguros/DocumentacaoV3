// Utils
import { docs_skeleton } from "@/utils/docs_skeleton"
// Components
import BpmnViewer from "./components/BpmnViewer"

type Props = {
    params: Promise<{
        identifier: string
    }>
}

export default async function Process({ params }: Props) {

    const { identifier } = await params

    const process = docs_skeleton.find(item => item.identifier === identifier)

    if (!process) {
        return (<p>Processo não encontrado</p>)
    }

    return (<>

        <h2 className={'font-bold text-lg mt-2 mb-4 ml-2'}>{process?.title}</h2>

        <BpmnViewer xmlUrl={'/artefatos-docs/camunda' + process?.arquivo_bpmn} />

    </>)
}
