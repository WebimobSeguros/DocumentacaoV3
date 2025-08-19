// Utils
import { docs_skeleton } from "@/utils/docs_skeleton"
// Next
import Link from "next/link"

export default function Home() {
  return (
    <div className={'flex flex-col gap-10'}>

      <div>
        <h1 className={'font-bold text-2xl mb-3'}>⨀ Processos</h1>

        <section className={'flex gap-3 flex-wrap'}>
          {docs_skeleton.processos.map(item => (
            <Link href={`/processos/${item.id}`} key={item.id}>
              <div className={'border border-l-5 border-l-cyan-800 p-4 rounded-lg w-[240px]'}>
                <h2 className={'text-center'}>{item.titulo}</h2>
              </div>
            </Link>
          ))}
        </section>
      </div>

      <div>
        <h1 className={'font-bold text-2xl mb-3'}>⨀ Arquitetura</h1>

        <section className={'flex gap-3 flex-wrap'}>
          {docs_skeleton.arquitetura.map(item => (
            <Link href={`/arquitetura/${item.id}`} key={item.id}>
              <div className={'border border-l-5 border-l-amber-600 p-4 rounded-lg w-[240px]'}>
                <h2 className={'text-center'}>{item.titulo}</h2>
              </div>
            </Link>
          ))}
        </section>
      </div>

    </div>)
}
