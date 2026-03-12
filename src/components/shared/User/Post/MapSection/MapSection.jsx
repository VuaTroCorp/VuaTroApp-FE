import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const userIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// ===== MAP BAY TỚI TỈNH quận huyện (KHÔNG HARDCODE) =====
function MapFly({ province, district, ward }) {
  const map = useMap();

  useEffect(() => {
    const location = ward || district || province;

    if (!location) return;

    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);

          map.flyTo([lat, lon], 15);
        }
      });
  }, [province, district, ward, map]);

  return null;
}

// ===== CLICK MAP =====
function MapClickHandler({ onSelect }) {
  useMapEvents({
    click(e) {
      onSelect(e.latlng);
    },
  });
  return null;
}

function GOOGLE({ onChange, province, district, ward }) {
  const [userPos, setUserPos] = useState(null);
  const [selectedPos, setSelectedPos] = useState(null);

  // ===== LẤY GPS =====
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        // fallback Nha Trang
        setUserPos({
          lat: 12.2585,
          lng: 109.0526,
        });
      },
    );
  }, []);

  // ===== CLICK MAP =====
  const handleSelect = async (latlng) => {
    setSelectedPos(latlng);

    console.log("Lat:", latlng.lat);
    console.log("Lng:", latlng.lng);

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}`,
      );

      const data = await res.json();
      const address = data.address || {};

      if (onChange) {
        onChange({
          lat: latlng.lat,
          lng: latlng.lng,
          province: address.state || "",
          district: address.city || address.town || "",
          ward: address.suburb || address.village || "",
          street: address.road || "",
          fullAddress: data.display_name
            .replace(/\b\d{5}\b,?\s*/g, "")
            .replace(", Việt Nam", ""),
        });
      }
    } catch (err) {
      console.error("Lỗi reverse geocode:", err);
    }
  };

  if (!userPos) {
    return <div>Đang lấy vị trí...</div>;
  }

  return (
    <MapContainer
      center={[userPos.lat, userPos.lng]}
      zoom={16}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* bay tới tỉnh */}
      <MapFly province={province} district={district} ward={ward} />

      {selectedPos && (
        <Marker position={[selectedPos.lat, selectedPos.lng]} icon={userIcon}>
          <Popup>Vị trí bạn chọn</Popup>
        </Marker>
      )}

      <MapClickHandler onSelect={handleSelect} />
    </MapContainer>
  );
}

export default GOOGLE;
