// Utils
import { docs_skeleton } from "@/utils/docs_skeleton"
// Next
import Link from "next/link"

export default function Home() {
  return (<>
    <h1 className={'text-center font-bold text-2xl mt-5'}>Processos</h1>
    <p className={'text-center mt-1 text-muted-foreground mb-4'}>do Sistema Webimob</p>

    <section className={'flex justify-center gap-3 flex-wrap'}>
      {docs_skeleton.map(item => (
        <Link href={`/processos/${item.identifier}`} key={item.identifier}>
        <div className={'border shadow p-4 rounded-lg w-[240px]'}>
          <h2 className={'text-center'}>{item.title}</h2>
        </div>
        </Link>
      ))}
    </section>
  </>)
}
