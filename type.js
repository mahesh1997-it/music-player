var playlist = /** @class */ (function () {
    function playlist() {
    }
    playlist.prototype.create_list = function () {
        this.genre = prompt("genre");
        this.songone = prompt("songone");
        this.songtwo = prompt("songone");
        this.songthree = prompt("songone");
        var playslist_creation = "\n    <div class=\"card text-white bg-success mb-3\" style=\"max-width: 18rem;\">\n              <div class=\"card-header\">" + this.genre + "</div>\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)" + this.songone + "</h5>\n                <h5 class=\"card-title\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)" + this.songtwo + "</h5>\n                <h5 class=\"card-title\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)" + this.songthree + "</h5>\n                \n              </div>";
        var b = document.getElementById('two');
        var c = document.createElement('div');
        c.innerHTML = playslist_creation;
        b.appendChild(c);
    };
    return playlist;
}());
var player = new playlist();
player.create_list();
