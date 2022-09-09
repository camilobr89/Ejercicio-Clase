function calcular(){


    let a = document.getElementById("a").value;
    let b = a.split(",");
    let c = [];


    if ( b.length > 10) {
      alert("Solo se permiten 10 numeros");
    } else {
      for (let i = 0; i < b.length; i++) {
        if (b[i] % 15 == 0) {
          c.push(b[i]);
        }
      }
      document.getElementById("g").value = c;


      let d = [];

    
      for (let i = 0; i < b.length; i++) {
        if (b[i] < 0) {
          d.push(b[i]);
        }
      }
      document.getElementById("gg").value = d;

    }

}

function retornar(){
    location.href = "../index.html";
}
