$("#my-button").click(function(){
    $.ajax({url: "http://localhost:8080/jobs/1", success: function(result){
        $("#my-div").html(result);
        // console.log(result);
    }});
});


// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").load("demo_test.txt");
//     });
// });