//Implementamos clases
//Clase Multimedia
class Multimedia {
    constructor(url) {
      let _url = url; 

      //metodos
      this.getUrl = function() {
        return _url;
      };
    }
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    };
}
  
//clase hija de clase Multimedia
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }
    //metodo playMultimedia
    playMultimedia() {
        videos.reproduceVideo(this.getUrl(), this.id);
    }
    //método setInicio
    setInicio(tiempo) {
        let urlTime = this.getUrl() + `?start=${tiempo}`;
        //cambia el src, se utiliza con setAttribute para agregar el tiempo
        document.getElementById(this.id).setAttribute("src", urlTime);
    }
}

//Implementando IIFE
const videos= (() => {
    //Función privada: inserta el video en la etiqueta frame
    const insertaVideo = (url, id) => {
        //Se utiliza setAttribute
        document.getElementById(id).setAttribute("src", url);
    };

    //función pública: llama a la función privada
    const reproduceVideo = (url, id) => {
        insertaVideo(url, id);
    };

    return{
        reproduceVideo: reproduceVideo
    };
})();

//Instanciando la clase hija con el url y el id
const musica = new Reproductor("https://www.youtube.com/embed/mLW35YMzELE", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/YPY7J-flzE8", "peliculas");
const series = new Reproductor("https://www.youtube.com/embed/gapK18-dFMw", "series");

//llama a playMultimedia para cada instancia anterior
musica.playMultimedia();
pelicula.playMultimedia();
series.playMultimedia();

//llama metodo setInicio de clase Reproductor (hija)
musica.setInicio(20);
pelicula.setInicio(5);
series.setInicio(15);