import './App.css';
import React, { Component } from 'react'


class ReactButton extends Component{
  handleClick(event){

    //Deprecated documentation: https://legacy.reactjs.org/docs/events.html

    //Evento Sintetico
    console.log(event);

    //Evento Nativo del navegador
    console.log(event.nativeEvent);

  }
  
  render(){
    return <button onClick={ this.handleClick }> Button Text </button>
  }
}

class PointerCoordsVisualizer extends Component {
  constructor(){
    super();
    this.state = { mouseX: 0, mouseY:0 }
    //Enlazar evento
    //this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  //Enlazar evento
  handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    this.setState({
      mouseX: clientX,
      mouseY: clientY
    })
  }

  render(){
    return <div
              onMouseMove={ this.handleMouseMove } 
              style={{ border: '1px solid #000', marginTop: 10, padding: 10 }}>
              
              <p> {this.state.mouseX }, {this.state.mouseY }  </p>  
            
            </div>
  }
}

function App() {
  return (
    <div className="App">
      <ReactButton />
      <PointerCoordsVisualizer />
    </div>
  );
}

export default App;
