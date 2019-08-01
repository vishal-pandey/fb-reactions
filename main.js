window.onload = ()=>{

	console.log("Hello");
	var radius = 100;
	var i = -radius;
	var state = 0;
	setInterval(()=>{
		var x = i;
		var y = Math.sqrt((radius*radius) - (i*i));
		if (x > radius || y > radius || x < -radius || y < -radius) {
			state = state==0?1:0;
		}
		if (state) {
			i = i-1
			x = -Math.sqrt((radius*radius) - (i*i));
			y = -i;
		}
		else{
			i = i+1
		}
		document.querySelector('.c1').style = "transform: translateX("+x+"px) translateY("+y+"px);"
		console.log("x = "+x);
		console.log("y = "+y);
	}, 10)
}
