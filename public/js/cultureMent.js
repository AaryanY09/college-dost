const socket = io();

socket.on("new-culture", () => {

    location.reload();

});