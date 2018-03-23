import React from 'react';
import { TextInput,View } from 'react-native';

import style from "./style";
import Map from "../components/map/map";
import FloatingInput from '../components/floating-input/input';
export default class Main extends React.Component {
  constructor() {
    super();
    navigator.geolocation.getCurrentPosition(async data => {
      const coords = data.coords;
      let res = await fetch(`http://192.168.0.185:3006/api/stops/distance?lat=${coords.latitude}&lon=${coords.longitude}&distance=10km`);
      console.dir(res.json())
    });
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