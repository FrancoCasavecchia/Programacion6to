#Ejercicio 2

print('')
print("¿Que año desea saber si es bisiesto?")
year = int(input("Año: "))

bisiesto = False


def year_bisiesto(year):
    if year % 100 != 0:
       print("El año ",year,"no es/fue bisiesto")

    elif year % 4 == 0 or year % 400 == 0 :
        print("El año ",year,"es/fue bisiesto" )



print(year_bisiesto(year))

