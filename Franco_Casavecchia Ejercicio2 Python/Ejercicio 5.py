#Ejercicio 5 Python
#Franco Casavecchia 6ºC

class Persona:

        def __init__(self,nombref,edadf):
                self.nombre = nombref
                self.edad = edadf

class Empleado(Persona):
    def __init__(self,nombref,edadf):
        super().__init__(nombref,edadf)
        self.sueldo = int(input("Ingrese sueldo mensual: $"))

    def impuestos(self):
        if self.sueldo > 3000:
            print("Es obligatorio que pague impuestos")
        else:
            print("No necesita pagar impuestos")


nombre_input = str(input("Ingrese su nombre:"))
edad_input = int(input("Ingrese su edad:"))

persona1 =Persona(nombre_input,edad_input)
empleado1 = Empleado(nombre_input,edad_input)
empleado1.impuestos()
