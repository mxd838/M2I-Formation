let carte = document.querySelector('#map')

function initMap() {
    const ici = { lat: 50.63, lng: 3.06 }
    // variable map initialisée par l'api 
    map = new google.maps.Map(carte, {
        center: ici,
        zoom: 10,
    });
    const marker = new google.maps.Marker({
        position: ici,
        map: map,
    });
}

