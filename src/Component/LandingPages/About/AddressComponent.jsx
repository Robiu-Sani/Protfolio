import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet styles

export default function AddressComponent() {
  // Coordinates for the addresses (you can replace these with more accurate ones)
  const presentAddressCoords = [23.4589, 91.1809]; // Example for Comilla
  const permanentAddressCoords = [24.4371, 90.951]; // Example for Kishoreganj

  return (
    <div className="w-full animationTimeline grid grid-cols-1 sm:grid-cols-2 p-6 space-y-8">
      {/* Present Address Card */}
      <div className="bg-white animationTimeline shadow-lg rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <FaHome size={30} className="text-blue-600" />
          <div>
            <h3 className="text-xl font-bold">Present Address</h3>
            <p>
              Insaf Garden City, Dawlotpour, Kotbariroad, Adorsho Shodor,
              Comilla, Chittagong, Bangladesh
            </p>
          </div>
        </div>
        {/* Map Section for Present Address */}
        <div className="mt-4 h-64">
          <MapContainer
            center={presentAddressCoords}
            zoom={12}
            className="h-full w-full rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={presentAddressCoords}>
              <Popup>Present Address: Comilla</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Permanent Address Card */}
      <div className="bg-white animationTimeline shadow-lg rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt size={30} className="text-green-600" />
          <div>
            <h3 className="text-xl font-bold">Permanent Address</h3>
            <p>Hazibari, Kolatoli, Korimganj, Kishoreganj, Dhaka, Bangladesh</p>
          </div>
        </div>
        {/* Map Section for Permanent Address */}
        <div className="mt-4 h-64">
          <MapContainer
            center={permanentAddressCoords}
            zoom={12}
            className="h-full w-full rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={permanentAddressCoords}>
              <Popup>Permanent Address: Kishoreganj</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
