import React, { Component } from 'react';
import Botonera from "./components/Boton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biocenosis: [['P', 'P', 'G', 'H', 'H', 'R'],
      ['P', 'P', 'G', 'H', 'H', 'G', 'H'],
      ['P', 'G', 'M', 'H', 'H', 'G', 'H', 'H'],
      ['G', 'R', 'M', 'H', 'G', 'G'],
      ['R', 'R', 'H', 'H', 'G', 'P']],

      humans: 0,

      colores: [{ animal: "P", color: "primary" },
      { animal: "G", color: "info" },
      { animal: "R", color: "success" },
      { animal: "m", color: "danger" },
      { animal: "M", color: "warning" },
      { animal: "H", color: "secondary" }]
    };
  }

  componentWillMount() {

    this.buscarHumanos()
  }

  clicar(coordX, coordY) {

    let nuevoMapa = this.state.biocenosis
    let bienClick = true;

    switch (nuevoMapa[coordX][coordY]) {
      case 'M':
        nuevoMapa[coordX][coordY] = "m"
        break;
      case 'H':
        nuevoMapa[coordX][coordY] = "_"
        break;
      default:
        bienClick = false
        break;
    }

    this.buscarHumanos()

    this.setState({ biocenosis: nuevoMapa })

    if (bienClick) {
      this.pandemic(coordX, coordY, nuevoMapa)
    }

  }

  pandemic(x, y, mapa) {

    if (this.arriba(x - 1, y, mapa)) {

      this.clicar(x - 1, y, mapa)
    }

    if (this.abajo(x + 1, y, mapa)) {

      this.clicar(x + 1, y, mapa)
    }

    if (this.izquierda(x, y - 1, mapa)) {

      this.clicar(x, y - 1, mapa)
    }

    if (this.derecha(x, y + 1, mapa)) {

      this.clicar(x, y + 1, mapa)
    }

  }

  arriba(x, y, mapa) {
    if (x >= 0) {
      if (mapa[x][y] == 'H' || mapa[x][y] == 'M') {
        return true;
      }
    }
    return false;
  }
  abajo(x, y, mapa) {
    if (x < mapa.length) {
      if (mapa[x][y] == 'H' || mapa[x][y] == 'M') {
        return true;
      }
    }
    return false;
  }
  izquierda(x, y, mapa) {
    if (y >= 0) {
      if (mapa[x][y] == 'H' || mapa[x][y] == 'M') {
        return true;
      }
    }
    return false;
  }
  derecha(x, y, mapa) {
    if (y < mapa[x].length) {
      if (mapa[x][y] == 'H' || mapa[x][y] == 'M') {
        return true;
      }
    }
    return false;
  }

  buscarHumanos() {

    let biocenosis = this.state.biocenosis
    let humanos = 0

    biocenosis.map(linea => humanos += linea.filter(elemento => elemento == 'H').length)

    this.setState({ humans: humanos })
  }


  // Completa con los métodos necesarios
  render() {
    return (
      <React.Fragment>

        <h1>ANGRYBATS</h1>
        <h2>{this.state.humans} humans left</h2>

        <Botonera mapa={this.state.biocenosis} colores={this.state.colores} accion={(x, y) => this.clicar(x, y)}></Botonera>

      </React.Fragment>
    );
  }
}
export default App;