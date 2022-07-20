function getLocation() {
    if (navigator.geolocation) { // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(function(position) {
        return (position.coords.latitude + ' ' + position.coords.longitude);
      }, function(error) {
        console.log(error);
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      });
    } else {
      alert('GPS를 지원하지 않습니다');
    }
}

let myLocation = getLocation();

console.log(myLocation);
