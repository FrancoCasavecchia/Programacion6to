#Ejercicio 1

print('')
print("De cual numero quiere saber el indice?")
print(1,56,3,4,8)
print('')

num = int(input("Numero:"))
list = [1,56,3,47,8]

def encontrar_ind(list,num):
    return list.index(num)

print("El indice es = ")
print(encontrar_ind(list,num))