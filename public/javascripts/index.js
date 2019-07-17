/**
 * Created by gokul on 17-07-2019.
 */
$(document).ready(function () {
    //Button on click listner
    $("#btn_add").click(function () {
        var name = $("#name").val();
        if (name.length != 0) {
            //ajax request and response
            $.post("/api/add-user", {name: name}, function (result) {
                Swal.fire({
                    position: 'top-end',
                    type: 'success',
                    title: result,
                    showConfirmButton: false,
                    timer: 1500
                })

                $("#name").val("")
                usersList();
            });
        }
    });

    usersList();
});
/* Function for listout the user*/
function usersList() {
    // ajax calling request
    $.get("/api/list-users", function (result) {
        var html = ``;

        for (var rows in result) {
            var row = result[rows];

            html += '<tr>' +
                '<td>' + (++rows)+ '</td>' +
                '<td>' + row.name + '</td>' +
                '<td>' + row.user_role + '</td>' +
                '</tr>';
        }
        $("#tbl_body").html(html);
    });
}