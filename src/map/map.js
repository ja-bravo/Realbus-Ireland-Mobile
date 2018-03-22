import React from 'react';
import { StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
Mapbox.setAccessToken('pk.eyJ1IjoiYm9vbmFnZW5jeWlybCIsImEiOiJjamE3emdlZ3YwMXIxMnhxbWRqNGRxY3huIn0.RnmocFzP2hqvfi9nnTgi0A');

export default class Map extends React.Component {
  constructor() {
    super();
  }
  
  async onReady() {
    this.map.fitBounds([-9.093649,53.282784],[-9.045685,53.270138],0,5000);
  }

  render() {
    return (
      <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Dark}
            zoomLevel={15}
            centerCoordinate={[11.256, 43.770]}
            style={style.container}
            logoEnabled={false}
            ref={ref => this.map = ref}
            onDidFinishLoadingMap={() => this.onReady()}>
        </Mapbox.MapView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1
  }
});