$(document).ready(function() {

var counter = 0;


var a1 = $('#field0').attr('src','img/path');
var a2 = $('#field1').attr('src','img/path');
var a3 = $('#field2').attr('src','img/path');
var b1 = $('#field3').attr('src','img/path');
var b2 = $('#field4').attr('src','img/path');
var b3 = $('#field5').attr('src','img/path');
var c1 = $('#field6').attr('src','img/path');
var c2 = $('#field7').attr('src','img/path');
var c3 = $('#field8').attr('src','img/path');

var row1= [
  {cell1: a1},
  {cell2: a2},
  {cell3: a3}
]
var row2= [
  {cell1: b1},
  {cell2: b2},
  {cell3: b3}
]
var row3= [
  {cell1: c1},
  {cell2: c2},
  {cell3: c3}
]
var col1= [
  {cell1: a1},
  {cell2: b1},
  {cell3: c1}
]
var col2= [
  {cell1: a2},
  {cell2: b2},
  {cell3: c2}
]
var col3= [
  {cell1: a3},
  {cell2: b3},
  {cell3: c3}
]
var dia1= [
  {cell1: a1},
  {cell2: b2},
  {cell3: c3}
]
var dia2= [
  {cell1: a3},
  {cell2: b2},
  {cell3: c1}
]

var winCombos =
  [row1, row2, row3]
  [col1, col2, col3]
  [dia1, dia2]


//each click counts counter++ until counter is even or odd. With booleans or %.
//counter === 0 deliver RedCross, counter === 1 deliver knot.

//begin working Check Boxes

  $("td.cell").click(function()
    {
      if (counter % 2 === 0) {
        $("<img class='cross' src='images/redcross.jpg'/>").appendTo($(this));
        $(this).off();
    }
      else  {
        $("<img class='knot' src='images/knot.jpg'/>").appendTo($(this));
        $(this).off() };
    counter++;

    if (counter === 9) {
      alert("Game ended!")
    }

//End working Check Boxes, kind of. Able to fill board with 9 alternating characters.

  // function winner () {
  //   if (img0 == img1 && img2)
  //   {alert("Winner!")
  //   }
  //   };



  });
});
