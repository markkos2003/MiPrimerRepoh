// Inicializar el mapa centrado en una ubicación inicial
const map = L.map('map').setView([0, 0], 2); // Vista global

// Cargar el mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Marcador para la ubicación del dispositivo
const deviceMarker = L.marker([0, 0]).addTo(map)
    .bindPopup('Dispositivo en posición')
    .openPopup();

// Función para actualizar la ubicación del dispositivo
function updateDeviceLocation(lat, lon) {
    deviceMarker.setLatLng([lat, lon]);
    map.setView([lat, lon]);
}

// Comprobar la geolocalización
if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        updateDeviceLocation(lat, lon);
    }, (error) => {
        console.error("Error en la geolocalización: ", error);
    });
} else {
    console.log("La geolocalización no es soportada por este navegador.");
}