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
console.log(pos11,pos12,pos21,pos22);
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

console.log(a);
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

    
	console.log(a);
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
   console.log(emptyplaces);
 
   if(emptyplaces.length==0){
   	gameover();
   		}
   		if(emptyplaces.length>0)
   		{
   		  var rand=random(emptyplaces.length-1);
   		
   var newpos=emptyplaces[rand];
   a[newpos[0]][newpos[1]]=2;
   console.log(a);
   console.log(emptyplaces.length);
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
   	
  
   }       console.log(b);
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