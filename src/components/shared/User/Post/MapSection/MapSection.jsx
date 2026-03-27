import "./MapSection.scss"; // thêm dòng này

import { useMemo } from "react";

const GoogleMap1 = ({ address }) => {

  const googleEmbedUrl = useMemo(() => {
    if (!address) return null;
    return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  }, [address]);

  const googleMapsUrl = useMemo(() => {
    if (!address) return null;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }, [address]);

  return (
    <div className="map-wrapper">

      <div className="map-placeholder">
        {googleEmbedUrl ? (
          <iframe
            title="Google Maps"
            src={googleEmbedUrl}
            className="map-iframe"
            loading="lazy"
          />
        ) : (
          <div className="no-map">Chưa có địa chỉ</div>
        )}
      </div>

      {googleMapsUrl && (
        <a href={googleMapsUrl} target="_blank" rel="noreferrer">
          Mở trên Google Maps
        </a>
      )}

    </div>
  );
};

export default GoogleMap1;