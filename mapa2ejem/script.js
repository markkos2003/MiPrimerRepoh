const map = L.map('map').setView([40.73061, -73.935242], 13); // Coordenadas de ejemplo

// Cargar el mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Marcador del camión de basura
const trashTruckLocation = {
    lat: 40.73061,
    lng: -73.935242
};
const trashTruckMarker = L.marker(trashTruckLocation).addTo(map)
    .bindPopup('Camión de Basura')
    .openPopup();

// Obtener la ubicación del usuario
function onLocationFound(e) {
    const userLocation = e.latitude;
    const userLongitude = e.longitude;

    L.marker([userLocation, userLongitude]).addTo(map)
        .bindPopup('Tu ubicación')
        .openPopup();

    // Verificar proximidad
    checkProximity(userLocation, userLongitude);
}

// Manejar errores de geolocalización
function onLocationError(e) {
    alert(e.message);
}

// Verificar la proximidad del camión de basura al usuario
function checkProximity(userLat, userLng) {
    const distance = map.distance([userLat, userLng], trashTruckLocation);
    
    if (distance < 200) { // Distancia en metros
        document.getElementById('alert').classList.remove('hidden');
    } else {
        document.getElementById('alert').classList.add('hidden');
    }
}

// Obtener la ubicación del usuario
map.locate({setView: true, maxZoom: 16});
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// Simulación de movimiento del camión de basura (actualizar posición)
function simulateTruckMovement() {
    const randomOffset = (Math.random() * 0.01 - 0.005); // Movimiento aleatorio
    trashTruckLocation.lat += randomOffset;
    trashTruckLocation.lng += randomOffset;

    trashTruckMarker.setLatLng(trashTruckLocation);
    checkProximity(userLocation, userLongitude); // Verificar proximidad
}

// Actualizar la posición del camión cada 5 segundos
setInterval(simulateTruckMovement, 5000);