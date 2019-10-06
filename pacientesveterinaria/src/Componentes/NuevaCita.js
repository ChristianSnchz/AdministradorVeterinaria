import React, { Component } from 'react';

class NuevaCita extends Component {
    state = { 
        cita : {
            mascota : '',
            propietario : '',
            fecha : '',
            hora : '',
            sintomas : ''
        }
     }

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
    render() { 
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    {/* Formulario */}
                    <form>
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
 
export default NuevaCita;