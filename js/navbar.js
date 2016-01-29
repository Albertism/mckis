 function navbarModel() {
    var self = this;
    //array of current project modal ids
    
    // var projectArray = $('#project').find('a').map(function(i, x) { 
    //      return $(x).attr('href'); 
    // });

    $('.nav-left').on('click', function(e) {      
        var $currentElem = $(this).parents('.portfolio-modal');
        var $prevElem = $(this).parents().prev('.portfolio-modal');

        if($prevElem.length == 0) { //if no previous, take the last element
            $prevElem = $(this).parents('.modal-collection').children().last();
        }

        $currentElem.modal('hide');

        window.setTimeout(function() { //without settime out, modal doesn't properly work(?!)
            $prevElem.modal('show');
        }, 500);
    });

    $('.nav-right').on('click', function(e) {
        var $currentElem = $(this).parents('.portfolio-modal');
        var $nextElem = $(this).parents().next('.portfolio-modal');

        if($nextElem.length == 0) {
            $nextElem = $(this).parents('.modal-collection').children().first();
        }

        $currentElem.modal('hide');
        window.setTimeout(function(){ 
            $nextElem.modal('show'); 
        }, 500); 
    });

}

navbarModel();