class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.is_running = False

    def start_engine(self):
        self.is_running = True
        return f"The {self.year} {self.make} {self.model}'s engine is now running."

    def stop_engine(self):
        self.is_running = False
        return f"The {self.year} {self.make} {self.model}'s engine is turned off."

    def display_info(self):
        return f"Generic Vehicle Info: {self.year} {self.make} {self.model}"

    def __str__(self):
        engine_status = "running" if self.is_running else "off"
        return f"[{self.year} {self.make} {self.model} | Engine: {engine_status}]"


class Car(Vehicle):
    def __init__(self, make, model, year, num_doors):
        super().__init__(make, model, year)
        self.num_doors = num_doors

    def display_info(self):
        return f"Car Info: {self.year} {self.make} {self.model} with {self.num_doors} doors."

    def make_sound(self):
        return f"The {self.make} honks: Beep beep!"


class Motorcycle(Vehicle):
    def __init__(self, make, model, year, has_sidecar):
        super().__init__(make, model, year)
        self.has_sidecar = has_sidecar

    def display_info(self):
        sidecar_status = "with a sidecar" if self.has_sidecar else "without a sidecar"
        return f"Motorcycle Info: {self.year} {self.make} {self.model} {sidecar_status}."

    def do_trick(self):
        if self.has_sidecar:
            return f"The {self.make} cannot do a wheelie safely with a sidecar."
        return f"The {self.make} is doing a wheelie!"