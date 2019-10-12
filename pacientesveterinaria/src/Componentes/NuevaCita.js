import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';


const stateInicial = {
    cita : {
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : ''
    },
    error : false
}

class NuevaCita extends Component {
    state = { ...stateInicial }

     //cuando el usuario escribe en los inputs
     handleChange = (e) => {
        console.log(e.target.name + ': ' + e.target.value );

        //colocar lo que el usuario escribe en el state

        this.setState({
            cita : {
                ...this.state.cita,
               [e.target.name] : e.target.value
            }
        })
     }
     handleSubmit = (e) =>{
         e.preventDefault();

        //extraer los valores del state
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;

    //validar que todos los campos esten llenos 
        if(mascota === ''|| propietario === '' || fecha === '' || hora === '' || sintomas === '')
        {
            this.setState({
                error: true
            });
            // detener la ejecucion
            return;
        }

        //generar objeto con los datos

        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //agregar la cita al state de APP
        this.props.crearNuevaCita(nuevaCita);

        //Colocar en el state el state Inicial
        this.setState({
            ...stateInicial
        });
     }

    render() { 
        //extraer valor del state 
        const {error} = this.state;
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
    
                    {/* validacion del formulario vacio presionar submit */}

                    {error ?
                         <div className="alert alert-danger mt-2 mb-5 text-center"> 
                         Todos los campos son obligatorios flaco
                         </div> : null}

                    {/* Formulario */}
                    <form
                        onSubmit = {this.handleSubmit}
                    >
                       {/*  //#region Fila FormGroup Mascota */}
                       <div className="form-group row"> 
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Nombre Mascota
                        </label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Nombre Mascota"
                            name="mascota"
                            onChange={this.handleChange}
                            value = {this.state.cita.mascota}
                            />
                        </div>
                       </div> 
                       {/* //#endregion */}

                       {/*  //#region Fila FormGroup  Duenio*/}
                       <div className="form-group row"> 
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Nombre del dueño
                        </label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                            type="text"
                            className="form-control"
                            placeholder="Nombre del Dueño"
                            name="propietario"
                            onChange={this.handleChange}
                            value = {this.state.cita.propietario}                        
                            />
                        </div>
                       </div> 
                       {/* //#endregion */}

                       {/*  //#region Fila FormGroup  Fecha y Hora*/}
                       <div className="form-group row">
                        {/* Fecha */} 
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Fecha
                        </label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                            type="date"
                            className="form-control"
                            name="fecha"
                            onChange={this.handleChange}
                            value = {this.state.cita.fecha}                   
                            />
                        </div>
                        {/* Hora */}
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Hora
                        </label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                            type="time"
                            className="form-control"
                            name="hora" 
                            onChange={this.handleChange}
                            value = {this.state.cita.hora}                       
                            />
                        </div>
                       </div> 
                       {/* //#endregion */}

                       {/*  //#region Fila FormGroup  Sintomas*/}
                        <div className="form-group row"> 
                        <label className="col-sm-4 col-lg-2 col-form-label">
                            Sintomas
                        </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los sintomas"
                                    onChange={this.handleChange}
                                    value = {this.state.cita.sintomas} 
                                ></textarea>
                            </div>
                        </div> 
                       {/* //#endregion */}

                       {/* Boton de Enviar */}
                        <input type="submit" className="py-3 mt-2 btn btn-success
                         btn-block" value="Agregar Nueva Cita" />

                    </form>
                </div>
            </div>
          );
    }
}
NuevaCita.protoType = {
    crearNuevaCita : PropTypes.func.isRequired
}

export default NuevaCita;