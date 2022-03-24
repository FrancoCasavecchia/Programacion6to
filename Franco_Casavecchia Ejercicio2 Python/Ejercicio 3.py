#Ejercicio 3 Python
#Franco Casavecchia 6ºC

class Triangulo:

    def __init__(self):
        self.lado_uno = int(input("Cuanto mide el lado 1"))
        self.lado_dos = int(input("Cuanto mide el lado 2"))
        self.lado_tres = int(input("Cuanto mide el lado 3"))

    def lado_mayor(self,lado_uno,lado_dos,lado_tres):
        if lado_uno < lado_dos and lado_uno < lado_tres:
            print("El lado 1 es el lado mas largo")

        elif lado_dos < lado_uno and lado_dos < lado_tres:
            print("El lado 2 es el lado mas largo")

        elif lado_tres<lado_uno and lado_tres < lado_dos:
            print("El lado 3 es el lado mas largo")

        elif lado_uno == lado_dos and lado_uno == lado_tres:
            print("Es un triangulo equlatero")

triangulo = Triangulo()
Triangulo.lado_mayor()
