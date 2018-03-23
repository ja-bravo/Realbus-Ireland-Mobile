import React from 'react';
import { TextInput,View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import style from "./style";

export default class FloatingInput extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <View style={style.container}>
       <View style={style.inner} z>
           <Icon name="search" backgroundColor="transparent" style={style.icon}/>
            <TextInput 
                style={style.input}
                underlineColorAndroid="transparent"
                placeholder="Where are you going?"
                placeholderTextColor="#BFACC8"
                />
       </View>
      </View>
    );
  }
}