	function exercicio01()
	{
	    let numero, quadrado, cubo;
	
	    numero = Number(document.getElementById("numero").value);
	
	    quadrado = numero * numero;
	    cubo = numero * numero * numero;
	
	    document.getElementById("mensagem").innerHTML = "<p style='color : red'>" + 
	    "Número é: " + numero + "<br>" + 
	    "Quadrado é: " + quadrado + "<br>" + 
	    "Cubo é: " + cubo + "<br>" +
	     "</p>";
	}
	
	function exercicio02()
	{
	    let temperatura, celsius
	
	    temperatura = Number(document.getElementById("temperatura").value);
	
	    celsius = (temperatura - 32) * 5 / 9
	
	    document.getElementById("mensagem").innerHTML = "<p style='color :  #FF00FF'>" + "A temperatura em graus Fahtenheit foi: " + temperatura + "<br>" + "A temperatura em graus celsius é: " + celsius + "<br>" + "</p>";
	
	}
	
	function exercicio3()
	{
	 let taxa, tempo, valorp
	 
	 valor = Number(document.getElementById("valor").value);
	 taxa = Number(document.getElementById("taxa").value);
	 tempo = Number(document.getElementById("tempo").value);
	
	 valorp = valor + (valor * ((taxa*taxa) / 100) * tempo)
	
	 document.getElementById("mensagem").innerHTML = "<p style='color : #00CED1'>" + "o valor da parcela é: " + valorp + "<br>" + "</p>";
	}
	
	function exercicio4()
	{
	let altura, base
	
	altura = Number(document.getElementById("altura").value);
	base = Number(document.getElementById("base").value);
	
	area = (base*altura)/2
	
	document.getElementById("mensagem").innerHTML = "<p style='color : #00CED1'>" + "o valor da area é: " + area + "<br>" + "</p>";
	}
	
	function exercicio5()
	{
	    let lado
	
	    lado = Number(document.getElementById("altura").value);
	
	    area = lado*lado
	
	    document.getElementById("mensagem").innerHTML = "<p style='color : #00CED1'>" + "o valor da area é: " + area + "<br>" + "</p>";
	}
