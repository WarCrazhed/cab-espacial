import { useState } from 'react';
import { Home } from './Home';
import { SpaceCabin } from './SpaceCabin';

function App() {
    const [showSpaceCabin, setShowSpaceCabin] = useState(false);

    return (
        <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-900 overflow-y-auto">
            <div className="container bg-black/10 md:bg-transparent flex-grow flex flex-col">
                {!showSpaceCabin ? (
                    <Home setShowSpaceCabin={setShowSpaceCabin} />
                ) : (
                    <SpaceCabin />
                )}
            </div>
        </div>
    );
}

export default App;