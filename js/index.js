//jQuery time

//scale

var alsoenlarge = true;
var notClicked = true;

function isScalePossible() {
    can = 'MozTransform' in document.body.style;
    if (!can) can = 'webkitTransform' in document.body.style;
    if (!can) can = 'msTransform' in document.body.style;
    if (!can) can = 'OTransform' in document.body.style;
    if (!can) can = 'transform' in document.body.style;
    if (!can) can = 'Transform' in document.body.style;
    return can;
}

$(document).ready(function() {
    if (isScalePossible()) {
        
        // Run scale function on start
        scaleSite();
        shareBoxPosition();
        scaleSite();
        shareBoxPosition();
        $('#loading').css("display", "none");
        $('.fade-in').css("visibility", "visible");

        // Run scale function on browser resize
        $(window).resize(scaleSite);
        $(window).resize(shareBoxPosition);
        
    }
});

function scaleSite()
{
    containerw = window.innerWidth * 1; /* The width of the div, currently set to half of the window's width */
    containerh = window.innerHeight * 1; /* The maximum possible height of the div; the recommend size for this is equal to or larger than the H of the element. */
    sitew = $('#scalecontainer').width();
    siteh = $('#scalecontainer').height();
    f = containerw/sitew;
    f = containerh/siteh<f?containerh/siteh:f;
    if(!alsoenlarge && f>1) f = 1;
    $('#scalecontainer').css({
        "-moz-transform"    : "scale("+f+")",
        "-webkit-transform" : "scale("+f+")",
        "-ms-transform"     : "scale("+f+")",
        "-o-transform"      : "scale("+f+")",
        "transform"         : "scale("+f+")",
        "left"              : ((containerw-(sitew*f))/2)+"px",
        "top"               : "0px"
    });
}

function isScalePossible()
{
    can = 'MozTransform' in document.body.style;
    if(!can) can = 'webkitTransform' in document.body.style;
    if(!can) can = 'msTransform' in document.body.style;
    if(!can) can = 'OTransform' in document.body.style;
    if(!can) can = 'transform' in document.body.style;
    if(!can) can = 'Transform' in document.body.style;
    return can;
}
// end scale
    
function shareBoxPosition() {
            if(containerw < 1200) {
            $('#shareBox-footer').css({
                "visibility"      : "visible",
                });
            $('#shareBox-side').css({
                "display"      : "none",
                });
                
        } else if(containerw > 1200)  {
            $('#shareBox-footer').css({
                "visibility"      : "hidden",
                });
            $('#shareBox-side').css({
                "display"      : "block",
                });
    }
    }

// end scale

var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

//div version
var current_div, next_div;

