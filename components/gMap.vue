<template>
  <div @click="abc" ref="mapDiv">
    <button class="bg-red-300 h-80 w-80">oioi</button>
    <!-- <div class="d-flex text-center">
     <div class="m-auto">
        <h4>Your Position</h4>
        Latitude: {{ currPos.lat.toFixed(2) }}, Longitude:
        {{ currPos.lng.toFixed(2) }}
      </div>
      <div class="m-auto">
        <h4>Distance</h4>
        {{ distance.toFixed(2) }} miles
      </div>
      <div class="m-auto">
        <h4>Clicked Position</h4>
        <span v-if="otherPos">
          Latitude: {{ otherPos.lat.toFixed(2) }}, Longitude:
          {{ otherPos.lng.toFixed(2) }}
        </span>
        <span v-else>Click the map to select a position</span>
      </div>
    </div> -->
    <!-- <div ref="mapDiv" /> -->
  </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';
const GOOGLE_MAPS_API_KEY = 'AIzaSyA-xeZY8mvozEc9HQ7_s7qh1M8dYw8uOgA';
export default {
  name: 'App',
  setup() {
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }));
    const otherPos = ref(null);
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    const map = ref(null);
    let clickListener = null;
    onMounted(async () => {
      await loader.load();
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 16
      });

      clickListener = map.value.addListener(
        'click',
        ({ latLng: { lat, lng } }) =>
          (otherPos.value = { lat: lat(), lng: lng() })
      );
    });
    onUnmounted(() => {
      if (clickListener) clickListener.remove();
    });
    let line = null;
    watch([map, currPos, otherPos], () => {
      if (line) line.setMap(null);
      if (map.value && otherPos.value != null)
        line = new google.maps.Polyline({
          path: [currPos.value, otherPos.value],
          map: map.value
        });
    });
    const haversineDistance = (pos1, pos2) => {
      const R = 3958.8; // Radius of the Earth in miles
      const rlat1 = pos1.lat * (Math.PI / 180); // Convert degrees to radians
      const rlat2 = pos2.lat * (Math.PI / 180); // Convert degrees to radians
      const difflat = rlat2 - rlat1; // Radian difference (latitudes)
      const difflon = (pos2.lng - pos1.lng) * (Math.PI / 180); // Radian difference (longitudes)
      const d =
        2 *
        R *
        Math.asin(
          Math.sqrt(
            Math.sin(difflat / 2) * Math.sin(difflat / 2) +
              Math.cos(rlat1) *
                Math.cos(rlat2) *
                Math.sin(difflon / 2) *
                Math.sin(difflon / 2)
          )
        );
      return d;
    };
    const distance = computed(() =>
      otherPos.value === null
        ? 0
        : haversineDistance(currPos.value, otherPos.value)
    );

    function abc() {
      console.log('drawing');
      const directionsService = new google.maps.DirectionsService();
      const directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setMap(map);
      const start = 'New Delhi';
      const end = 'Gurgaon';
      drawPath(directionsService, directionsDisplay, start, end);
    }

    function drawPath(directionsService, directionsDisplay, start, end) {
      directionsService.route(
        {
          origin: start,
          destination: end,
          optimizeWaypoints: true,
          travelMode: 'DRIVING'
        },
        function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Problem in showing direction due to ' + status);
          }
        }
      );
    }

    return { currPos, otherPos, distance, mapDiv };
  }
};
</script>
