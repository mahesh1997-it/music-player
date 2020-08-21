class playlist{

    genre:string
    songone:string
    songtwo:string
    songthree:string

    
   create_list(){

    this.genre = prompt("genre");
    this.songone = prompt("songone");
    this.songtwo = prompt("songone");
    this.songthree = prompt("songone");
          
    var playslist_creation= `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
              <div class="card-header">${this.genre}</div>
              <div class="card-body">
                <h5 class="card-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)${this.songone}</h5>
                <h5 class="card-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2)${this.songtwo}</h5>
                <h5 class="card-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3)${this.songthree}</h5>
                
              </div>`
      var b = document.getElementById('two');
      var c= document.createElement('div');
      c.innerHTML=playslist_creation;
      b.appendChild(c);

   }


}

let player = new playlist();
player.create_list();
