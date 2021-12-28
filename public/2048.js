var diva=document.querySelector("#boxa");
var divb=document.querySelector("#boxb");
var divc=document.querySelector("#boxc");
var divd=document.querySelector("#boxd");
var dive=document.querySelector("#boxe");
var divf=document.querySelector("#boxf");
var divg=document.querySelector("#boxg");
var divh=document.querySelector("#boxh");

var divi=document.querySelector("#boxi");
var divj=document.querySelector("#boxj");
var divk=document.querySelector("#boxk");
var divl=document.querySelector("#boxl");

var divm=document.querySelector("#boxm");
var divn=document.querySelector("#boxn");
var divo=document.querySelector("#boxo");
var divp=document.querySelector("#boxp");
var alldivs=document.querySelectorAll("div")
var emptyplaces=[];

var a=[[],[],[],[]];
var pos11=random(3);
var pos12=random(3);
var pos21=random(3);
var pos22=random(3);

while(pos11==pos21 && pos12==pos22 )
{
	pos22=random(3)
}

for(i=0;i<4;i++){
	for(j=0;j<4;j++){
		if(i==pos11&&j==pos12){
			a[i][j]=2;
		}

		else if(i==pos21&&j==pos22){
			a[i][j]=2;
		}
		else{
			a[i][j]=0;

		}
	}
}
var temp=a;


divs();
color();
function divs(){
diva.textContent=a[0][0];
divb.textContent=a[0][1];
divc.textContent=a[0][2];
divd.textContent=a[0][3];

dive.textContent=a[1][0];
divf.textContent=a[1][1];
divg.textContent=a[1][2];
divh.textContent=a[1][3];

divi.textContent=a[2][0];
divj.textContent=a[2][1];
divk.textContent=a[2][2];
divl.textContent=a[2][3];

divm.textContent=a[3][0];
divn.textContent=a[3][1];
divo.textContent=a[3][2];
divp.textContent=a[3][3];
}

window.onkeyup = function(event) {
    let key = event.key.toUpperCase();
    if ( key == 'ARROWUP' ) {
       up(); // 'W' key is pressed
    } else if ( key == 'ARROWDOWN' ) {
      down();  // 'D' key is pressed
    }
    else if(key=="ARROWLEFT"){
    	left();
    }
    else if(key=="ARROWRIGHT"){
    	right();
    }
    else{
    	alert("press a valid key")
    }
}

function random(limit){
	return(Math.floor((Math.random() * limit) + 0));
}
function right(){
	var flag=0;
	color();
	var repeat=0;

	for(i=0;i<4;i++){repeat=0;
		for(k=0;k<3;k++){
		 
			for(j=0;j<3;j++){
				if(a[i][j]>0 &&a[i][j+1]==0){
				
					a[i][j+1]=a[i][j];
					flag=1;
					repeat=0;
				
					a[i][j]=0;
				}
				else if(a[i][j]==a[i][j+1]&&a[i][j]*a[i][j+1]!=0&&k==0){
					
					
					a[i][j+1]=a[i][j]+a[i][j+1];
					a[i][j]=0;
					repeat=1;
					j++;

					flag=1;
			
				}
				
			}
		}
	}

    

	if(flag==1){
		fill();
	    divs();
	     color();
	}
	else{checkemptyspaces();
	 if(emptyplaces.length==0){
   		gameover();
   		}else {
   			alert("you cannot do that");
   		}
	}

}

