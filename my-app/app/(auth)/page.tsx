// Utils
import { docs_skeleton } from "@/utils/docs_skeleton"
// Next
import Link from "next/link"

export default function Home() {

  type CardProps = {
    link: string
    titulo: string
    description: string
  }

  const Card = ({ link, titulo, description }: CardProps) => {
    return (
      <Link href={link}>
        <div className={`
          border border-l-5 ${link.includes('processos') ? 'border-l-cyan-800' : (link.includes('arquitetura') ? 'border-l-yellow-600' : 'border-l-green-600')} 
          p-4 rounded-lg w-full h-full`}>
          <h2 className={'text-sm'}>{titulo}</h2>
          <p className={'text-xs text-muted-foreground mt-2'}>
            {description}
          </p>
        </div>
      </Link>
    )
  }

  return (
    <div className={'flex flex-col gap-6'}>

      <div>
        <h1 className={'font-bold mb-3'}>• Processos e Regras de Negócio</h1>

        <div className={'grid grid-cols-1 md:grid-cols-2 gap-4 items-start'}>
          <section className={'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'}>
            {docs_skeleton.processos.map(item => (
              <Card
                description={item.descricao}
                link={`/processos/${item.id}`}
                key={item.id}
                titulo={item.titulo} />
            ))}
          </section>
          <iframe
            src={`/drawio-viewer.html?url=${encodeURI(`/artefatos-docs/drawio/hierarquia-de-artefatos.drawio`)}`}
            allowFullScreen
            className={'border rounded-lg w-full h-[300px] md:h-full'}
            loading="lazy"
          />
        </div>
      </div>

      <div>
        <h1 className={'font-bold mb-3'}>• Arquitetura</h1>

        <section className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'}>
          {docs_skeleton.arquitetura.map(item => (
            <Card
              description={item.descricao}
              link={`/arquitetura/${item.id}`}
              key={item.id}
              titulo={item.titulo} />
          ))}
        </section>
      </div>

      <div>
        <h1 className={'font-bold mb-3'}>• Dados</h1>

        <section className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'}>
          <Card
            description={docs_skeleton.dados.descricao}
            link={`/der`}
            titulo={docs_skeleton.dados.titulo} />
        </section>
      </div>

    </div>)
}
