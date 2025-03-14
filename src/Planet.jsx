import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { memo } from 'react'

export const Planet = memo(({ name, lottie, description, distanceFromEarth }) => {
    return (
        <div>
            <h1 className="text-white text-4xl mb-4 backdrop-blur-md text-center">{name}</h1>
            <div className="bg-black/25 rounded-full py-10 flex items-center justify-center mb-4 border-4 border-slate-600 backdrop-blur-md">
                <div className='w-full flex flex-col items-center justify-center'>
                    <DotLottieReact
                        className="h-60 w-60"
                        src={lottie}
                        loop
                        autoplay
                    />
                </div>
            </div>
            <div className='rounded-xl mb-4 bg-gradient-to-r from-slate-800/25 via-indigo-600/25 to-slate-600/25 p-1'>
                <div className='text-white rounded-xl p-4 bg-slate-800/40 backdrop-blur-md'>
                    <p className='mb-3'>{description}</p>
                    <p className="font-medium text-sm">Distancia desde la Tierra: </p>
                    <p className='text-sm font-light text-neutral-200'>
                        {distanceFromEarth}
                    </p>
                </div>
            </div>
        </div>
    )
});

Planet.displayName = 'Planet';
