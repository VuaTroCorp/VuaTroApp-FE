import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const userIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Component bắt sự kiện click map
function MapClickHandler({ onSelect }) {
    useMapEvents({
        click(e) {
            onSelect(e.latlng);
        },
    });
    return null;
}

function GOOGLE({ onChange }) {
    const mapRef = useRef(null);
    const [userPos, setUserPos] = useState(null);
    const [selectedPos, setSelectedPos] = useState(null);

    // 📍 Lấy GPS người dùng
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setUserPos({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            },
            () => alert("Không lấy được vị trí GPS")
        );
    }, []);

    const handleSelect = (latlng) => {
        setSelectedPos(latlng);

        // ⬅️ Trả tọa độ về component cha (InforBase)
        if (onChange) {
            onChange({
                lat: latlng.lat,
                lng: latlng.lng,
            });
        }
    };

    if (!userPos) {
        return (
            <div className="map-placeholder">
                Đang lấy vị trí GPS...
            </div>
        );
    }

    return (
        <div className="map-placeholder">
            <MapContainer
                center={[userPos.lat, userPos.lng]}
                zoom={16}
                style={{ height: "100%", width: "100%" }}
                whenCreated={(map) => (mapRef.current = map)}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="© OpenStreetMap"
                />

                {/* Marker vị trí hiện tại */}
                <Marker position={[userPos.lat, userPos.lng]} icon={userIcon}>
                    <Popup>Vị trí của bạn</Popup>
                </Marker>



                <MapClickHandler onSelect={handleSelect} />
            </MapContainer>
        </div>
    );
}

export default GOOGLE;
