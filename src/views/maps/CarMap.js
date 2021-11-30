import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class Map extends React.Component {
  render = () => {
    return (
     

   <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Google Maps</CardHeader>
              <CardBody>

                   <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                 <GoogleMap
                    defaultZoom={16}
                    defaultCenter={{ lat: 18.559008, lng: -68.388881 }}
                    >
                    <Marker position={{
                        lat: 18.559024,
                        lng: -68.388886,
                    }} />
                </GoogleMap>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    )
   
  }
}

const MapComponent = withScriptjs(withGoogleMap(Map))

export default () => (
  <MapComponent
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px`, width: '500px' }} />}
  mapElement={<div style={{ height: `100%` }} />}
  />
)
