import React, { Component } from 'react';

class NuevaCita extends Component {
    state = {  }
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