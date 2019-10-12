import React from 'react'; 
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({citas, eliminarCita}) => {

    //imprimir un mensaje en base de si hay citas
    const mensaje = Object.keys(citas).length === 0 ? 'Agrega una cita': 'Administra las citas';
    return (
    <div className = "card mt-2 py-5">
        <div className = "card-body">
            <h2 className="card-tittle text-center">
            {mensaje}
            </h2>
            <div className ="lista-citas">
                {citas.map(cita => (
                    <Cita
                        key ={cita.id}
                        cita ={cita}
                        eliminarCita ={eliminarCita}
                    />
                ))}
            </div>
        </div>
    </div>
    );
}
 
ListaCitas.prototype = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
}     
export default ListaCitas;