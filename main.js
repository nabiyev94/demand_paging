var my_image = document.querySelector('.my_image');
var images = ['https://upload.wikimedia.org/wikipedia/en/e/e9/Crash_Course_logo.png', 
	      'https://i0.wp.com/blog.indiefolio.com/wp-content/uploads/2017/08/YTLogo_old_new_1680-1.gif?fit=800%2C600&ssl=1',
	      'https://static.facebook.com/images/whatsapp/www/whatsapp-promo.png', 
	      'https://miro.medium.com/max/1000/1*VsJQWtP7CO7J-lFdNpDF1g.png" width="120', 
	      'https://spl-ksa.univie.ac.at/fileadmin/user_upload/s_spl24/uspace_logo.png" width="150" height="150'];
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
	return my_image.setAttribute('src', images[i]);
	
}
