# Lunes 19 de diciembre
## 1. Time Converter
```Python
Funcion resultado = timeConverter (seg)
	Definir dia, hr, min Como Real
	dia=0
	hr=0
	min=0
	Si seg>= 86400 Entonces
		dia = seg/86400
		seg= seg% 86400
		hr = seg/3600
		seg= seg% 3600
		min = seg/60
		seg= seg % 60
	Fin Si
	Si seg>= 3600 Entonces
			hr = seg/3600
			seg= seg% 3600
			min = seg/60
			seg= seg % 60
	FinSi
	Si seg>= 60 Entonces
				min = seg/60
				seg= seg% 60
			SiNo
				seg=seg
	Fin Si	
	resultado = Concatenar('days: ', ConvertirATexto(trunc(dia)));
	resultado = Concatenar(resultado, ', hours: ');
	resultado = Concatenar(resultado, ConvertirATexto(trunc(hr)));
	resultado = Concatenar(resultado, ', minutes: ');
	resultado = Concatenar(resultado, ConvertirATexto(trunc(min)));
	resultado = Concatenar(resultado, ', and seconds: ');
	resultado = Concatenar(resultado, ConvertirATexto(trunc(seg)));
Fin Funcion
Algoritmo TimeConverterv1
	Definir seg Como Entero
	Imprimir 'Ingrese el tiempo en segundos'
	Leer seg
	Imprimir timeConverter(seg)
FinAlgoritmo
```
## 2. Compare Distances
``` Python
Funcion resultado <- CompareDistances ()
	Definir number1, positive, negative Como Real
	positive = 0
	negative = 0	
	Para repetir1<-1 Hasta 5 Con Paso 1 Hacer
		Imprimir 'Write a number '
		Leer number1
		Si number1>= 0 Entonces
			positive=positive+number1
		SiNo
			negative = negative+number1
		Fin Si
	Fin Para
	resultado = positive> abs(negative)
Fin Funcion

Algoritmo CompareDistancesv1
	Imprimir CompareDistances()
FinAlgoritmo
```
# Martes 20 de diciembre
## 1. Sum of Pairs
``` Python
Funcion resultado <- sumOfPairs ( )
	Imprimir 'Write a number between 1 and 100'
	leer num1
	operacion1 = num1 % 2
	Si  num1 <=100 & num1 >=0 Entonces
		si operacion1 = 0 Entonces
			num1= num1
		SiNo
			num1 = 0
		FinSi
		Repetir
			Imprimir 'Write a number between 1 and 100'
			leer num2
			operacion2 = num2 % 2
			Si operacion2 = 0 & num2 <=100  & num2>=0 Entonces
				num1 = num1 + num2
			Fin Si
		Mientras Que num2 <=100 & num2 >=0
		resultado = Concatenar('The sum of all the even numbers entered is: ', ConvertirATexto(num1))
	SiNo
		num1= 0
		resultado = Concatenar('The sum of all the even numbers entered is: ', ConvertirATexto(num1))
	Fin Si
Fin Funcion

Algoritmo exampleSumOfPairs
	Imprimir sumOfPairs()
FinAlgoritmo
```
## 2. Mid-point 
``` Python
Funcion resultado <- midPoint (num1,num2)
	resultado = (num1+num2)/2
Fin Funcion

Algoritmo exampleMidpPoint
	Imprimir midPoint(40,-80)
FinAlgoritmo
# no entiendo porque hizo tanto procedimiento en el vídeo☹️
```
# Miércoles 21 de diciembre
## 1. Cashier
``` Python
Funcion resultado <- cashier ( )
	resultado = 1000
	Repetir
		Imprimir 'Select an option:'
		Imprimir 'a. Deposit'
		Imprimir 'b. Withdraw'
		Imprimir 'c. Go out'
		Leer opcion1
		Segun opcion1 Hacer
			'a' | 'A':
				Imprimir 'How much do you want to deposit: '
				Leer deposit
				resultado = resultado+deposit
			'b' | 'B':
				Imprimir 'How much do you want to withdraw: '
				Leer withdraw
				resultado = resultado-withdraw
			'c' | 'C':
			De Otro Modo:
				Imprimir 'Incorrect option, try again'
		Fin Segun
	Hasta Que opcion1 = 'c' | opcion1 = 'C'
Fin Funcion

Algoritmo exampleCashier
	Imprimir cashier()
FinAlgoritmo
```
## 2. Weather Average
``` Python
Funcion resultado <- WeatherAverage ( )
	operacion2 = 0
	Repetir
		Imprimir 'Select an option:'
		Imprimir 'a. Enter degrees celsius'
		Imprimir 'b. Enter degrees fahrenheit'
		Imprimir 'x. Go out'
		Leer opcion1
		Segun opcion1 Hacer
			'a' | 'A':
				Leer celsius
				operacion2 = operacion2+celsius
			'b' | 'B':
				Leer fare
				operacion1 = (fare-32)* (5/9)
				operacion2 = operacion2+operacion1
			'x' | 'X':
			De Otro Modo:
				Imprimir 'Incorrect option, try again'
		Fin Segun
	Hasta Que opcion1 = 'x' | opcion1 = 'X'
	resultado= ConvertirATexto(operacion2/2)
Fin Funcion

Algoritmo WeatherAveragev1
	Imprimir WeatherAverage()
FinAlgoritmo
```
# 22 de diciembre (JavaScript exercises)
## 1. 'IF' statement in JavaScript
``` Javascript
num = 0
if (num >=0) {
  console.log("Positive number");
} 
  else {
  console.log("Negative number");
}
```
## 2. 'WHILE' loop in JavaScript
``` Javascript 
let i = 1
while (i < 10) {
  console.log('The number is '+ i);
  i = i + 1;
}
```
## 3. 'FOR' loop in JavaScript
``` Javascript 
const n = 5;
for (let i = 1; i <= n; i++) {
    console.log('I love JavaScript.');
}
```
