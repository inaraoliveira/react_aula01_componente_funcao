import React, { useState } from 'react';

export const Contador = () => {
    const [valor, setValor] = useState(0);

    return(
        <div>
            <div>
                <h1>Contador</h1>
                <h2>Você clicou {valor} vezes!</h2>
            </div>

            <div>
                <button onClick={() => setValor(valor - 1)}>Decremento</button>

                <button onClick={() => setValor(valor + 1)}>Incremento</button>
            </div>
        </div>
    );
};