$(window).load(function() { // jquery 2

  function isNumber(obj) { return !isNaN(parseFloat(obj)) }

  function stringToArrayData(data){
    console.log('stringToArrayData');
    var rows = data.split('\n');
    var arrays = [];
    var array = []
    var datePos = 0;
    var firstRow = rows[0].split(',');
    for(i = 0; i < rows.length; i++){
      array = [];
      var r = rows[i].split(',');
      for(var j = 0; j < r.length; j++){
        if(isNumber(r[j])){
          array.push(parseFloat(r[j].trim()));
          continue;
        }
        array.push(r[j]);
      }
      arrays.push(array);
    }
    return arrays;
  }


  $.get("./data2.csv", function(data){
    var arrayData = stringToArrayData(data);
    console.log(arrayData);

    $('.motionchart').motionchart({
  					title: "Dependency ratio vs healthcare costs by hospital district",
  					'data': arrayData,
  					mappings: {key: 1, x: 2, y: 3, size: 5, color: 4, category: 0},
  					colorPalette: {	"Blue-Red": {from: "rgb(0,0,255)", to: "rgb(255,0,0)"}},
  					color: "Red-Blue",
  					play: true,
  					loop: true
  				});

  });



});
