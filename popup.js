$(function(){
        $('#name').keyup(function(){  //if keyup is used instead of click
            //then text will appear after we type something
            $('#greet').text('Hey '+ $('#name').val() + '!');

        })
    });