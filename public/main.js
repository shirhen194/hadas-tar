
let fetch = function () {
    $.get("/dogs" ).then((data) => {
        showDogs(data)
    }).catch(function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus)})
};


function showDogs(data){
    $(".dogs").empty()
    let dogs=data;
        var source = $('#dogs-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template({ dogs });

    // append our new html to the page
    $('.dogs').append(newHTML);
}

$(".show-dogs").on('click', function () {
    fetch();
})





//at the end
// function addDogs() {
//     $('.cities').empty();
//     var source = $('#weather-template').html();
//     var template = Handlebars.compile(source);
//     var newHTML = template({ cities });

//     // append our new html to the page
//     $('.cities').append(newHTML);

// }