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

        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>

            <iframe
                src={`/drawio-viewer.html?url=${encodeURI(`/artefatos-docs/drawio/arquitetura/${arquitetura.arquivo_diagrama}`)}`}
                allowFullScreen
                className={'border rounded-md h-[600px] w-full'}
                loading="lazy"
            />

            <div className={'h-[600px] overflow-y-scroll border rounded-md p-2 px-4'}>

                {arquitetura.sections.map((item, index) => (
                    <div key={index}>
                        <h1 className={'font-bold mb-1'}>
                            {item.title}
                        </h1>
                        {item.paragrafos && item.paragrafos.map((p, index_p) => (
                            <div key={index_p}>
                                <p className={'text-sm mb-3'}>
                                    {p.text}
                                </p>

                                {p.list &&
                                    <ul className={'list-disc pl-6 mb-5'}>
                                        {p.list.map((li, index_li) => (
                                            <li
                                                className={'text-muted-foreground text-xs'}
                                                key={index_li}>
                                                {li}
                                            </li>
                                        ))}
                                    </ul>}
                            </div>
                        ))}
                    </div>
                ))}

            </div>

        </div>
    </>)
}
