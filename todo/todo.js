$("input").on("keypress", function(e) 
{
    // if enter is pressed and the input isn't empty
    if(e.which === 13 && $("input").val() !== "") 
    {
        // adds a list item by appending a whole new div
        $(".todo-box").append("<div class='todo'><i class='far fa-trash-alt'></i>" + $(this).val() + "</div>");

        // clears input box after pressing enter
        $("input").val("");
    }
});

$("div").on("click", ".todo", function() 
{
    // puts a line through todo items on click
    $(this).closest(".todo").toggleClass("todo-click");
});

$("div").on("click", ".todo i", function() 
{
    // removes the todo div when clicking the trash icon
    $(this).closest(".todo").fadeOut(300, function() 
    {
        $(this).remove();
    });
});

$(".fa-plus").on("click", function() 
{
    // toggles the input form when clicking the plus icon
    $("input").fadeToggle();
});

$(".header-box").mousedown( function(e)
{
    // double-clicking the plus icon would sometimes highlight the header
    // so I removed double-click highlighting on the header altogether
    if (event.detail > 1) {
        e.preventDefault();
    }
});