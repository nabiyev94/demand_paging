var slider_img = document.querySelector('.w');
var linkPages = [
  '<div class="w"><a href="https://www.youtube.com/channel/UCX6b17PVsYBQ0ip5gyeme-Q" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/en/e/e9/Crash_Course_logo.png"></a></div>', 
  '<div class="w"><a href="https://www.youtube.com/"><img src="https://i0.wp.com/blog.indiefolio.com/wp-content/uploads/2017/08/YTLogo_old_new_1680-1.gif?fit=800%2C600&ssl=1" heigth="92" width="92"></a></div>', 
  '<div class="w"><a href="https://uspace.univie.ac.at/"><img src="https://spl-ksa.univie.ac.at/fileadmin/user_upload/s_spl24/uspace_logo.png" width="150" height="150"></a></div>'];
var i = 0;

function prev(){
	if(i <= 0) i = linkPages.length;	
	i--;
	return setPage();			 
}

function next(){
	if(i >= linkPages.length-1) i = -1;
	i++;
	return setPage();			 
}

function setPage(){
	return w.setAttribute('class', linkpages[i]);
	
}
