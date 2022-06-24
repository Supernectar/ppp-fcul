<template>
  <div ref="mapDiv" @click="abc"></div>
</template>

<script setup>
import { Loader } from '@googlemaps/js-api-loader';
const GOOGLE_MAPS_API_KEY = 'AIzaSyA-xeZY8mvozEc9HQ7_s7qh1M8dYw8uOgA';

const props = defineProps(['markersPositions']);

const markers = ref([]);
const routes = ref([]);

const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
const { coords } = useGeolocation();

const currPos = computed(() => ({
  lat: coords.value.latitude,
  lng: coords.value.longitude
}));

const otherPos = ref({ lat: 38.730292, lng: -9.16323 });

const mapDiv = ref(null);

onMounted(async () => {
  await loader.load();
  const map = new google.maps.Map(mapDiv.value, {
    center: currPos.value,
    zoom: 10,
    streetViewControl: false,
    mapTypeControl: false,
    scaleControl: false,
    overviewMapControl: true
    // como tirar os markers dos parques, shoppings, etc..
  });

  for (const position of props.markersPositions) {
    markers.value.push(
      new google.maps.Marker({
        map,
        position
      })
    );
  }

  // const directionsService = new google.maps.DirectionsService();
  // const directionsDisplay = new google.maps.DirectionsRenderer();
  // directionsDisplay.setMap(map);
  // const directionsService2 = new google.maps.DirectionsService();
  // const directionsDisplay2 = new google.maps.DirectionsRenderer();
  // directionsDisplay2.setMap(map);

  // directionsService.route(
  //   {
  //     origin: currPos.value,
  //     destination: otherPos.value,
  //     optimizeWaypoints: true,
  //     travelMode: 'DRIVING'
  //   },
  //   function (response, status) {
  //     if (status === 'OK') {
  //       directionsDisplay.setDirections(response);
  //     } else {
  //       window.alert('Problem in showing direction due to ' + status);
  //     }
  //   }
  // );

  // directionsService2.route(
  //   {
  //     origin: { lat: 38.729622, lng: -9.155945 },
  //     destination: otherPos.value,
  //     optimizeWaypoints: true,
  //     travelMode: 'DRIVING',
  //     styles: {
  //       featureType: 'poi',
  //       elementType: 'labels',
  //       stylers: [{ visibility: 'off' }]
  //     }
  //   },
  //   function (response, status) {
  //     if (status === 'OK') {
  //       directionsDisplay2.setDirections(response);
  //     } else {
  //       window.alert('Problem in showing direction due to ' + status);
  //     }
  //   }
  // );
});

// let clickListener = null;
// onMounted(async () => {
//   await loader.load();

//   clickListener = map.value.addListener(
//     'click',
//     ({ latLng: { lat, lng } }) => (otherPos.value = { lat: lat(), lng: lng() })
//   );

// });
function abc() {
  console.log('drawing');
}

// onUnmounted(() => {
//   if (clickListener) clickListener.remove();
// });
// let line = null;
// watch([map, currPos, otherPos], () => {
//   if (line) line.setMap(null);
//   if (map.value && otherPos.value != null)
//     line = new google.maps.Polyline({
//       path: [currPos.value, otherPos.value],
//       map: map.value
//     });
// });
// const haversineDistance = (pos1, pos2) => {
//   const R = 3958.8; // Radius of the Earth in miles
//   const rlat1 = pos1.lat * (Math.PI / 180); // Convert degrees to radians
//   const rlat2 = pos2.lat * (Math.PI / 180); // Convert degrees to radians
//   const difflat = rlat2 - rlat1; // Radian difference (latitudes)
//   const difflon = (pos2.lng - pos1.lng) * (Math.PI / 180); // Radian difference (longitudes)
//   const d =
//     2 *
//     R *
//     Math.asin(
//       Math.sqrt(
//         Math.sin(difflat / 2) * Math.sin(difflat / 2) +
//           Math.cos(rlat1) *
//             Math.cos(rlat2) *
//             Math.sin(difflon / 2) *
//             Math.sin(difflon / 2)
//       )
//     );
//   return d;
// };
// const distance = computed(() =>
//   otherPos.value === null ? 0 : haversineDistance(currPos.value, otherPos.value)
// );

// function drawPath(directionsService, directionsDisplay, start, end) {
//   directionsService.route(
//     {
//       origin: start,
//       destination: end,
//       optimizeWaypoints: true,
//       travelMode: 'DRIVING'
//     },
//     function (response, status) {
//       if (status === 'OK') {
//         directionsDisplay.setDirections(response);
//       } else {
//         window.alert('Problem in showing direction due to ' + status);
//       }
//     }
//   );
// }
</script>
