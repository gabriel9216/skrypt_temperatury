function check(number) {
    if(number=== "" || typeof number !== "number") {
        alert("Prosze wpisać wartość liczbowa");
        return false;
    } else
    return true;
}
function celcjusz()
{
	let number=document.getElementById('number').value;
	let celcjusz=number*'1.8'+'32';
	let result=document.getElementById('result');
	if(check(number)){
		result.innerHTML=number+" stopnie celcjusza to "+celcjusz+" fehrenheitów";
	}

}
function fahrenheit()
{
	let number=document.getElementById('number').value;
	let fahrenheit=(number-'32')/'1.8';
	let result=document.getElementById('result');
	if(check(number)){
			result.innerHTML=number+" fehrenheity to "+fahrenheit+" stopieni celcjusza";
	}
}

