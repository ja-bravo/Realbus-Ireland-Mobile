import React from 'react';
import { TextInput,View } from 'react-native';

import style from "./style";
import Map from "../map/map";
import FloatingInput from '../floating-input/input';
export default class Main extends React.Component {
  constructor() {
    super();
  }
  
  async onReady() {
    this.map.fitBounds([-9.093649,53.282784],[-9.045685,53.270138],0,5000);
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