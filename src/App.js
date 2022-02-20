import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dummy_Component from "dummy-component";
import {Counter} from './views/Counter'
import { ProductList } from './views/products/ProductList';
import { ProductAdd } from './views/products/ProductAdd';

function App() {
  return (
    <div>
  <Counter></Counter>
  <hr></hr>
  <ProductList></ProductList>
  <hr></hr>
  <ProductAdd></ProductAdd>
  </div>
  );
}

export default App;
