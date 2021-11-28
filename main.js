var my_image = document.querySelector('.my_image');
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
	      'http://paletton.com/wiki/images/thumb/f/fd/Paletton-screenshot.jpg',
	      'https://responsivedesign.is/wp-content/uploads/2019/06/Logo-GoogleFonts-color-background.png',
	      'https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg',
	      'https://miro.medium.com/max/4416/1*WUF8JiQtYZ54xS7t9MhHew.png',
	      'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/8384025b-c4de-4c39-a62d-d5bafb94e02a/1-can-i-use-viewports-opt.png',
	      'https://greatestview.de/static/23d39d1d38f763ab259a7cb3470ea839/98a65/codepen-logo.webp',
	      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png'];


var my_link = document.querySelector('.my_link');
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
	     'https://caniuse.com/?search=flexbox',
	     'https://codepen.io/r-nabi94/project/editor/ZdJywY',
	     'https://getbootstrap.com/'
	    ];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	my_link.setAttribute('href', links[i]);
	return my_image.setAttribute('src', images[i]);
	
}
