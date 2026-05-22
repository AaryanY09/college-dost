const socket = io();

socket.on("new-spotlight", () => {

    location.reload();

});