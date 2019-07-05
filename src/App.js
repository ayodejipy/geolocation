import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Title from './components/Title';
// import Form from './components/Form';
import Location from './components/Location';
import './App.css';


//const api_key = "AIzaSyDFfHmu2bKeJP5WuSrJqn72qa5RAOv8iYg";
class App extends Component {

  state = {
    showingInfoWndow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) => {
      e.preventDefault();

      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWndow: true
      })
  }

  onClose = (props) => {
    if (this.state.showingInfoWndow) {
      this.setState({
        activeMarker: null,
        showingInfoWndow: false
      })
    }
      
  }

  render() {

    return (
      <>
        
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-12 form-container">
                <div className="text-center">
                  <Title />
                  {/* <Form getLocation={this.getLocation} /> */}
                </div>
                
                <div className="col-md-12">
                  <Location centerAroundCurrentLocation google={this.props.google} >
                    <Marker onClick={this.onMarkerClick} name={'current location'} />
                      <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose} >
                        <div>
                          <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                      </InfoWindow>
                  </Location>
                </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyDFfHmu2bKeJP5WuSrJqn72qa5RAOv8iYg"
})(App);
