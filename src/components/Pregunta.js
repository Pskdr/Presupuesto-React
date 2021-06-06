import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = () => {
    //definir el state
    const[ cantidad, guardarCantidad ] = useState(0);
    const [error, guardarError] = useState(false);

    //funcion que lee el presupuesto

    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value, 10))
    }
    // Submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        //validar
        if(cantidad < 1){
            guardarError(true);
            return;
        }

        // si se pasa la validación
        guardarError(false);
    }


    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje='el presupuesto es incorrecto'/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;