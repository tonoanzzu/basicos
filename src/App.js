import React, {Fragment, Component, useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";

  function App(){

     const [productos, guardarProductos] = useState([
      {id: 1, nombre: 'Camisa ReactJS', precio:50},
      {id: 2, nombre: 'Camisa VueJS', precio:40},
      {id: 3, nombre: 'Camisa NodeJS', precio:30},
      {id: 4, nombre: 'Camisa Angular', precio:20}
    ]); 


    const [carrito, agregarProducto] = useState([])

    const fecha =  new Date().getFullYear();

    return (
      <Fragment>

      
       <Header
       titulo="Tienda virtual"
       />
       <h1>Lista de Productos</h1>
       {
         productos.map(producto =>(
          <Producto
            key={producto.id}
            producto= {producto}
            carrito={carrito}
            productos= {productos}
            agregarProducto = {agregarProducto}
          />
         ))
       }
       <Footer fecha={fecha} />
       </Fragment>
    );

  }


export default App;
