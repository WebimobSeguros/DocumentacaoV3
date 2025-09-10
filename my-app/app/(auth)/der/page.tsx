// Components
import { docs_skeleton } from "@/utils/docs_skeleton";
import { RenderDER } from "./RenderDER";

export default function DER() {
    return (
        <><div className={'text-center pb-4'}>
            <h2 className={'font-bold text-lg'}>{docs_skeleton?.dados.titulo}</h2>
            <p className={'text-muted-foreground text-sm mt-1'}>{docs_skeleton.dados.descricao}</p>
        </div><RenderDER
                alt={'DER diagram'}
                src={'/der-webimob-v3-05-09-2025.pgerd.png'} />

                {docs_skeleton.dados.sections.map((item, index) => (
                    <div className="pt-5 text-2xl"
                    key={index}>
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
                                                className={'text-xs'}
                                                key={index_li}>
                                                {li}
                                            </li>
                                        ))}
                                    </ul>}
                            </div>
                        ))}
                    </div>
                ))}
    </> 
    )
}