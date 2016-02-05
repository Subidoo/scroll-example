$( document ).ready(function() {
    $(window).scroll(function (event) {

    var integration = $('#integration');
    var top = $('#integration').offset().top - $(document).scrollTop();

    console.log(top, !integration.hasClass('.selected'))

    if (top < 200 && !integration.hasClass('.selected')){
    	console.log("adding class selected")
        $(integration).addClass('selected');
    }
    if (top > 200 && integration.has('.selected')){
    	console.log ('removin class selected')
        $(integration).removeClass('selected');
    }  
  });
});