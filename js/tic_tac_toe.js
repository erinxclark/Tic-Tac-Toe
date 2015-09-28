$(document).ready(function() {

var counter = 0;
var hasWinner = false;

var field0 = '#field0'
var field1 = '#field1'
var field2 = '#field2'
var field3 = '#field3'
var field4 = '#field4'
var field5 = '#field5'
var field6 = '#field6'
var field7 = '#field7'
var field8 = '#field8'

var cellCheck = [
  {x: 0, field: field0},
  {x: 0, field: field1},
  {x: 0, field: field2},
  {x: 0, field: field3},
  {x: 0, field: field4},
  {x: 0, field: field5},
  {x: 0, field: field6},
  {x: 0, field: field7},
  {x: 0, field: field8}
]

var player1 = prompt("What is your name?","Player 1 Name");
var player2 = prompt("What is your name?","Player 2 Name");

$(".turn").append(player1);

//each click counts counter++ until counter is even or odd. With booleans or %.
//counter === 0 deliver RedCross, counter === 1 deliver knot.

//begin working Check Boxes

$("td.cell").click(function()
{
  if (counter % 2 === 0) {
    $("<img class='cross' src='images/redcross.jpg'/>").appendTo($(this));
    $(".turn").text(player2).toggle(true);
    $(this).off();
  }
  else  {
    $("<img class='knot' src='images/knot.jpg'/>").appendTo($(this));
    $(".turn").text(player1).toggle(true);
    $(this).off();
  }

  counter++;

  cellCheck.forEach(function win(item, i) {
    if (($(item.field).find('img').hasClass('cross'))) {
      item.x = 1;
    }
    else if (($(item.field).find('img').hasClass('knot'))) {
      item.x = -1;
    };
});

var a1 = cellCheck[0].x;
var a2 = cellCheck[1].x;
var a3 = cellCheck[2].x;
var b1 = cellCheck[3].x;
var b2 = cellCheck[4].x;
var b3 = cellCheck[5].x;
var c1 = cellCheck[6].x;
var c2 = cellCheck[7].x;
var c3 = cellCheck[8].x;

var winCombos= [
  {cell1: a1, cell2: a2, cell3: a3},
  {cell1: b1, cell2: b2, cell3: b3},
  {cell1: c1, cell2: c2, cell3: c3},
  {cell1: a1, cell2: b1, cell3: c1},
  {cell1: a2, cell2: b2, cell3: c2},
  {cell1: a3, cell2: b3, cell3: c3},
  {cell1: a1, cell2: b2, cell3: c3},
  {cell1: a3, cell2: b2, cell3: c1}
];

  winCombos.forEach(function (item, i) {
    if ((item.cell1)+(item.cell2)+(item.cell3)===3)
    {
        swal(player1+" Wins!");
        hasWinner = true;
    }
    else if ((item.cell1)+(item.cell2)+(item.cell3)===-3)
    {
        swal(player2+" Wins!");
        hasWinner = true;
    }
  });
    if ((counter === 9) && (hasWinner == false))
    {
        swal("Game ended!");
    }
});
});
