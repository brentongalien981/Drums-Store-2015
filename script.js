/* Variables for both Intro and Features */
var navBulletGoldSrc = "images/circleGold.gif";
var navBulletBlackSrc = "images/circleBlack.gif";



/* Variables for Intro */
var i;
var k;

var classIntroImgArr;
var classIntroNavBullets;

// This is the order by which the gold bullet indexes should apper.
var goldIntroIndexes = [1, 2, 3, 0];

// This is the order by which the black bullet indexes should refresh the gold ones.
var blackIntroIndexes = [0, 1, 2, 3];



/* Variables for Features */
var l;
var m;

var classFeaturesImgArr;
var classFeaturesNavBullets;
var classFeaturesDescriptionArr

// This is the order by which the gold bullet indexes should apper.
var goldFeaturesIndexes = [1, 2, 3, 4, 0];

// This is the order by which the black bullet indexes should refresh the gold ones.
var blackFeaturesIndexes = [0, 1, 2, 3, 4];

// This is the order by which the features description will appear.
var featuresDescriptionAppear = [3, 2, 1, 0, 4];




// This is called by the method waitForEvents().
function transitionIntro() {
	classIntroImgArr[i].setAttribute("id", "gone");
	
	classIntroNavBullets[goldIntroIndexes[k]].setAttribute("src", navBulletGoldSrc);
	classIntroNavBullets[blackIntroIndexes[k]].setAttribute("src", navBulletBlackSrc);	

	if (i <= 0) {
		for (var j = 0; j < 4; j++) {
			classIntroImgArr[j].setAttribute("id", "shown");	
		}	
									
		i = 4;
		k = -1;
	}
	
	--i;
	++k;
}

function transitionFeatures() {
	classFeaturesImgArr[l].setAttribute("id", "gone");
	
	classFeaturesNavBullets[goldFeaturesIndexes[m]].setAttribute("src", navBulletGoldSrc);
	classFeaturesNavBullets[blackFeaturesIndexes[m]].setAttribute("src", navBulletBlackSrc);	
	
	classFeaturesDescriptionArr[l].setAttribute("id", "gone");
	classFeaturesDescriptionArr[featuresDescriptionAppear[m]].setAttribute("id", "shown");

	if (l <= 0) {
		for (var n = 0; n < 5; n++) {
			classFeaturesImgArr[n].setAttribute("id", "shown");	
		}	
									
		l = 5;
		m = -1;
	}
	
	--l;
	++m;		
}

function waitForEvents() {
	/* Set Intro variables. */
	i = 3;
	k = 0;

	classIntroImgArr = document.getElementsByClassName("introImgArr");		
	classIntroNavBullets = document.getElementsByClassName("intro_nav_imgCircles");
	
	
	/* Set Features variables. */
	l = 4;
	m = 0;

	classFeaturesImgArr = document.getElementsByClassName("featuresImgArr");	
	classFeaturesNavBullets = document.getElementsByClassName("features_nav_imgCircles");
	classFeaturesDescriptionArr = document.getElementsByClassName("featuresDescriptionArr"); 	
	
	// Built-in
	setInterval(transitionIntro, 2000);				
	setInterval(transitionFeatures, 3000);					
}

window.onload = function() {
	waitForEvents();
};





