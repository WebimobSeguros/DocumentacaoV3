// Utils
import { docs_skeleton } from "@/utils/docs_skeleton"

type Props = {
    params: Promise<{
        identifier: string
    }>
}

export default async function Arquitetura({ params }: Props) {

    const { identifier } = await params

    const arquitetura = docs_skeleton.arquitetura.find(item => item.id === identifier)

    if (!arquitetura) {
        return (<p>Diagrama não encontrado</p>)
    }

    return (<>

        <h2 className={'font-bold text-lg mt-2 mb-4 ml-2'}>{arquitetura?.titulo}</h2>

    </>)
}
