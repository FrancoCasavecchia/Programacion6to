#Ejercicio 4
print('')
print("Que  largo quiere que tenga su lista")
lar = int(input("Largo :"))
print('')

list = []
x=0

while x < lar :
    for x in range(lar) :
        num_list = int(input("Ingrese un numero :"))
        list.append(num_list)
        x = x + 1

print("La lista quedo asi ",list)
print('')

def ordenar_list(list):             #bubblesort
    for _ in range(len(list)):
        for i in range(len(list) - 1):
            if list[i] > list[i + 1]:
                list[i], list[i + 1] = list[i + 1], list[i]
    print("La lista ordenada quedo asi :" ,list)

print(ordenar_list(list))


