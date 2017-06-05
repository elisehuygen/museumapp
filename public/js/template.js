function main() {
  var input = document.getElementById("zoekbalk");

input.onkeyup = function myFunction() {
    var filter, table, tr, td, i;
    filter = input.value.toUpperCase();
    zoek = document.getElementById("zoeken");
    tr = document.getElementsByClassName("afb");
    for (i = 0; i < tr.length; i++) {
        if (tr[i].id.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
    }
  }
}

window.onload = function() {
       main();
}
