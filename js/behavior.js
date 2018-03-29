$(document).ready(function(){
        var answer = "";
        $.ajax({ url:'https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=boolean',
            method: 'GET',
            cache: false,
            dataType: 'json',
            success: function(response){
            $('#quetion').html(response.results[0].question);
            answer = response.results[0].correct_answer;
            }
         });
        $('button').click(function(event){
            if (event.target.id == answer){
                $('#verdict').html("Correct").css({color: "green"});
            }else{
                $('#verdict').html("Wrong").css({color: "red"});}
        })
});