$(document).ready(function () {

    //Scope control Vars and functions here but fire them on the specific pageinit that calls for them.

    //functions to handle textarea focus/blur effects
    var ta = $('#mssg');

    $(ta).focus(function () {
        if ($(this).val() == 'Type your message here...') {
            $(this).val('');
        }
    })

    $(ta).blur(function () {
        if ($(this).val() == '') {
            $(this).val('Type your message here...');
        }
    })

    //Masonary image gallery function
    $(window).load(function () {
        $('#masonry').isotope({
            // options
            masonry: {
                columnWidth: 155,
                gutterWidth: 10
            }
        });
    });

    //cycles cta images every 5 sec
    $('.pics').cycle({
        fx: 'scrollRight',
        speed: 250,
        timeout: 5000,
    });
	
    //changes active state on ctaNav when slide changes
    setInterval(function () {
        var rez = $('.ctaResume');
        var gal = $('.ctaGallery');
        var con = $('.ctaContact');

        if ($(rez).hasClass('active')) {
            $(rez).removeClass('active');
            $(gal).addClass('active');
        } else if ($(gal).hasClass('active')) {
            $(gal).removeClass('active');
            $(con).addClass('active');
        } else if ($(con).hasClass('active')) {
            $(con).removeClass('active');
            $(rez).addClass('active');
        }
    }, 5250);

    //filter functionality
    var pb = $('.printBtn');
    var wb = $('.webBtn');
    var ab = $('.allBtn');

    $(pb).click(function () {
        $('#masonry').isotope({
            filter: '.print'
        });
        return false;
    });

    $(wb).click(function () {
        $('#masonry').isotope({
            filter: '.web'
        });
        return false;
    });

    $(ab).click(function () {
        $('#masonry').isotope({
            filter: '*'
        });
        return false;
    });

    //AJAX call to retrieve quote data
    $.ajax({
        url: "php/curl.php",
        type: 'GET',
        dataType: 'text',
        success: function (data) {
            var newData = data.substr(0, data.length - 1);
            var json = JSON.parse(newData);
            var p = $('.quote');
            $(p).html(json.quote);
        },
        failure: function (mssg) {
            console.log(mssg);
        }
    });

    //AJAX call for gallery 	
    $.ajax({
        url: 'js/gallery.json',
        type: 'GET',
        dataType: "json",
        success: function (data) {
            $.each(data, function () {
                //build out a new HTML string that includes the image tag and all information. Then populates the div with all the images in
                //the JSON object
                var html = '<div class="item ' + this.format + '"><a href="#"><img src="' + this.thumb + '" class="' + this.isOdd + '"data-id="' + this.id + '"/></a></div>'
                $('#masonry').append(html);
            })

            //runs through all images in gallery, on click will redirect to the image detail screen and auto populate the details for each
            //gallery image. 
            var srcImg = $('.item img');
            $(srcImg).each(function () {
                $(this).click(function () {
                    var imgID = ($(this).data('id'));
                    $(data).each(function () {
                        if (imgID == this.id) {
                            var title = this.name;
							var deets = this.desc;
							var src = this.image;
							
							//empties areas of the details page and loads in the content from the JSON
							//once the data has loaded then the page is loaded for the user
							$('#thaDeets').find('h3').empty().append(title);
							$('#thaDeets').find('img').attr('src', src).attr('title', title);
							$('#thaDeets').find('p').empty().append(deets);
							
							$.mobile.changePage('#details');
                        }
                    });
                });
            });
        },
        error: function (data) {
            console.log(data);
        }
    });

}); //end of doc.ready


tempist = function () {
    console.log("You are browser's agent: ", navigator.userAgent);
}
//Fire code as the individual page is ini'd rather than on Document.ready
$('#home').on('pageinit', function (event) {
    tempist();
});