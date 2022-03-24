#Ejercicio 5

print('')
print("Ingrese una palabra para saber si es capicua")
pal = str(input("Palabra :"))


def capicua(pal) :
    if pal == pal[::-1] :
        print("True")
    else:
        print("False")

print(capicua(pal))
