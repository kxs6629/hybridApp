/**
 * Get the current latitude of the user
 * using their device position
 */
function getLat(){
    var options={
        enableHighAccuracy: true,
        maximumAge:360000
    }
    var curPos = navigator.geolocation.getCurrentPosition(onSuccess,onError,options);

    function onSuccess(position){
        document.getElementById('latBtn').innerHTML = "Latitude: "+position.coords.latitude;
    }

    function onError(err){
        alert('Error code: '+err.code+"\n"+'Message: '+err.message);
    }

}

/**
 * Get the current longitude of the user
 * using their device position
 */
function getLong(){
    var options={
        enableHighAccuracy: true,
        maximumAge:360000
    }
    var curPos = navigator.geolocation.getCurrentPosition(onSuccess,onError,options);

    function onSuccess(position){
        document.getElementById('longBtn').innerHTML = "Longitude: "+position.coords.longitude;
    }

    function onError(err){
        alert('Error code: '+err.code+"\n"+'Message: '+err.message);
    }
}

getLat();
getLong();