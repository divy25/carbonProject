//feedForm start //

//  document.getElementById("feed").addEventListener= function(){loadForm}

// function loadForm() {
//     document.getElementById("feedForm").classList.toggle("show");
// }

// document.getElementById("more").onclick = function() {loadMore()};
// window.onclick = function(e) {
//   if (!e.target.matches('#feed')) {
//     var dropmores = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropmores.length; i++) {
//       var openDropmore = dropmores[i];
//       if (openDropmore.classList.contains('show')) {
//         openDropmore.classList.remove('show');
//       }
//     }
//   }
// }

// feefForm end //

//more button working starts //

function loadMore() {
    document.getElementById("myDropmore").classList.toggle("show");
    document.getElementById("myDropmore").style.outline = "none";
  }

  window.onclick = function(e) {
    if (!e.target.matches('.droptag')) {
      var dropmores = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropmores.length; i++) {
        var openDropmore = dropmores[i];
        if (openDropmore.classList.contains('show')) {
          openDropmore.classList.remove('show');
        }
      }
    }
  }

 
// more button end //
  