const map = L.map('map').setView([-11.979986, -77.086338], 
    13); // Coordenadas
//iniciales (Ej. Nueva York)
//poner la ubicacion de la muni

// Cargar el mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
}).addTo(map);

// Marcador para el camión
const truckMarker = L.marker([-11.979986, -77.086338]).addTo(map)
.bindPopup('Camión en posición')
.openPopup();

// Función para actualizar la ubicación del camión
function updateTruckLocation(lat, lon) {
truckMarker.setLatLng([lat, lon]);
map.setView([lat, lon]);
}

// Simulación de actualización de ubicación del camión
setInterval(() => {
// Generar nuevas coordenadas aleatorias para el camión (puedes reemplazar esto con datos reales)
const newLat = -11.979986 + (Math.random() - 0.5) * 0.01;
const newLon = -77.086338 + (Math.random() - 0.5) * 0.01;
updateTruckLocation(newLat, newLon);
}, 3000); // Actualiza cada 3 segundos