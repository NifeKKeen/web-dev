from models import Vehicle, Car, Motorcycle

def main():
    sedan1 = Car("Honda", "Odyssey", 1998, 4)
    sedan2 = Car("Merdeces", "Benz", 2020, 4)
    sport_bike = Motorcycle("Yamaha", "R1", 2023, False)

    vehicles = [sedan1, sedan2, sport_bike]

    for vehicle in vehicles:
        print(f"Status check: {vehicle}")

        print(vehicle.display_info())

        print(vehicle.start_engine())
        print()

    print(sedan1.make_sound())
    print(sedan2.make_sound())
    print(sport_bike.do_trick())

if __name__ == "__main__":
    main()