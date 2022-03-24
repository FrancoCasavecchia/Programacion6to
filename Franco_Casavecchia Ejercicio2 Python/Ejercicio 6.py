#Ejercicio 6 Python
#Franco Casavecchia 6ºC

class Familia:

    def __init__(self, papa, mama,hijos=[]):
        self.padre = papa
        self.madre = mama
        self.hijos = hijos



    def __str__(self):
        salida =self.padre + "," + self.madre
        for hi in self.hijos:
            salida = salida + "," + hi
        return (salida)


familia1 = Familia("Axel","Paulina",["Ira","Kia"])
print(familia1)