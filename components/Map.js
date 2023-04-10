// library
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ data }) => {
  const position = [51.510794, -0.08472];
  const coordinates = data.map((item) => {
    return {
      lat: item.lat,
      long: item.long,
      title: item.title,
    };
  });

  return (
    <div className="sticky top-28 my-5 rounded-lg overflow-hidden">
      <MapContainer
        className="h-[300px] md:h-[600px]"
        center={position}
        zoom={12}
        scrollWheelZoom={false}
        style={{ width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {coordinates?.map((coord, index) => (
          <Marker key={index} position={[coord.lat, coord.long]} className="animate-bounce" >
            <Popup>{coord.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
