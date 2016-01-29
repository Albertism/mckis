 function contentNavbarModel() {
    var self = this;
    //array of current project modal ids
    
    var memberArray = $('#team').find('.team-row');
    var memberSize = memberArray.length;

    $('.nav-content-left').on('click', function(e) {      
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

    $('.nav-content-right').on('click', function(e) {
        var currentRow = $.find('.team-row:visible')[0]; //finds current row
        var curIndex = $(currentRow).index(memberArray); //index of current row in entire team-row array
        var nextIndex;

        if(curIndex == memberSize - 1) //there is no next index
            nextIndex = 0;
        else 
            nextIndex = curIndex + 1;

        var nextRow = memberArray[nextIndex]; //find next index

        e.stopPropagation();
        $(currentRow).stop().toggle('slide', {direction: 'right'});
        $(nextRow).stop().toggle('slide',{direction: 'left'});
        e.stopPropagation();

        // $(currentRow).fadeOut(function() {
        //     $(currentRow).toggle('slide', {
        //         direction:'left'
        //     }, 400);
        //     });
    

        // if($nextElem.length == 0) {
        //     $nextElem = $(this).parents('.modal-collection').children().first();
        // }

        // $currentElem.modal('hide');
        // window.setTimeout(function(){ 
        //     $nextElem.modal('show'); 
        // }, 500); 
    });


}

contentNavbarModel();