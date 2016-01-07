var clickedTime;
			var createdTime;
			var reactTime;
			
			function dotGen(){
				var time = Math.random();
				time = Math.floor(time*5000);
				var randomColor = Math.floor(Math.random()*16777215).toString(16);
				var ranNumb = Math.floor((Math.random()*500)+1);
				console.log(randomColor);

				setTimeout(function(){
					if(Math.random()>0.5){
						document.getElementById("box1").style.borderRadius="50%";
					}else{
						document.getElementById("box1").style.borderRadius="none";
					}
					document.getElementById("box1").style.display="block";
					document.getElementById("box1").style.backgroundColor="#"+randomColor;
					document.getElementById("box1").style.position="relative";
					document.getElementById("box1").style.top=ranNumb+"px";
					document.getElementById("box1").style.left=ranNumb+"px";
					createdTime=Date.now();
				}, time);
			}

			dotGen();

			document.getElementById("box1").onclick=function() {
				clickedTime=Date.now();
				reactTime=(clickedTime-createdTime)/1000;
				this.style.display="none";
				document.getElementById("time").innerHTML=reactTime;
				dotGen();
			}
