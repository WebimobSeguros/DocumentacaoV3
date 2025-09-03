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

        <div className={'grid grid-cols-2'}>

            <iframe
                src={`/drawio-viewer.html?url=${encodeURI(`/artefatos-docs/drawio/arquitetura/${arquitetura.arquivo_diagrama}`)}`}
                allowFullScreen
                className={'border rounded-md aspect-square'}
                loading="lazy"
            />
            <div>
                {arquitetura.paragrafos.map((item, index) => (
                    <div key={index} className={'px-5'}>
                        <h1 className={'font-medium'}>{item.main}</h1>
                        {item.list && item.list.map((p, index_p) => (
                            <p className={'text-muted-foreground text-xs'} key={index_p}>{p}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>

    </>)
}
