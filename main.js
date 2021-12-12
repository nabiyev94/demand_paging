var my_image_first = document.querySelector('.my_image_first');
var my_image_second = document.querySelector('.my_image_second');
var my_image_third = document.querySelector('.my_image_third');
var images = ['https://i0.wp.com/blog.indiefolio.com/wp-content/uploads/2017/08/YTLogo_old_new_1680-1.gif?fit=800%2C600&ssl=1',
	      'https://upload.wikimedia.org/wikipedia/en/e/e9/Crash_Course_logo.png',
	      'https://static.facebook.com/images/whatsapp/www/whatsapp-promo.png', 
	      'https://miro.medium.com/max/1000/1*VsJQWtP7CO7J-lFdNpDF1g.png', 
	      'https://spl-ksa.univie.ac.at/fileadmin/user_upload/s_spl24/uspace_logo.png',
	      'https://www.googlewatchblog.de/wp-content/uploads/google-translate-logo.jpg',
	      'https://blog.univie.ac.at/relaunch/wp-content/uploads/2016/07/ufind-1-300x130.png',
	      'https://www.thinkwithgoogle.com/_qs/static/img/global/twg-logo-large.jpg',
	      'https://www.jing.fm/clipimg/full/136-1361267_gmail-calendar-docs-sheets-slide-drawing-maps-gmail.png',
	      'https://media1.faz.net/ppmedia/aktuell/karriere-hochschule/3999435006/1.5981187/top1_page_wide-retina/der-duden-und-die-deutsche.jpg',
	      'https://logopond.com/logos/89290afb3f121c629883cf7e0038a6c2.png',
	      'https://cdn-5ce4a003f911c80f50818892.closte.com/wp-content/uploads/elementor/thumbs/css-tricks-okj85kqipeyjqjcdo23bwfef1axcby7ov3lv4nohag.png',
	      'https://paletton.com/img/paletton-preview-20140414.png',
	      'https://responsivedesign.is/wp-content/uploads/2019/06/Logo-GoogleFonts-color-background.png',
	      'https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg',
	      'https://miro.medium.com/max/4416/1*WUF8JiQtYZ54xS7t9MhHew.png',
	      'https://greatestview.de/static/23d39d1d38f763ab259a7cb3470ea839/98a65/codepen-logo.webp',
	      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png'];


var my_link_first = document.querySelector('.my_link_first');
var my_link_second = document.querySelector('.my_link_second');
var my_link_third = document.querySelector('.my_link_third');
var links = ['https://www.youtube.com/',
	     'https://www.youtube.com/channel/UCX6b17PVsYBQ0ip5gyeme-Q', 
	     'https://web.whatsapp.com/',
	     'https://www.udemy.com/',
	     'https://uspace.univie.ac.at/',
	     'https://translate.google.com/#view=home&op=translate&sl=de&tl=en',
	     'https://ufind.univie.ac.at/en/index.html',
	     'https://www.google.com/',
	     'https://mail.google.com/mail/u/0/#inbox/FMfcgxwJWXPRKzfZqKshdGRCLjRScQbd/',
	     'https://www.duden.de/rechtschreibung/Wert',
	     'https://www.w3schools.com/',
	     'https://css-tricks.com/almanac/properties/c/cursor/',
	     'https://paletton.com/#uid=a1g440klqlkaOvXgaqBqJg1waaH',
	     'https://fonts.google.com/?preview.text_type=custom',
	     'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
	     'https://flexboxfroggy.com/#de/',
	     'https://codepen.io/r-nabi94/project/editor/ZdJywY',
	     'https://getbootstrap.com/'
	    ];
var i = 2;
var x = 0;
var pressed = false;
function prev(){
	if(pressed == false)
	{
	    document.getElementById("Button").disabled = true;
	}
	else if(pressed == true)
	{
	    document.getElementById("Button").disabled = false;
	}
	if(i < 0 || i == 2) i = images.length;	
	else
	{
	    i = i - 2;
	}
	i--;
	if(i < 0) i = images.length - 1;
	setImgThird();
	i--;
	if(i < 0) i = images.length - 1;;
	setImgSecond();
	i--;
	if(i < 0) i = images.length - 1;
	return setImgFirst();				 
}

function next(){
	pressed = true;
	i++;
	if(i >= images.length - 1) 
	{
	    document.getElementById("Button").disabled = true;
	}
	setImgFirst();
	i++;
	if(i >= images.length - 1) 
	{
	    document.getElementById("Button").disabled = true;
	}
	setImgSecond();
	i++;
	if(i >= images.length - 1) 
	{
	    document.getElementById("Button").disabled = true;
	}
	return setImgThird();			 
}

function setImgFirst(){
	my_link_first.setAttribute('href', links[i]);
	return my_image_first.setAttribute('src', images[i]);
	
}


function setImgSecond(){
	my_link_second.setAttribute('href', links[i]);
	return my_image_second.setAttribute('src', images[i]);
	
}

function setImgThird(){
	my_link_third.setAttribute('href', links[i]);
	return my_image_third.setAttribute('src', images[i]);
	
}
