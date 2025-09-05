'use client';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export const RenderDER = ({
    src,
    alt = '',
    maxScale = 100, // crank this up if you want “infinite”
}: { src: string; alt?: string; maxScale?: number })=>  {
    return (
        <div className="relative w-full h-[80vh] overflow-hidden bg-black/5">
            <TransformWrapper
                initialScale={0.2}
                minScale={0.1}
                maxScale={maxScale}
                wheel={{ step: 0.1 }}
                doubleClick={{ mode: 'zoomIn', step: 1 }}
                pinch={{ step: 0.1 }}
                panning={{ velocityDisabled: true }}
            >
                {({ zoomIn, zoomOut, resetTransform, centerView }) => (
                    <>
                        <div className="absolute z-10 left-3 top-3 flex gap-2 rounded-2xl bg-white/90 p-2 shadow">
                            <button onClick={() => zoomIn()} className="px-2 py-1 rounded bg-neutral-200">+</button>
                            <button onClick={() => zoomOut()} className="px-2 py-1 rounded bg-neutral-200">−</button>
                            <button onClick={() => resetTransform()} className="px-2 py-1 rounded bg-neutral-200">Reset</button>
                            <button onClick={() => centerView(1)} className="px-2 py-1 rounded bg-neutral-200">Fit</button>
                        </div>

                        <TransformComponent
                            wrapperStyle={{ width: '100%', height: '100%', touchAction: 'none' }}
                            contentStyle={{ width: 'max-content', height: 'max-content' }}
                        >
                            <img
                                src={src}
                                alt={alt}
                                draggable={false}
                                style={{
                                    userSelect: 'none',
                                    pointerEvents: 'none', // lets the wrapper handle gestures
                                    maxWidth: 'unset',
                                    maxHeight: 'unset',
                                    display: 'block',
                                }}
                            />
                        </TransformComponent>
                    </>
                )}
            </TransformWrapper>
        </div>
    );
}
