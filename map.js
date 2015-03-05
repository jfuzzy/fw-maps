L.mapbox.accessToken = 'pk.eyJ1IjoiamZ1enp5IiwiYSI6ImxCMkF5NVUifQ.Zg6RDpdbQ-7WGd2C_niK7g';

var map = L.mapbox.map('map', 'jfuzzy.jc52jpo4', {
    minZoom: 3,
    maxZoom: 12,
    })
  .setView([33.5, -30.0], 3);

var layers = document.getElementById('menu-ui');

addLayer(L.mapbox.featureLayer('fw-shelby.jb9il5be'), 'Active Projects', 2);
addLayer(L.mapbox.featureLayer('fw-shelby.jba8bnf6'), 'Past Projects', 3);

function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map);

    // Create a simple layer switcher that
    // toggles layers on and off.
    var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.innerHTML = name;

    link.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (map.hasLayer(layer)) {
            map.removeLayer(layer);
            this.className = '';
        } else {
            map.addLayer(layer);
            this.className = 'active';
        }
    };

    layers.appendChild(link);
}