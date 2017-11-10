var hotel  = {
name: "Biltmore",
rooms: 500,
roomsBooked: 150,
roomService: true,
pool: false,

roomsAvail: function() {
    return this.rooms - this.roomsBooked;
}
};

function tah () {
    document.getElementById('name').innerHTML = hotel.name;
    document.getElementById('rooms').innerHTML = hotel.rooms;
    document.getElementById('avail').innerHTML = hotel.roomsAvail();
};
    
