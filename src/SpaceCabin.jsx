import { planets } from "./data/planets.js"
import { Planet } from "./Planet.jsx";
import { useState } from 'react';

export const SpaceCabin = () => {
    const [currentPlanet, setCurrentPlanet] = useState(3);

    const nextPlanet = () => {
        setCurrentPlanet((prev) => (prev + 1) % planets.length);
    };

    const previousPlanet = () => {
        setCurrentPlanet((prev) => (prev - 1 + planets.length) % planets.length);
    };

    return (
        <div className="container mx-auto p-2 h-screen bg-center bg-cover rounded-tr-full rounded-bl-full mb-10"
            style={{
                backgroundImage: `url(${planets[currentPlanet].src})`,
            }}
        >
        <div className="container mx-auto p-4 h-full rounded-tr-full rounded-bl-full bg-indigo-950/50"
        >
            <div className="flex flex-col">
                <Planet
                    key={planets[currentPlanet].id}
                    name={planets[currentPlanet].name}
                    lottie={planets[currentPlanet].lottie}
                    description={planets[currentPlanet].description}
                    distanceFromEarth={planets[currentPlanet].distanceFromEarth}
                />
            </div>
            <div className="flex justify-between gap-2 border-4 border-slate-600 bg-slate-900/50 p-2 rounded-xl">
                <button
                    onClick={previousPlanet}
                    className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 bg-slate-600/50 hover:bg-slate-700/50 text-white rounded-xl 
             transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                >
                    {"<"}
                </button>
                <div className="flex flex-col">
                    <div className="flex flex-wrap justify-between gap-2">
                        {planets.map((planet, index) => (
                            <button
                                key={planet.id}
                                onClick={() => setCurrentPlanet(index)}
                                className={`cursor-pointer px-4 font-bold sm:px-6 py-2 sm:py-3 text-white rounded-xl *:transition-all duration-300 *:transform hover:scale-105 active:scale-95 text-sm sm:text-base ${index === currentPlanet ? "bg-indigo-700/50" : "bg-slate-800/75 hover:bg-slate-900/75"
                                    }`}
                            >
                                {planet.name}
                            </button>
                        ))}
                    </div>
                </div>
                <button
                    onClick={nextPlanet}
                    className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 bg-slate-600/50 hover:bg-slate-700/50 text-white rounded-xl 
             transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
                >
                    {">"}
                </button>
            </div>
        </div>
        </div>

    );
};
