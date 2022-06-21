export function useGeolocation() {
  const coords = ref({ latitude: 38.7562078, longitude: -9.1583683 });
  const isSupported = 'navigator' in window && 'geolocation' in navigator;

  let watcher = null;
  onMounted(() => {
    if (isSupported)
      watcher = navigator.geolocation.watchPosition(
        (position) => (coords.value = position.coords)
      );
  });
  onUnmounted(() => {
    if (watcher) navigator.geolocation.clearWatch(watcher);
  });

  return { coords, isSupported };
}
