import React from 'react';
import { StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
Mapbox.setAccessToken('pk.eyJ1IjoiYm9vbmFnZW5jeWlybCIsImEiOiJjamE3emdlZ3YwMXIxMnhxbWRqNGRxY3huIn0.RnmocFzP2hqvfi9nnTgi0A');

export default class Map extends React.Component {
  constructor() {
    super();
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      this.setState({userPosition: coords});
    });
  }
  
  async onReady() {
    //this.map.flyTo([this.state.userPosition.longitude,this.state.userPosition.latitude]);
  }

  render() {
    return (
      <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Dark}
            zoomLevel={15}
            centerCoordinate={[-9.045685,53.270138]}
            style={style.container}
            logoEnabled={false}
            showUserLocation
            userTrackingMode={Mapbox.UserTrackingModes.Follow}
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