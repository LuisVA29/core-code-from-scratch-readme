# Lunes 5 de diciembre
## 1. Simple Calculator
```python
Algoritmo SimpleCalculator
	Definir a, b, suma, resta, multi, div Como Real
	Definir opc Como Caracter
	Leer a,b
	Imprimir "¿Qué operación desea realizar? (ingresar +, -, *, /)"
	Imprimir "1. Suma ( + )"
	Imprimir "2. Resta ( - )"
	Imprimir "3. Multiplicación ( * )"
	Imprimir "4. División ( / )"
	Leer opc
	si	opc = "+" Entonces
		Imprimir "Realizando operación ", a, " + ",b
		suma = a+b
		Imprimir "El resultado de la suma es: ", suma
		SiNo
		Si	opc = "-" Entonces
			Imprimir "Realizando operación ", a, " - ",b
			resta = a-b
			Imprimir "El resultado de la resta es: ", resta	
		SiNo
		Si	opc = "*"	Entonces
			Imprimir "Realizando operación ", a, " * ",b
			multi = a*b
			Imprimir "El resultado de la multiplicación es: ", multi
		SiNo
			
		Si	opc = "/"	Entonces
			Imprimir "Realizando operación ", a, " / ",b
			div = a/b
			Imprimir "El resultado de la división es: ", div
		SiNo
			Imprimir "La operación no es válida?"
		FinSi
		FinSi
		FinSi
	FinSi
FinAlgoritmo
FinAlgoritmo
```
## 2. Special Number
```python
Algoritmo SpecialNumber
	Leer n
	Si n = 100 Entonces
		Imprimir 'This is a special number'
	FinSi
	Si (n % 10 == 0) & (n < 1000) & (n != 100) Entonces
		Imprimir 'This is almost special'
	SiNo
		Imprimir 'Just a regular number'
	FinSi
FinAlgoritmo
```
# Martes 6 de diciembre
## 1. Simple calculator (with switch)
```python
Algoritmo SimpleCalculatorv2
	Definir a, b, suma, resta, multi, div Como Real
	Definir opc Como Caracter
	Imprimir "====== Simple Calculator ======"
	Leer a,b
	Imprimir "¿Qué operación desea realizar? (ingresar +, -, *, /)"
	Imprimir "1. Suma ( + )"
	Imprimir "2. Resta ( - )"
	Imprimir "3. Multiplicación ( * )"
	Imprimir "4. División ( / )"
	Leer opc
	Segun opc Hacer
		"+" : 
			Imprimir "Realizando operación: ", a, " + ",b
			suma = a+b
			Imprimir "El resultado de la suma es: ", suma
		"-" :
			Imprimir "Realizando operación ", a, " - ",b
			resta = a-b
			Imprimir "El resultado de la resta es: ", resta
		"*" :
			Imprimir "Realizando operación ", a, " * ",b
			multi = a*b
			Imprimir "El resultado de la multiplicación es: ", multi
		"/" :
			si	b==0 Entonces
				Imprimir "La operación no es válida."
			SiNo
				div = a/b
				Imprimir "Realizando operación ", a, " / ",b
				Imprimir "El resultado de la división es: ", div
			FinSi
		De Otro Modo:
			Imprimir "La operación no es válida."
	FinSegun
FinAlgoritmo
```
##2. Multi Option Program
```python
Algoritmo MultiOptionP
	Imprimir "========== Multi Opción =========="
	Imprimir "Opciones disponibles: "
	Imprimir "1. Sumar de dos numeros"
	Imprimir "2. Imprimir dia de la semana"
	Imprimir "3. Calcular longitud de texto"
	Imprimir "Ingrese la opcion seleccionada:"
	Leer opc
	Segun opc Hacer
		
		1 :
			Imprimir "Ingrese los números que desea sumar: "
			Leer a,b
			suma = a+b
			Imprimir "La suma de los dos números es ", suma
		2 :
			Imprimir "Ingrese el número de la semana (del 1 al 7)"
			Leer dia
			Segun dia Hacer
				1:
					Imprimir "Domingo"
				2:
					Imprimir "Lunes"
				3:
					Imprimir "Martes"
				4:
					Imprimir "Miércoles"
				5:
					Imprimir "Jueves"
				6:
					Imprimir "Viernes"
				7:
					Imprimir "Sábado"
				De Otro Modo:
					Imprimir "El dato ingresado es inválido."
			FinSegun
		3 :
			Imprimir "Ingrese el texto:"
			Leer text
			Imprimir "La longitud del texto es de: " Longitud(text)
		De Otro Modo:
			Imprimir "La opción no está disponible."
	FinSegun
	Imprimir "========== Fin =========="
FinAlgoritmo
```
# Miércoles 7 de diciembre
## 1. Multiplication tables
```Python
Algoritmo MultiplicationTables
	Definir num, tabla Como Entero
	
	Escribir "========== Multiplication Tables =========="
	Escribir "Ingrese la tabla a calcular:"
	Leer tabla
	num=1
	Mientras num <= 10 Hacer
		Escribir tabla, " * ", num, " = ", num*tabla
		num = num+1
	Fin Mientras
FinAlgoritmo
```
## 2. Simple Calculator with Do While
``` Python
Algoritmo SimpleCalculatorv3
	Definir a, b, suma, resta, multi, div Como Real
	Definir opc Como Caracter
	Repetir
		Imprimir "============= Simple Calculator ============="
		Leer a,b
		Imprimir "¿Qué operación desea realizar? (ingresar +, -, *, /)"
		Imprimir "1. Suma ( + )"
		Imprimir "2. Resta ( - )"
		Imprimir "3. Multiplicación ( * )"
		Imprimir "4. División ( / )"
		Leer opc
		Segun opc Hacer
			"+" : 
				Imprimir "Realizando operación: ", a, " + ",b
				suma = a+b
				Imprimir "El resultado de la suma es: ", suma
			"-" :
				Imprimir "Realizando operación ", a, " - ",b
				resta = a-b
				Imprimir "El resultado de la resta es: ", resta
			"*" :
				Imprimir "Realizando operación ", a, " * ",b
				multi = a*b
				Imprimir "El resultado de la multiplicación es: ", multi
			"/" :
				si	b==0 Entonces
					Imprimir "La operación no es válida."
				SiNo
					div = a/b
					Imprimir "Realizando operación ", a, " / ",b
					Imprimir "El resultado de la división es: ", div
				FinSi
			De Otro Modo:
				Imprimir "La operación no es válida."
		FinSegun
		Imprimir "¿Desea realizar una nueva operación?"
		Imprimir "1. SI"
		Imprimir "2. NO"
		Leer opc2
	Hasta Que  opc2=2
	Imprimir "==================== FIN ===================="
FinAlgoritmo
```
# Jueves 8 de diciembre
## 1. Multiplication Tables with For
```Python
Algoritmo MultiplicationTablesv2
	Definir num Como Entero
	Repetir
		Escribir "=========== Multiplication Tables ============"
		Escribir "Ingrese la tabla a calcular"
		Leer num
		
		Para i<-0 Hasta 10 Con Paso 1 Hacer
			Escribir num, " * ", i, " = ", i*num
		Fin Para
		Escribir "¿Desea calcular otra tabla?"
		Escribir "1. Si"
		Escribir "2. No"
		leer opc
	Mientras Que opc = 1
	Escribir "==================== Fin ====================="
FinAlgoritmo
```
## 2. Ascending and Descending Numbers
```Python
Algoritmo AscendingandDescendingNumbers
	Definir num Como Real
	Repetir
	Escribir "====== Ascending and Descending Numbers ======"
	Escribir "Ingrese número"
	Leer num
	Escribir "Operaciones disponibles"
	Escribir "1. Imprimir en orden ascendente"
	Escribir "2. Imprimir en orden descendente"
	Escribir "Ingrese operación a ejecutar"
	Leer opc
	Segun opc Hacer
		1: 
			Para i<-0 Hasta num Con Paso 1 Hacer
				Imprimir i
			Fin Para
		2:
			Para i<-num Hasta 0 Con Paso -1 Hacer
				Imprimir i
			Fin Para
		De Otro Modo:
			Imprimir "Opción errónea"
	Fin Segun
	Escribir "¿Desea ingresar otro número?"
	Escribir "1. Si"
	Escribir "2. No"
	leer opc
Mientras Que opc = 1
Escribir "==================== Fin ====================="
FinAlgoritmo
```
## 3. Greetings
```Python
Algoritmo Greetings
	Definir saludos Como Entero
	Imprimir "========== Cheers =========="
	opc= "Si"
	saludos = 0
	Mientras opc = "Si"  Hacer
		Imprimir "Ingrese la hora actual (0-23):"
		Leer hora
		Si hora >=0 & hora<=12 Entonces
			Imprimir "Buenos dias"
		SiNo
			Si hora >=13 & hora<=18 Entonces
				Imprimir "Buenas tardes"
			SiNo
				Si hora >=19 & hora<=23 Entonces
					Imprimir "Buenas noches"
				SiNo
					Imprimir "Dato incorrecto"
				Fin Si
			Fin Si
		Fin Si
		saludos<-saludos+1;
		Imprimir "¿Desea continuar? Si/No"
		Leer opc
		
	Fin Mientras
	Escribir "Cantidad de saludos realizados: ",saludos
FinAlgoritmo
```
