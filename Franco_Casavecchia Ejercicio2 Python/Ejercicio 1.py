#Ejercicio 1 Python
#Franco Casavecchia 6ºC

class Persona:
    def __init__(self,nombre):
        self.nombre=input(str("Cual es su nombre "))

    def mostrar(self):
        print("Su nombre es",self.nombre)



persona1 = Persona()
Persona.mostrar()

perosna2 = Persona()
Persona.mostrar()

