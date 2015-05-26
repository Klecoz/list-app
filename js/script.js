//defines text box variable.
 var listAdd;

$( document ).ready(function() {

  $('#listItem').keydown(function (event) {
    if (event.which == 13) {

    //Prevents default function of key.
    event.preventDefault();

    //Uses jQuery .val() to pass variable into listAdd
    listAdd = $(this).val();

    //Test to show that variable has been changed.
    console.log('success!');
    console.log(listAdd);


    //Uses .append() to add a list item to the end of the list.
    $('.listsActual').append('<li class="notDone">' + listAdd + '</li>');
  }

});

});