$(".next").click(function() {
	if(animating)
    return false;
	animating = true;
	
	current_fs = $(this).parent().parent();
	next_fs = $(this).parent().parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show();
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
                'transform': 'scale('+scale+')',
                'position': 'absolute'
            });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function() {
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function() {
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function() {
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});


//display all of the data
   
function overallResults(){
    
    var answer1 = $("input:radio[name=question-1]:checked").val();
    var answer2 = $("input:radio[name=question-2]:checked").val();
    var answer3 = $("input:radio[name=question-3]:checked").val();
    var answer4 = $("input:radio[name=question-4]:checked").val();
    var answer5 = $("input:radio[name=question-5]:checked").val();
    var answer6 = $("input:radio[name=question-6]:checked").val();
    var answer7 = $("input:radio[name=question-7]:checked").val();
    var answer8 = $("input:radio[name=question-8]:checked").val();
    var answer9 = $("input:radio[name=question-9]:checked").val();
    var answer10 = $("input:radio[name=question-10]:checked").val();
    var answer11 = $("input:radio[name=question-11]:checked").val();
    var answer12 = $("input:radio[name=question-12]:checked").val();
    var answer13 = $("input:radio[name=question-13]:checked").val();
    var answer14 = $("input:radio[name=question-14]:checked").val();
    var answer15 = $("input:radio[name=question-15]:checked").val();

    
    var averageRating = ((parseInt(answer1, 10) + parseInt(answer2, 10) + parseInt(answer3, 10) + parseInt(answer4, 10) + parseInt(answer5, 10) + parseInt(answer6, 10) + parseInt(answer7, 10) + parseInt(answer8, 10) + parseInt(answer9, 10) + parseInt(answer10, 10) + parseInt(answer11, 10) + parseInt(answer12, 10) + parseInt(answer13, 10) + parseInt(answer14, 10) + parseInt(answer15, 10))/15).toFixed(1);
    
    var strategyAvgDisplay = ((parseInt(answer1, 10) + parseInt(answer2, 10) + parseInt(answer3, 10))/3).toFixed(1);
    var operationAvgDisplay = ((parseInt(answer4, 10) + parseInt(answer5, 10) + parseInt(answer6, 10))/3).toFixed(1);
    var alignmentAvgDisplay = ((parseInt(answer7, 10) + parseInt(answer8, 10) + parseInt(answer9, 10))/3).toFixed(1);
    var enablementAvgDisplay = ((parseInt(answer10, 10) + parseInt(answer11, 10) + parseInt(answer12, 10))/3).toFixed(1);
    var governanceAvgDisplay = ((parseInt(answer13, 10) + parseInt(answer14, 10) + parseInt(answer15, 10))/3).toFixed(1);
    
    
    var strategyAvg = (parseInt(answer1, 10) + parseInt(answer2, 10) + parseInt(answer3, 10))/3;
    var operationAvg = (parseInt(answer5, 10) + parseInt(answer6, 10) + parseInt(answer4, 10))/3;
    var alignmentAvg = (parseInt(answer7, 10) + parseInt(answer8, 10) + parseInt(answer9, 10))/3;
    var enablementAvg = (parseInt(answer10, 10) + parseInt(answer11, 10) + parseInt(answer12, 10))/3;
    
    var strategyAvg100 = (((parseInt(answer1, 10) + parseInt(answer2, 10) + parseInt(answer3, 10))/3)*70).toFixed(1);
    var operationAvg100 = (((parseInt(answer5, 10) + parseInt(answer6, 10) + parseInt(answer4, 10))/3)*70).toFixed(1);
    var alignmentAvg100 = (((parseInt(answer7, 10) + parseInt(answer8, 10) + parseInt(answer9, 10))/3)*70).toFixed(1);
    var enablementAvg100 = (((parseInt(answer10, 10) + parseInt(answer11, 10) + parseInt(answer12, 10))/3)*70).toFixed(1);
    var governanceAvg100 = (((parseInt(answer13, 10) + parseInt(answer14, 10) + parseInt(answer15, 10))/3)*70).toFixed(1);
    
    $("#strategyScore").css("height", ""+strategyAvg100+"");
    $("#operationScore").css("height", ""+operationAvg100+"");
    $("#alignmentScore").css("height", ""+alignmentAvg100+"");
    $("#enablementScore").css("height", ""+enablementAvg100+"");
    $("#governanceScore").css("height", ""+governanceAvg100+"");
    $("#strategyScore span").text(""+strategyAvgDisplay+"");
    $("#operationScore span").text(""+operationAvgDisplay+""); 
    $("#alignmentScore span").text(""+alignmentAvgDisplay+"");
    $("#enablementScore span").text(""+enablementAvgDisplay+"");
    $("#governanceScore span").text(""+governanceAvgDisplay+"");
    $("#averageRating").text(""+averageRating+"");
    
    $("#resultsChart .bar .scoreNumber").each(function () {
    		var barScore = $(this).text();
            var barValue = parseInt(barScore, 10);
    		if(barValue >= 3.9331) {
    		$(this).parent().addClass("quintile-1");
    		} else if (barValue < 3.9331 && barValue >=3.607) {
    			$(this).parent().addClass("quintile-2");
    		} else if (barValue < 3.607 && barValue >=3.2313) {
    			$(this).parent().addClass("quintile-3");
    		} else if (barValue < 3.2313 && barValue >=2.9263) {
    			$(this).parent().addClass("quintile-4");
            } else if (barValue < 2.9263 && barValue >=0) {
    			$(this).parent().addClass("quintile-5");
			}
    });
    
    $("#averageRating").each(function () {
    		var overallScore = $(this).text();
            var ovrallValue = parseInt(overallScore, 10);
    		if(ovrallValue >= 3.9381) {
    		$(this).addClass("quintile-1");
            $("#overallCircle .circle .mask .fill").addClass("quintile-1");
    		} else if (ovrallValue < 3.9381 && ovrallValue >=3.6606) {
    			$(this).addClass("quintile-2");
                $("#overallCircle .circle .mask .fill").addClass("quintile-2");
    		} else if (ovrallValue < 3.6606 && ovrallValue >=3.2777) {
    			$(this).addClass("quintile-3");
                $("#overallCircle .circle .mask .fill").addClass("quintile-3");
    		} else if (ovrallValue < 3.2777 && ovrallValue >=2.9521) {
    			$(this).addClass("quintile-4");
                $("#overallCircle .circle .mask .fill").addClass("quintile-4");
            } else if (ovrallValue < 2.9521 && ovrallValue >=0) {
    			$(this).addClass("quintile-5");
                $("#overallCircle .circle .mask .fill").addClass("quintile-5");
			}
    });
    
    var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
    window.randomize = function() {
        var rotation = Math.floor((averageRating/5) * 180);
        var fill_rotation = rotation;
        for(i in transform_styles) {
            $('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
        }
    }
    setTimeout(window.randomize, 200);
    
    }

$("input:radio[name=question-3]").click(function() { 
    $("#strategySubhead").css("opacity", "0");
    $("#operationalizationSubhead").css("opacity", "1");
});

$("input:radio[name=question-6]").click(function() { 
    $("#operationalizationSubhead").css("opacity", "0");
    $("#alignmentSubhead").css("opacity", "1");
});

$("input:radio[name=question-9]").click(function() { 
    $("#alignmentSubhead").css("opacity", "0");
    $("#enablementSubhead").css("opacity", "1");
});
$("input:radio[name=question-12]").click(function() { 
    $("#enablementSubhead").css("opacity", "0");
    $("#governanceSubhead").css("opacity", "1");
});


$("input:radio[name=question-15]").click(function() { 
    notClicked = false;
    scaleSite();
    shareBoxPosition();
    overallResults();
    $("#progressbar").css("display", "none");
    $("#governanceSubhead").css("opacity", "0");
});

$("#resetButton").click(function() {
    location.reload();
});