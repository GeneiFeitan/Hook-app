import React, {useEffect,useState} from 'react';

export const Message = (props) => {

    const [state, setState] = useState({x:0,y:0});

    const {x,y}=state

    useEffect(() => {

        const mouseMove=(e)=>{
            const coors={x:e.x,y:e.y};

            setState(coors)

            console.log(coors)
        }
        window.addEventListener('mousemove',mouseMove);
        console.log('Componente montado')
        return () => {
            console.log('componente desmontado')
            window.removeEventListener('mousemove',mouseMove);
        };
    }, []);

    return(
        <>
        <h3>Eres genial</h3>
            <p>x:{x} y:{y}</p>
        </>
    )
}