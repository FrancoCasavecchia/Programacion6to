#Ejercicio 4 Python
#Franco Casavecchia 6ºC

class Operaciones:

    def __init__(self):
        self.numero_uno = int(input("Cual es el numero 1"))
        self.numero_dos = int(input("Cual es el numero 2"))
        self.suma()
        self.resta()
        self.multi()
        self.divi()


    def suma(self):
        self.numero_final_suma = self.numero_uno + self.numero_dos
        print("La suma de los numeros da ",numero_final_suma)

    def resta(self):
        self.numero_final_resta = self.numero_uno - self.numero_dos
        print("La resta de los numeros da ",numero_final_resta)

    def multi(self):
        self.numero_final_multi = self.numero_uno * self.numero_dos
        print("La multiplicacion de los numeros da ",numero_final_multi)

    def divi(self):
        self.numero_final_divi = self.numero_uno/self.numero_dos
        print("La division da como resultado da ",numero_final_divi)


operacio = Operaciones()
Operaciones.__init__()