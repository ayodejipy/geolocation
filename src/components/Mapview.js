import React, { Component } from 'react';

class Mapview extends Component {

    // state = {
    //     showingInfoWndow: false,
    //     activeMarker: {},
    //     selectedPlace: {}
    // }

    // onMarkerClick = (props, marker, e) => {
    //     this.setState({
    //         selectedPlace: props,
    //         activeMarker: marker,
    //         showingInfoWndow: true
    //     })
    // }

    // onClose = (props) => {
    //     if (this.state.showingInfoWndow) {
    //         this.setState({
    //             activeMarker: null,
    //             showingInfoWndow: false
    //         })
    //     }
        
    // }

    render() {
        return (
            <>
                {/* <Location centerAroundCurrentLocation google={this.props.google} >
                    <Marker onClick={this.onMarkerClick} name={'current location'} />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose} >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </Location> */}
            </>
        )
    }
}

// const mapStyle = {
//     width: '100%',
//     height: '100%'
// }


export default Mapview