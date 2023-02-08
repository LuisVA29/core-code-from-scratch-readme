[Return](https://github.com/LuisVA29/core-code-from-scratch-readme)
# Lunes 12 de diciembre
## 1. Average sales and commission
``` Python
Algoritmo SalesandCommissions
	Escribir "Write the total number of sales to enter:"
	Leer sales
	i=0
	suma = 0
	Para i<-1 Hasta sales Con Paso 1 Hacer
		Escribir "Write the value of the sale number:", i
		Leer value
		suma= suma+value
	Fin Para
	Escribir "The average sales is $", suma/sales
	Si sales>5 Entonces
		Escribir 'The total amount of the sales is: ', suma
		Escribir "The commission received by the seller is: $", suma*0.15
	SiNo
		Escribir "The commission received by the seller is: $", suma*0.10
	Fin Si
FinAlgoritmo
```
## 2. Even or Odd 
``` Python
Algoritmo EvenordOddv2
	
	Repetir
		Escribir "Write a nunber between 1 and 50"
		Leer data
		operacion = data%2
		Si data >= 1 & data <=50 Entonces
			Si operacion=0 Entonces
				Para secuencia<-0 Hasta data Con Paso 2 Hacer
					Escribir secuencia
				Fin Para
			SiNo
				Para secuencia<-1 Hasta data Con Paso 2 Hacer
					Escribir secuencia
				Fin Para
			Fin Si
			
		SiNo
			Escribir "Invalid number"
		Fin Si
	Mientras Que data>50 | data<=0
FinAlgoritmo
```
# Martes 13 de diciembre
## 1. Full name
``` Python
Algoritmo FullName
	Escribir "Write a name"
	Leer first
	Escribir "Write a last name"
	Leer last
	Dimension cadena1[2]
	cadena1[0] = first
	cadena1[1] = last
	Imprimir Mayusculas(SubCadena(cadena1[0],0,0)), Minusculas(SubCadena(cadena1[0],1,999)), ' ',Mayusculas(SubCadena(cadena1[1],0,0)), Minusculas(SubCadena(cadena1[1],1,999))
FinAlgoritmo
```
## 2. Throw dice 🎲 
``` python
Algoritmo ThrowDice
	Para repetir1<-1 Hasta 10 Con Paso 1 Hacer
		valor1 = Aleatorio(1,6)
		valor2 = Aleatorio(1,6) # me costo porque habia puesto los valores (valor1, valor2) fuera de la función "Para"😶‍🌫️
		Si valor1 = valor2 Entonces
			Escribir valor1, ' ', valor2, 'The dice are the same.'
		SiNo
			Escribir valor1, ' ', valor2
		Fin Si
	Fin Para
FinAlgoritmo
```
# Miércoles 14 de diciembre
## 1. Distance to Zero
``` Python
Algoritmo DistanceToZero
	Definir number1, number2 Como Real
	Escribir 'Write a number'
	Leer number1
	Para repetir1<-1 Hasta 4 Con Paso 1 Hacer
		Escribir 'Write a number'
		Leer number2
		Si abs(number1) < abs(number2) Entonces
			number1 = number2
		Fin Si
	Fin Para
	Imprimir 'The number that is farthest from zero is: ', trunc(number1)
FinAlgoritmo
# tuve que ver el video para encontrarle la logica porque no le entendi muy bien.
# No caí en cuenta de que podía comparar 2 valores jajaj
```
## 2. Toss Coin
``` python
Algoritmo TossCoin
	Escribir 'Enter the name of the first player'
	Leer name1
	Escribir 'Enter the amount to play'
	Leer amount1
	Escribir 'Enter the name of the second player'
	Leer name2
	Escribir 'Enter the amount to play'
	Leer amount2
	Si amount1<=0 & amount2<=0 Entonces
		Escribir 'Game cancelled'
	SiNo
		Si amount1 <= 0 Entonces
			Escribir 'Player: ',name1,' disqualified. ','Player ', Mayusculas(name2), ' won $',amount2
		SiNo
			Si amount2 <= 0 Entonces
				Escribir 'Player: ',name2,' disqualified. ','Player ', Mayusculas(name1), ' won $',amount1
			SiNo
				Si amount1>0 & amount2>0 Entonces
					Si Aleatorio(1,2) = 1 Entonces
						Escribir 'Player wins ', Mayusculas(name1), ' amount won: ', amount2
					SiNo
						Escribir 'Player wins ', Mayusculas(name2), ' amount won: ', amount1
					Fin Si
				Fin Si
			Fin Si
		Fin Si
	Fin Si
FinAlgoritmo
# Fallé en el aleatorio(), porque en vez de poner 'Aleatorio(1,2)=1' puse 'Aleatorio (amount1, amount2)=amount1',
# y lo que pasaba es que si lo repetia 10 veces, algunas veces solo salia el primer nombre. ☹️
```
# Jueves 15 de diciembre
## 1. Total Price
``` Python
Funcion operacion1 <- total (variable,iva)
	operacion1 = variable*(iva/100)
	SI variable > 3000 Entonces
		operacion1 = (variable+operacion1)-((variable+operacion1)*0.10)
	SiNo
		operacion1 = variable + operacion1
	FinSi
Fin Funcion
Algoritmo TotalPrice
	Escribir  "Ingrese el valor del producto"
	leer variable
	Escribir  "Ingrese el IVA"
	leer iva
	Imprimir total(variable,iva)
FinAlgoritmo
#pensé que el usuario tenía que meter los datos 🥲 no me quedó igual a la solución.
```
## 2. Reverse Direction And Size🤯
``` Python
Funcion x <- ReverseDirectionAndSize ( palabra )
	n = Longitud(palabra)
	x =''
	Mientras n>=0 Hacer
		letter = Subcadena(palabra,n,n)
		Si letter = Mayusculas(letter) Entonces
			letter = Minusculas(letter)
		SiNo
			letter= Mayusculas(letter)
		Fin Si
		x = Concatenar(x,letter)
		n= n-1
	Fin Mientras
Fin Funcion
Algoritmo ReverseDirectionAndSize1
	Imprimir 'Ingrese una palabra'
	Leer palabra
	Imprimir ReverseDirectionAndSize(palabra)
FinAlgoritmo
# Tuve que ver un vídeo en youtube para ver como invertir la palabra🥲
# Luego tuve que ver la solución porque no sabía como alternar entre mayúscula y minúscula.😶‍🌫️
# Este ejercicio fue muy complicado para mí.
