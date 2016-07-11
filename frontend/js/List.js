var List = {
    start: function () {
        List.create();

    },
    handleChange: function () {



        $('.regular-checkbox').change(function () {
            if ($(this).is(":checked")) {
                $(this).parent().parent().find('p').addClass('checked');

                $(this).parent().parent().find('.right').addClass('checkedImg');


            } else {
                $(this).parent().parent().find('p').removeClass('checked');

                $(this).parent().parent().find('.right').removeClass('checkedImg');
            }

        });



    },
    removeLine: function () {

        $('.trash').on('click', function () {
            $(this).parent().parent().remove();
        });

    },
    create: function () {


        $('#plus').on('click', function () {

            var note = $('#add').val();
            console.log(note);
            var data = {"task": "ffff"};
            console.log(data);

            data.task = note;
            console.log(data);
//            data = $(this).serialize() + "&" + $.param(data);


            $.ajax({
                type: 'post',
                dataType: "json",
                url: '/../backend/back.php',
                data: data,
                success:
                        function (data) {
                            var taskToAdd = data['task'];
                            var row = $('<div class="row">');
                            var left = $('<div class="left"><input type="checkbox" id="checkbox1" class="regular-checkbox" /><div>');
                            var center = $('<div class="center">');
                            var p = $('<p>');
                            var right = $(' <div class="right"><img class="trash" src="img/trash.png" />');

                            row.append(left);
                            row.append(center);
                            center.append(p);
                            row.append(right);
                            p.text(taskToAdd);
                            $('.rower').append(row);
                            $('#add').val('');


                        }
            }).done(function () {
                List.handleChange();
                List.removeLine();

            });
        });
    }
//    TODO take a saved list from database
//    getItFromDataBase: function () {
//        $.ajax('/../backend/back.php', {
//            success: function (response) {
//                
//            },
//            error: function () {
//                $('.rower').html('<li>Problem z serwerem, nie można zapisać</li>');
//            },
//
//            complete: function () {
//
//                
//            }
//
//        }).done(function () {
//            List.handleChange();
//        });
//
//    }
};

$(document).ready(function () {
    List.start();
});