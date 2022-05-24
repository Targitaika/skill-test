import React from 'react';
import {
  MapContainer, TileLayer, Polyline,
} from 'react-leaflet';
import './Map.css';
import { useSelector } from 'react-redux';

export default function Map() {
  const pos2 = [55.75, 37.6];
  const store = useSelector((s) => s);
  const positionFrom = [store.from.x, store.from.y];
  const positionTo = [store.to.x, store.to.y];
  const polyLinePosition = [
    positionFrom[0] ? positionFrom : [55.75, 37.6],
    positionTo[0] ? positionTo : [55.75, 37.6],
  ];
  const polylineColor = { color: 'black' };

  return (
    <div className="map-container">
      <MapContainer
        center={positionFrom[1] ? positionFrom : pos2}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline pathOptions={polylineColor} positions={polyLinePosition} />
      </MapContainer>
    </div>
  );
}
