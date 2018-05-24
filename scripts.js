$(document).ready(function(){
    $(".datepicker").datepicker();
    $("form").submit(function (event) {
        var complete = true;
        $("input").each(function () {
            var field = $(this).attr("name");
            if ($(this).val() === "") {
                var prompt;
                if (field === "from"){
                    prompt = "Cruise start date ";
                } 
                if (field === "to"){
                    prompt = "Cruise end date ";
                }
                if (field === "name"){
                    prompt = "Your name ";
                }
                $("#"+field).html(prompt + "needs to be filled out!");
                $("#"+field).show();
                complete = false;
            } else {
                $("#"+field).hide();
            }
        });
        var name = $("input[name='name']").val();
        var start = $("input[name='from']").val();
        var end = $("input[name='to']").val();
        if (start > end){
            $("#to").html("End date must be after start date!");
            $("#to").show();
            complete = false;
        }
        if (!complete) {
            return false;
        }
        event.preventDefault();
        alert("Thanks " + name + "! Your cruise leaves on " + start + " and returns on " + end + "!");
    });
});