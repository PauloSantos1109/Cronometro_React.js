import React, {Component} from 'react';
import './style.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      textBtn: 'INICIAR'
    }
    this.time = null;
    this.cont = this.cont.bind(this);
    this.clear = this.clear.bind(this);
  }


  cont(){
    let state =this.state;
    if (this.time !== null) {
      clearInterval(this.time);
      this.time = null;
      state.textBtn = 'CONTINUAR';
    }else{
      this.time = setInterval(() =>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.textBtn = 'PAUSAR';
    }
    this.setState(state);
  }

  clear(){
    let state = this.state;

    if (this.time !== null) {
      clearInterval(this.time);
      this.time = null;
    }
    state.numero = 0;
    state.textBtn = "INICIAR";
    this.setState(state)
  }

  render(){
    return(
      <div className='container'>
      <img src={require('./assets/cronometro.png')}className='img'/>
      <a className='time'>{this.state.numero.toFixed(1)}</a>
      <div className='btn'> 
        <a className='botao' onClick={this.cont}>{this.state.textBtn}</a>
        <a className='botao' onClick={this.clear}>LIMPAR</a>
      </div>
      </div>
    )
  }
}

export default App;