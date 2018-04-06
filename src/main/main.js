import React from 'react';
import { TextInput,View } from 'react-native';

import style from "./style";
import Map from "../components/map/map";
import FloatingInput from '../components/floating-input/input';
export default class Main extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <View style={style.container}>
        <FloatingInput/>
           <Map/>   
      </View>
    );
  }
}