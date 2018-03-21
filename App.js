import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import './ReactotronConfig';
import Mapbox from '@mapbox/react-native-mapbox-gl';
Mapbox.setAccessToken('pk.eyJ1IjoiYm9vbmFnZW5jeWlybCIsImEiOiJjamE3emdlZ3YwMXIxMnhxbWRqNGRxY3huIn0.RnmocFzP2hqvfi9nnTgi0A');

export default class App extends React.Component {
  constructor() {
    super();
  }
  
  async onReady() {
    this.map.fitBounds([-9.093649,53.282784],[-9.045685,53.270138],0,50000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Dark}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}
            logoEnabled={false}
            ref={ref => this.map = ref}
            onDidFinishLoadingMap={() => this.onReady()}>
            
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
