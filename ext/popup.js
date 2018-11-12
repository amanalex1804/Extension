
function click(e){

//console.log(e.target.id); 

//console.log(images[e.target.id]);
//console.log(document.body.style.backgroundImage); 
//chrome.tabs.executeScript( null, {code:"var x = 10; x"},
   //    // if(e.target.id=='s1'){
   // 	 console.log("why"); 
   // 	 href
   // }
      
 //  document.body.style.backgroundImage='url('+images[e.target.id]+')';
 //  console.log(document.body.style.backgroundImage);
	 chrome.tabs.executeScript(null,
 		{code:"document.body.style.backgroundImage='url('"+images[e.target.id]+"')'"});
	 	
}

document.addEventListener('DOMContentLoaded',function(){
	var divs=document.querySelectorAll('div');

	for(var i=0;i<divs.length;++i){ 
		divs[i].addEventListener('click',click);
	}
});

//window.onload=function(){alert("loaddd");}


 var images={
 	s1: 'https://i.imgur.com/VKQIhtg.jpg',
 	s2: 'https://images5.alphacoders.com/523/thumb-1920-523395.jpg',
 	s3: 'https://wallpapersmug.com/download/1920x1080/73df39/thanos-artwork-with-infinity-stone.jpg',
 	s4: 'https://seedroid.com/img/post/covers/1024/com.braveandbold.harleyquinnhdwallpaperlockscreen.jpg',
 	s5: 'http://epicwallpaperz.com/wallpaper-hd/captain-america-wallpapers-phone-On-wallpaper-hd.jpg'
 
 };
