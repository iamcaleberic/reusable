console.log('i have a message');
	document.getElementById('cart').addEventListener('submit',estimateTotal);

	function estimateTotal(event){
		event.preventDefault();
		if(document.getElementById('sel').value === '')
		{
			alert('please choose your nationality');
			document.getElementById('sel').focus();
		}
		var fname = document.getElementById('one').value,
			sname=document.getElementById('two').value,
			nationality=document.getElementById('sel').value ,
			shipping = document.getElementById('four').value ,
			sev = parseInt(document.getElementById('sev').value, 10) || 0 ,
			nof = parseInt(document.getElementById('three').value);


		var nums = document.getElementById('cart').y, howMany;
		for (var i = 0;i < nums.length; i++){
			if (nums[i].checked == true){
				howMany = nums[i].value;

			}

		}
		console.log(fname);
		console.log(sname);
		console.log(nationality);
		// console.log(shipping);
		console.log(sev);
		console.log(howMany);

	var taxFactor = 1
	if(nationality === 'BR' ){
		taxFactor = 1.075; // tax in Britain 7.5%
	}


	//  shipping

	var shipping = 0;
	switch(howMany){
		case '150':
			shipping = 500;
			break;
		case '0' :
			shipping = 0;
			break;
	}
	var shippingCost = (nof + sev) * shipping;
	
	var subtotal = ((nof * 50)+ sev) * taxFactor;
	var estimate =  '$' + (subtotal + shippingCost).toFixed(2); 
	document.getElementById('t-estimate').value = estimate;

	document.getElementById('results').innerHTML = 'Nationality:' + nationality +'<br>';

	document.getElementById('results').innerHTML += 'Shipping Cost: '+ shippingCost+'<br>';
	document.getElementById('results').innerHTML += "Tax:"+((taxFactor-1 ) * 100).toFixed(2)+ '%' +"<br>";


	}

	var me =  document.createElement('h3');
	var me2 = document.createElement('p');
	magic.appendChild(me);
	magic.appendChild(me2);
	// me.innerHTML = 'I am magic huh';
	var myTexta = document.createTextNode('Me coming soon !!')
	var myTextc = document.createTextNode('Me coming soon !!')


	var myText = document.createTextNode('Middlesex University London');
	me.appendChild(myText);
	me2.appendChild(myTextc);

	var me4 = document.createElement('li');
	var seci = abc.getElementsByTagName('li')[1];

	abc.insertBefore(me4 ,seci);
	me4.appendChild(myTexta);


	var yaay = document.getElementById('jon');
	 yaay.onclick = function(){
	 	alert('I dont have mi gold');
	 }

	var namef = document.getElementById('one');
	namef.onfocus = function(){
		if (namef.value == 'First Name'){
			namef.value = '';
		}
	};

	namef.onblur = function(){
		if (namef.value == '') {
			namef.value = 'First Name'
		}
	}

	function smessage(){
		alert('I was to appear in a few');
	}
	setTimeout(smessage, 5000);

	var imgc = document.getElementById('image');

	var imageArray = ['h.jpg' , 'home.jpg'];
	var imageIndex = 0;

	function changeImage(){
		image.setAttribute("src" , imageArray[imageIndex]);
		imageIndex ++ ;
		if (imageIndex >= imageArray.length){
			imageIndex = 0;

		}
	}
	var intervalHandle = setInterval(changeImage, 5000);

	imgc.onclick = function(){
		clearInterval(intervalHandle);
	}

	var hello = document.getElementById('hello');
	hello.style.float ='right';
	hello.style.color ='red' ;
	function changePage(){
		document.getElementById('kali').onclick = function(){
			if (document.getElementById('kali').className == 'li') {
				document.getElementById('kali').className == '';
			}
			else{
				document.getElementById('kali').className = 'li';
			}
		};

	}
	changePage();


	var currentPos = 0 ;
	var intervalHandles;

	function beginAnimate(){
		document.getElementById('pp').style.position = 'absolute';
		document.getElementById('pp').style.left = '0px';
		document.getElementById('pp').style.top = '100px';
		document.getElementById('pp').style.backgroundColor = 'red';

		intervalHandles = setInterval(animateBox, 50);
	}

	function animateBox(){
		currentPos +=5;
		document.getElementById('pp').style.left = currentPos + 'px';
			if (currentPos > 900) {
				clearInterval(intervalHandles);
				document.getElementById('pp').style.position = '';
				document.getElementById('pp').style.left = '';
				document.getElementById('pp').style.top = '';
			}
	}
	$(document).ready(function(){
		setTimeout(beginAnimate,5000);

	});

 	// jQuery('#tom').addClass('highlight');
 	$('#tom').addClass('highlight');

 	// $('#tom').hide(4000);

 	$('#tom').fadeOut(4000);

 	$('#hello').click(function(){
 			$("#hello").text('Stop clicking me!!');
 		}
 		);


 	var myRequest;
	if (window.XMLHttpRequest){
		myRequest = new XMLHttpRequest();

	}else if(window.ActiveXObject){
		myRequest = new ActiveXObject('Microsoft.XMLHTTP');

	}

	myRequest.onreadystatechange = function(){
		console.log("we were called");
		console.log(myRequest.readyState);
		if (myRequest.readyState === 4){
			var p = document.createElement('p');
			var t = document.createTextNode(myRequest.responseText);
			p.appendChild(t);
			document.getElementById('aj').appendChild(p);
		}
	};


	myRequest.open('GET', 'file:///home/cal/Documents/js/simple.txt', true);

	myRequest.send(null);


	// constructor

	function Player(n,s,r){
		this.name = n;
		this.score = s;
		this.rank = r ;

	}
	Player.prototype.logInfo = function(){
		console.log("I am :", this.name);
	}

	Player.prototype.promote = function(){
		this.rank ++;
		console.log("My rank:", this.rank);
	}

	var fred = new Player("Fred", 1000 , 5);
	fred.logInfo();
	fred.promote();


	// timer
	var secondsRemaining;
	var intervalHandle;
	function resetPage(){
		document.getElementById('inputArea').style.display = 'block';
	}
	function tick(){
		var timeDisplay = document.getElementById('time');

		var min =  Math.floor(secondsRemaining / 60 );
		var sec = secondsRemaining - (min * 60);

		if (sec < 10 ){
			sec = '0' + sec;
		}

		var message = min.toString()+ ':' + sec;

		timeDisplay.innerHTML = message;


		if (secondsRemaining === 0){
			alert("Done");
			clearInterval(intervalHandle);
			resetPage();
		}
		secondsRemaining -- ;
	}


	function startCountdown(){

		var minutes = document.getElementById('minutes').value;

		if (isNaN(minutes)){
			alert('Please enter a number');
			return;
		}

		secondsRemaining = minutes * 60 ;

		intervalHandle = setInterval(tick, 1000);

		document.getElementById('inputArea').style.display = 'none';
	}

	$(document).ready(function(){
	var inputMinutes = document.createElement('input');
	inputMinutes.setAttribute('id', 'minutes');
	inputMinutes.setAttribute('type', 'text');


	var startButton =  document.createElement('input');
	startButton.setAttribute('type', 'button');
	startButton.setAttribute('value', 'start countdown');

	startButton.onclick = function(){
		startCountdown();
	} ;


	document.getElementById('inputArea').appendChild(inputMinutes);
	document.getElementById('inputArea').appendChild(startButton);


});


	function adjustStyle(){
		var width =  0 ;

		if (window.innerHeight){
			width = window.innerWidth;
		}else if(document.documentElement && document.document.clientHeight){
			width = document.documentElement.clientWidth;


		}else if (document.body){
			width = document.body.clientWidth;
		}


		if (width< 600) {
			document.getElementById('css').setAttribute('href' , 'two.css');
		}else{
			document.getElementById('css').setAttribute('href', 'index.css' );
		}
	}
window.onresize = function(){
	adjustStyle();
};