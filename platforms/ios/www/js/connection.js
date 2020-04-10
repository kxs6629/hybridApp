/**
 * Checks the connection method
 * of the device and prints it
 * on the page
 */
function checkConn(){
    var connectionType = navigator.connection.type;
    var types= {};
    types[navigator.connection.UNKNOWN] = "Unknown Connection";
    types[navigator.connection.NONE] = "No connection";
    types[navigator.connection.ETHERNET] = "Wired Connection";
    types[navigator.connection.WIFI] = "Wireless Connection";
    types[navigator.connection.CELL] = "Generic Cell Connection"
    types[navigator.connection.CELL_2G] = "2G Cell Connection";
    types[navigator.connection.CELL_3G] = "3G Cell Connection";
    types[navigator.connection.CELL_4G] = "4G Cell Connection";
    document.getElementById("connBtn").innerHTML = "Connection: "+types[connectionType];
}

checkConn();