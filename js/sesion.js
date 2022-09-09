let user = {
    desarrollador1: "EZambrano",
    desarrollador2: "DVargas",
    desarrollador3: "DOrtiz",
    desarrollador4: "DRojas",
    desarrollador5: "CBarrera",    
}

let pass = {
    desarrollador1: "1004193541",
    desarrollador2: "1110584386",
    desarrollador3: "1014658307",
    desarrollador4: "1094938687",
    desarrollador5: "1022954370",    
}

function inicioSesion(){
    let usuario = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usuarioValido = false;
    let passwordValido = false;
    for (let i = 1; i <= 6; i++) {
        if (usuario == user["desarrollador"+i]) {
            usuarioValido = true;
            if (password == pass["desarrollador"+i]) {
                passwordValido = true;
                break;
            }
            
        }
    
    }

    if (usuario === "EZambrano" && password === "1004193541") {
                location.href = "../src/desarrollador1.html";
        } 
        
    if (usuario === "DVargas" && password === "1110584386") {
                location.href = "../src/desarrollador2.html"
        }

    if (usuario === "DOrtiz" && password === "1014658307") {
                location.href = "../src/desarrollador3.html";
        }

    if (usuario === "DRojas" && password === "1094938687") {
                location.href = "../src/desarrollador4.html";
        }

    if (usuario === "CBarrera" && password === "1022954370") {
                location.href = "../src/desarrollador5.html";
        } 
        
        
        
    if (usuarioValido != false) {
            alert("Usuario o contraseña incorrectos");
        }  

    
}
