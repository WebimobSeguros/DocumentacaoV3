'use client'

// React
import { useEffect, useRef, useState } from 'react'

type Props = {
    xmlUrl: string
}

export default function BpmnViewer({ xmlUrl }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isGrabbing, setIsGrabbing] = useState(false)

    // lazy-load bpmn-js
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let v: any

        async function init() {
            const { default: Viewer } = await import('bpmn-js/lib/NavigatedViewer')
            v = new Viewer({ container: containerRef.current! })

            const xml = await (await fetch(xmlUrl, { cache: 'no-store' })).text()
            if (!/bpmn:definitions/.test(xml)) {
                throw new Error(
                    `The file at ${xmlUrl} doesn't look like BPMN 2.0 XML (missing <bpmn:definitions>).`
                )
            }

            await v.importXML(xml)

            const canvas = v.get('canvas')
            canvas.zoom('fit-viewport', 'auto')
            canvas.zoom(1)
        }

        init().catch(err => {
            if (containerRef.current) {
                containerRef.current.innerHTML = `<div style="padding:12px;color:#b91c1c;background:#fee2e2;border:1px solid #fecaca;border-radius:8px;">
                <strong>BPMN load error:</strong> ${String(err?.message || err)}
                </div>`
            }
        })

        return () => { v?.destroy() }
    }, [xmlUrl])

    // Grab/grabbing cursor (desktop)
    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const onDown = (e: MouseEvent) => { if (e.button === 0) setIsGrabbing(true) }
        const onUp = () => setIsGrabbing(false)
        const onLeave = () => setIsGrabbing(false)

        el.addEventListener('mousedown', onDown)
        window.addEventListener('mouseup', onUp)
        el.addEventListener('mouseleave', onLeave)

        return () => {
            el.removeEventListener('mousedown', onDown)
            window.removeEventListener('mouseup', onUp)
            el.removeEventListener('mouseleave', onLeave)
        }
    }, [])

    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm opacity-70 ml-2">
                Controles: segure e arraste para mover • Ctrl + roda do mouse para dar zoom
            </p>
            <div
                ref={containerRef}
                className={`w-full h-[60vh] overflow-auto touch-none select-none border rounded-lg ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
            />
        </div>
    )
}
