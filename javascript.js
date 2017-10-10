$(function(){
  ResetGrid(16)

  var colorSetting = 1

  $("#resetbtn").click(function(){
    ResetGrid(GetBoxesPerSide());
  });

  $("#blackbtn").click(function(){
    SetColorSetting(1);
  });

  $("#randombtn").click(function(){
    SetColorSetting(2);
  });

  function SetColorSetting(n){
    colorSetting=n
  }

  function GetBoxesPerSide(){
    var n=prompt("How many divisions do you want per side? (Default=16)",16);
    return n;
  }

  function SetColor(){
    if (colorSetting==1){
      $(event.target).css("background-color","black");
    }
    else{
      var hue = parseInt(Math.random()*360);
      var sat = parseInt(Math.random()*100);
      var light = parseInt(Math.random()*100);

      $(event.target).css("background-color","hsl("+hue+", "+sat+"%, "+light+"%)");
    };
  }

  function ResetGrid(n){
    if(n==null){
    }
    else{
      $("#cont").empty();
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
        SetColor();
      });
    };
  };

});
