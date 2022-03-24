#Ejercicio 2 Python
#Franco Casavecchia 6ºC

class Alumno:

    def __init__(self,nombre,nota):
        self.nombre = input("Cual es su nombre")
        self.nota = int(input("Cual es su nota"))

    def mostrar(self):
        if nota>=6:
            print("Su nota ",nota,"es aprobada")
        else:
            print("Su nota ",nota,"es desaprobada")

alumno1=Alumno()
Alumno.mostrar()

alumno2 = Alumno()
Alumno.mostrar()
