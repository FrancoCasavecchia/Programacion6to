#ejercicio 3

print('')
print("De que caracter quiere que sea la tabla?")

car = str(input("Caracter :"))
print('')

print("Con que altura y con que ancho")
al = int(input("Alto de la tabla :"))
an = int(input("Ancho de la tabla :"))
print('')

def tabla(car,al,an):
    for i in range(al) :
        print(an*car)


print(tabla(car,al,an))