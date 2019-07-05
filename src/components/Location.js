import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export class Location extends Component {
    static defaultProps = {
        zoom: 14,
        initialPos: {
            lat: -1.2884,
            lng: 36.8233
        },
        centerAroundCurrentLocation: false,
        visible: true
    }
    
    constructor(props) {
        super(props);

        const { lat, lng } = this.props.initialPos;

        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }

    

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recentMap()
        }
    }

    recentMap = () => {
        const map = this.map;
        const current = this.state.currentLocation;

        const google = this.props.google;
        const maps = google.maps;

        
        console.log(map); 
        console.log(google)
        console.log(maps);
        

        if(map) {
            let center = new maps.LatLng(current.lat, current.lng);
            map.panTo(center);
        }
    }

    //Handle situation whereby map has already loaded
    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition( (pos) => {
                   
                    this.setState({
                        currentLocation: {
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude
                        }
                    });
                });
            }
        }

        //this function loads the map
        this.loadMap();
    }

    //defining the loadMap func
    loadMap = () => {
        if (this.props && this.props.google) {
            //checks if google is available
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;

            //reference the actual DOM element
            const node = ReactDOM.findDOMNode(mapRef)

            let { zoom } = this.props;
            const { lat, lng } = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign( {}, { center: center, zoom: zoom} );
            
            //map.Map() instantiates the map 
            this.map = new maps.Map(node, mapConfig);
        }
    }
    
    renderChildren() {
        const { children } = this.props;

        if(!children) return;

        return React.Children.map(children, c => {
            if(!c) return;
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.currentLocation
            });
        });
    }

    render() {
        const style = Object.assign({}, mapStyle.map);
        return (
            <div>
                <div style={style} ref="map">
                    Loading this shiiit...
                </div>
                {this.renderChildren()}
            </div>
        )
    }
}

const mapStyle = {
    position: 'relatve',
    width: '100%',
    height: '100%'
}



export default Location;
