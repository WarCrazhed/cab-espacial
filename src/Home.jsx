import { Lottie } from "./Lottie"

export const Home = ({ setShowSpaceCabin }) => {
    return (
        <div className="container text-white mx-auto text-center bg-black/50 py-20 px-4 rounded-tr-full rounded-bl-full">
            <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-purple-400">
                Cabina Espacial
            </h1>
            <Lottie />
            <div className="space-y-4 text-2xl font-medium mb-10">
                <h2>
                    Camila Villa
                </h2>
                <h2>
                    Ángel Adrián
                </h2>
                <h2>
                    Michelle Simancas
                </h2>
            </div>
            <button
                className='px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full font-bold text-2xl cursor-pointer'
                onClick={() => setShowSpaceCabin(true)}
            >
                Comenzar
            </button>
        </div>
    )
}