function left(){
var flag=0;
color();
var repeat=0;
for(i=0;i<4;i++){repeat=0;
		for(k=0;k<3;k++){
			
			for(j=3;j>0;j--){
				if(a[i][j]>0&&a[i][j-1]==0){
				
					a[i][j-1]=a[i][j];
				    flag=1;
				    repeat=0;
					a[i][j]=0;
				}
				else if(a[i][j]==a[i][j-1]&&a[i][j]*a[i][j-1]!=0&&k==0){
					
					a[i][j-1]=a[i][j]+a[i][j-1];
					a[i][j]=0;
					repeat=1;
					flag=1;
					j--;
				}
			}
		}
	}
if(flag==1){
	fill();
	divs();
	color();
}else{checkemptyspaces();
	 if(emptyplaces.length==0){
   		gameover();
   		}else {
   			alert("you cannot do that");
   		}
	}

}
function up(){
	var flag=0;
	color();
	var repeat=0;
for(j=0;j<4;j++){repeat=0;
		for(k=0;k<3;k++){
			for(i=3;i>0;i--){
				if(a[i][j]>0&&a[i-1][j]==0){
				
					a[i-1][j]=a[i][j];
					flag=1;
					repeat=0;
				
					a[i][j]=0;
				}
				else if(a[i][j]==a[i-1][j]&&a[i][j]*a[i-1][j]!=0&&k==0){
					

					a[i-1][j]=a[i][j]+a[i-1][j];
					a[i][j]=0;
					repeat=1;
					i--;

					flag=1;
				}
			}
		}
	}
	if(flag==1){
		fill();
		divs();
		color();
	}else{checkemptyspaces();
	 if(emptyplaces.length==0){
   		gameover();
   		}
   		else {
   			alert("you cannot do that");
   		}
	}
	
}


function down(){
	var flag=0;
	color();
	var repeat=0;
for(j=0;j<4;j++){repeat=0;
		for(k=0;k<3;k++){
			for(i=0;i<3;i++){
				if(a[i][j]>0&&a[i+1][j]==0){
				
					a[i+1][j]=a[i][j];
				    flag=1;
				   repeat=0;
					a[i][j]=0;
				}
				else if(a[i][j]==a[i+1][j]&&a[i][j]*a[i+1][j]!=0&&k==0){
				//	if(repeat==1){
						 
					//	repeat=0;
					//	flag=1;
					//	console.log("Entering....");
					//	continue ;
					//}
					a[i+1][j]=a[i][j]+a[i+1][j];
					flag=1;
					repeat=1;
					


					a[i][j]=0;
					i++;
				}
			}
		}
	}
	if(flag==1){
		fill();
	divs();
	color();
	}else{checkemptyspaces();
	 if(emptyplaces.length==0){
   		gameover();
   		}else {
   			alert("you cannot do that");
   		}
	}
	
}

function color()
{
	var divarray=[].slice.call(alldivs);
divarray.forEach(function(yo,index){
	if(index!=0){
	if(yo.textContent==0){
		yo.style.background="black";
		yo.style.color="black";

	}
	else{
		yo.style.background="rgb(5, 53, 73)";
		yo.style.color="white";
	}}
})
}









function fill(){
		checkemptyspaces();
	//console.log(innerindex);

 
   if(emptyplaces.length==0){
   	gameover();
   		}
   		if(emptyplaces.length>0)
   		{
   		  var rand=random(emptyplaces.length-1);
   		
   var newpos=emptyplaces[rand];
   a[newpos[0]][newpos[1]]=2;
  
	   }
}
function gameover(){
var b=[];
   	for(i=0;i<3;i++){
   		for(j=0;j<3;j++){
             if(a[i][j]!=a[i+1][j] && a[i][j]!=a[i][j+1] && a[i][3]!=a[i+1][3]){
              b.push("unique");

             }
   	      }
   	
  
   }       
           if(b.length==9){alert("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Gameover!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")}
           	else{
           		b=[];

           	}
}
function checkemptyspaces(){
	 emptyplaces=[];
	a.forEach(function(array,outerindexx){
		var innerindex=[];
		      array.forEach(function(value,index){
				
				if(value==0){ 
					
				innerindex.push( index);
				}

			})
		    innerindex.forEach(function(value){
		    	emptyplaces.push([outerindexx,value])
		    })
     // 
	})
}

window.addEventListener('load', function(){
    var el = document.getElementById('body')

    var hidetimer = null
    swipedetect(el, function(swipedir){
        if (swipedir != 'none'){
            switch (swipedir){
				case "left":
					left();
					break;
			    case "right":
				right();
				break;
				case "up":
					up();
					break;
					case "down":
						down();
						break;

			}
        }
    })
}, false)
function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}
  