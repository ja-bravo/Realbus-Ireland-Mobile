import React from 'react';
import { StyleSheet } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import axios from 'axios';
Mapbox.setAccessToken('pk.eyJ1IjoiYm9vbmFnZW5jeWlybCIsImEiOiJjamE3emdlZ3YwMXIxMnhxbWRqNGRxY3huIn0.RnmocFzP2hqvfi9nnTgi0A');
import icon from '../../assets/place.png';

const styles = Mapbox.StyleSheet.create({
  icon: {
    iconImage: icon,
    iconAllowOverlap: false,
    iconSize: 0.5,
  },
});

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      featureCollection: Mapbox.geoUtils.makeFeatureCollection(),
    };
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
    
    const stops = res.data.map(s =>  {return {...s, geometry: {
      type: "Point",
      coordinates: [Number.parseFloat(s.location.lon), Number.parseFloat(s.location.lat)]
    }}});

    let collection = Mapbox.geoUtils.makeFeatureCollection();
    stops.forEach(stop => {
      collection = Mapbox.geoUtils
                   .addToFeatureCollection(this.state.featureCollection,
                                           Mapbox.geoUtils.makeFeature(stop.geometry))
    });
   
    this.setState({featureCollection: collection});

    setTimeout(() => {
      console.dir(this.map)
    },2000)
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
            <Mapbox.ShapeSource
              id="symbolLocationSource"
              shape={this.state.featureCollection}>
              <Mapbox.SymbolLayer
                id="symbolLocationSymbols"
                style={styles.icon}
              />
            </Mapbox.ShapeSource>

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