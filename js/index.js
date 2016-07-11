$(document).ready(function() {
  var total = [];
  var string = '';
  $(".num").click(function() {
    string = string + $(this).html();
    $(".screen").append($(this).html());
    console.log(string);
  });
  $(".clear").click(function() {
    $(".screen").html("")
    total = [];
    string = '';
    console.log(total);
  });
  
  $(".op").click(function() {
    var last = total[total.length-1];
    $(".screen").html("")
    if (string.length>0){
    total.push(string);}
    if ( !(isNaN(last)) || $(this).html() == "-" || string.length>0){
    total.push($(this).html());}
    string = '';
    console.log(total);
  });
  
$(".equal").click(function() {
    console.log(total);
    if (string.length>0){
    total.push(string);}
    string = (eval(total.join(' '))).toString();
  total = [];
    $(".screen").html(parseInt(string));    
  });
});