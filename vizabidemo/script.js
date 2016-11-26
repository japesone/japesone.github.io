$(window).on('load', function(){ // jquery 3
//$(window).load(function() { // jquery 2

  var csvfile = "./ultrahack_mallidata_3.csv";
  var filedata = $.get("./ultrahack_mallidata_3.csv", function(data){
//    console.log(data);
    return data;
//    var lines = data.split('\n')
//    console.log(data);
//    return data;
  }, 'text');

  convertCSVtoJSON = function(csvdata){
    var arr = csvdata.split('\n');
    var jsonObj = [];
    var headers = arr[0].split(',');
    for(var i = 1; i < arr.length; i++) {
      var data = arr[i].split(',');
      var obj = {};
      for(var j = 0; j < data.length; j++) {
         obj[headers[j].trim()] = data[j].trim();
      }
      jsonObj.push(obj);
    }
    return JSON.stringify(jsonObj);
  }


//console.log(filedata);

/*
  var data = Papa.parse(csvfile, {delimiter: ",",
                                  newline: "\n",
                                  dynamicTyping: true,
                                  complete: function(results, file){
                                    //console.log(results);
                                    return results;
                                  }});
*/

var filedata2 = Papa.parse("https://raw.githubusercontent.com/okffi/os-ultrahack-2016/master/proto_b001/ultrahack_mallidata_3.csv", {
  download: true,
  complete: function(results){
    console.log(results);
    var res = Papa.parse(results.data, {delimiter: ",",
                                    newline: "\n",
                                    dynamicTyping: true} );
    console.log(res);
  }
})

console.log(filedata2);


//                        console.log(data);


  //  var data = $.csv.toObjects(filedata);

  //  var data = convertCSVtoJSON(filedata);
  //  console.log(filedata);


});
