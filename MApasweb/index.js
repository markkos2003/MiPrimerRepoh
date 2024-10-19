//alert("bienvenidos a mi web")
var map=L.map("contenedor").setView([4.65,-74.12],11)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{}).addTo(map)
var ubica=L.marker([-11.98117612377018, -77.09708259004972]).addTo(map)