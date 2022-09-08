function calcular(){
    var a = document.f1.a.value;
    var b = document.f1.b.value;
    var d = document.f1.d.value;
    var r1 = document.f1.g.value;
    var r2 = document.f1.gg.value;
    r1 = (parseFloat(a) * parseFloat(d) / 100) + (parseFloat(a) * parseFloat(b) / 100) + parseFloat(a);
    r2 = parseFloat(a) * parseFloat(b) / 100;
    document.f1.g.value = r1;
    document.f1.gg.value = r2;

}
