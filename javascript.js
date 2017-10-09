$(function(){
  ResetGrid(16)

  $("#resetbtn").click(function(){
    ResetGrid(GetBoxesPerSide());
  });

  function GetBoxesPerSide(){
    var n=prompt("How many divisions do you want per side?");
    return n;
  }

  function ResetGrid(n){
    $("#cont").empty();
    /*$(".boxes").css("background-color", "white");*/
    /*var n=prompt("How many divisions do you want per side?");*/
    var bsize = 30*16/n;
    i=0;
    while(i < n*n){
      if(i%n===0){
        $("#cont").append("<div class='boxes' style='clear:left;'></div>");
      }
      else{
        $("#cont").append("<div class='boxes'></div>");
      }
      i++;
    };

    $(".boxes").width(bsize);
    $(".boxes").height(bsize);

    $(".boxes").mouseenter(function(){
      $(this).css("background-color","black");
    });
  };

});
