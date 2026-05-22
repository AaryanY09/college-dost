const socket = io();

socket.on("new-shareConAlu", () => {

    location.reload();

});