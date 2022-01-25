import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Botonera extends Component {
  

    render() {

        let biocenosis = this.props.mapa
        let colores = this.props.colores
        let listaBotones = [];

        for (let i = 0; i < biocenosis.length; i++) {

            for (let j = 0; j < biocenosis[i].length; j++) {

                let colorBoton = colores.find(objetoColor => objetoColor.animal == biocenosis[i][j]) !== undefined ? colores.find(objetoColor => objetoColor.animal == biocenosis[i][j]).color : "link"

                listaBotones.push(<Button color={colorBoton} onClick={() => this.props.accion(i, j)} >{biocenosis[i][j]}</Button>)
            }

            listaBotones.push(<br />)
        }


        return (
            <React.Fragment>
                {listaBotones}
            </React.Fragment>
        )
    }
}

export default Botonera;