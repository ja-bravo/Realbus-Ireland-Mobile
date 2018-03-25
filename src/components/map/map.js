import React from 'react';
import { StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import axios from 'axios';
Mapbox.setAccessToken('pk.eyJ1IjoiYm9vbmFnZW5jeWlybCIsImEiOiJjamE3emdlZ3YwMXIxMnhxbWRqNGRxY3huIn0.RnmocFzP2hqvfi9nnTgi0A');

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  
  async onReady() {
    const [ne, sw] = await this.map.getVisibleBounds();
    let res = await axios.get(`http://192.168.0.185:3006/api/stops/bounds`,
    {
      params: {
        topLat: ne[1],
        topLon: ne[0],
        botLat: sw[1],
        botLon: sw[0]
      }
    });
    
    const stops = res.data;
    
    this.setState({items: stops.map(s
    => (
      <MapboxGL.PointAnnotation
          key={s.id}
          id={s.id}
          title={s.fullName}
          coordinate={s.location}>

        </MapboxGL.PointAnnotation>
    ))});
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