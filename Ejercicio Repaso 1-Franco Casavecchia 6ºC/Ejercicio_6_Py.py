#Ejercicio 6

print('')
print("Ingrese la palabra")
pal = str(input("Palabra :"))
print('')


def contador_de_vocales(pal):
	voc = 0

	for vocales in pal:
		if vocales.lower() in "aeiouéáíóú":
			voc += 1
	print("El numero de vocales es de ",voc)



print(contador_de_vocales(pal))