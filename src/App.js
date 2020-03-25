import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends Component {

  
  render() {
    const fecha =  new Date().getFullYear();

    return (
      <div className="App">
       <Header
       titulo="Tienda virtual"
       />
       <Footer fecha={fecha} />
      </div>
    );
  }
}

export default App;
