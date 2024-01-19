$(document).ready(function(){


    $('#input').change(function(){


        let input=$(this).val();
        $('ul').append('<li>'+input+'<i class="fas fa-check"></i> <i class="fas fa-trash"></i> </li>');
        $(this).val('');

    });

    $('ul').on('click','.fa-trash',function(){
        // console.log($(this).parent())
        $(this).parent().fadeOut(200);

    });

    $('ul').on('click','.fa-check',function(){
        // console.log($(this).parent())
        $(this).parent().toggleClass('checked');

    });

})