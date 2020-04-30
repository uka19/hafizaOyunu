var time = 0;
var scoresMove = document.getElementsByClassName("scores")[0];
var scoresTime = document.getElementsByClassName("scores")[1];
var cards1 = ["gc1.jpg","gc2.jpg","gc1.jpg","gc3.jpg","gc8.jpg","gc2.jpg","gc4.jpg","gc3.jpg","gc4.jpg","gc5.jpg","gc7.jpg","gc5.jpg","gc7.jpg","gc8.jpg","gc6.jpg","gc6.jpg"];
var cards2 = ["gc8.jpg","gc1.jpg","gc6.jpg","gc5.jpg","gc7.jpg","gc4.jpg","gc2.jpg","gc3.jpg","gc3.jpg","gc2.jpg","gc4.jpg","gc7.jpg","gc5.jpg","gc6.jpg","gc1.jpg","gc8.jpg"];
var cards3 = ["gc1.jpg","gc8.jpg","gc6.jpg","gc2.jpg","gc8.jpg","gc6.jpg","gc1.jpg","gc2.jpg"];
var cards4 = ["gc2.jpg","gc4.jpg","gc6.jpg","gc3.jpg","gc2.jpg","gc6.jpg","gc3.jpg","gc4.jpg"];
var cards5 = ["gc7.jpg","gc5.jpg","gc4.jpg","gc1.jpg","gc4.jpg","gc5.jpg","gc7.jpg","gc1.jpg","gc8.jpg"];
var cards6 = ["gc3.jpg","gc6.jpg","gc1.jpg","gc2.jpg","gc6.jpg","gc3.jpg","gc2.jpg","gc1.jpg","gc4.jpg"];


var karma = Math.floor(Math.random() * 2);
var hak=0,bilinen=0,hamle=0;
var selected1,selected2;
var element1;

function addBlock(x){
	document.getElementById("menu").remove();
	var gameArea = document.createElement("div");
	gameArea.id = "gameArea";
	document.getElementById("content").appendChild(gameArea);

	if(x == 9){
		gameArea.style.width = "315px";
	}
	for (let i = 0; i < x; i++) {
		var div = document.createElement("div");
		div.className="block";

		var front_image = document.createElement("img");
		var back_image = document.createElement("img");

		front_image.className = "front_image";
		back_image.className = "back_image";

		front_image.style.border = "solid";
		front_image.style.borderRadius="15px";
		back_image.style.border = "solid";
		back_image.style.borderRadius="15px";

		//back_image.src = "assets/"+cards1[i];
		mixCard(back_image,x,i);
		front_image.style.backgroundColor = "white";
		
		div.appendChild(back_image);
		div.appendChild(front_image);
		
		gameArea.appendChild(div);
	}
	
  	var arr = document.getElementsByClassName("front_image");
  	for (let k = 0; k < arr.length; k++) {
  		arr[k].style.display = "block";
  		arr[k].addEventListener("click",function(){
			arr[k].style.visibility = "hidden";
			hak++;
			if(hak==1){
				switch(x){
					case 16:
						if(karma==0){
							selected1 = cards1[k];
						}else{
							selected1 = cards2[k];
						}
					break;
					case 8:
						if(karma==0){
							selected1 = cards3[k];
						}else{
							selected1 = cards4[k];
						}
					break;
					case 9:
						if(karma==0){
							selected1 = cards5[k];
						}else{
							selected1 = cards6[k];
						}
					break;
				}
				
				element1 = arr[k];
			}
			if(hak==2){
				switch(x){
					case 16:
						if(karma==0){
							selected2 = cards1[k];
						}else{
							selected2 = cards2[k];
						}
					break;
					case 8:
						if(karma==0){
							selected2 = cards3[k];
						}else{
							selected2 = cards4[k];
						}
					break;
					case 9:
						if(karma==0){
							selected2 = cards5[k];
						}else{
							selected2 = cards6[k];
						}
					break;
				}
				
				if(selected1 == selected2){
					bilinen++;
					
				}else{
					document.addEventListener("click",handler,true);
					setTimeout(function () {
					  element1.style.visibility = "visible";
						arr[k].style.visibility = "visible";
						document.removeEventListener('click', handler,true);
					}, 1000);
					
				}
				hak=0;
				hamle++;
				scoresMove.innerHTML = "Hamle: "+hamle;
				switch(x){
					case 16:
						if(bilinen == 8){
							alert("Bitirme Zamani: "+time+" Hamle Sayisi: "+hamle);
							location.reload();
						}
					break;
					case 8:
						if(bilinen == 4){
							alert("Bitirme Zamani: "+time+" Hamle Sayisi: "+hamle);
							location.reload();
						}
					break;
					case 9:
						if(bilinen == 4){
							alert("Bitirme Zamani: "+time+" Hamle Sayisi: "+hamle);
							location.reload();
						}
					break;

				}
				
			}
			
		}); 
  	}
	
	var div = document.createElement("div");
	div.id = "clear";
	gameArea.appendChild(div);
	
	setInterval(function () {
	  time ++;
	  scoresTime.innerHTML ="Zaman: "+time;

	}, 1000);
}
function handler(e){
    if(e.target.className=="front_image"){
		e.stopPropagation();
		e.preventDefault();
	}
}
function mixCard(back_image,x,i){
	switch(x){
		case 16:
			if(karma==0){
				back_image.src = "assets/"+cards1[i];
			}else{
				back_image.src = "assets/"+cards2[i];
			}
		break;
		case 8:
			if(karma==0){
				back_image.src = "assets/"+cards3[i];
			}else{
				back_image.src = "assets/"+cards4[i];
			}

		break;
		case 9:
			if(karma==0){
				back_image.src = "assets/"+cards5[i];
			}else{
				back_image.src = "assets/"+cards6[i];
			}
		break;
	}

}


