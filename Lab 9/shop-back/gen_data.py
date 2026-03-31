import requests
import random

# Configuration
API_URL = "http://127.0.0.1:8000/api/products/"

categories = [
    {"id": 1, "name": "Phones and gadgets"},
    {"id": 2, "name": "Computers"},
    {"id": 3, "name": "Household items"},
    {"id": 4, "name": "TV, audio, video"},
    {"id": 5, "name": "Magnum"}
]

# Base names to generate somewhat realistic product names per category
product_templates = {
    1: ["Smartphone", "Tablet", "Smartwatch", "Wireless Earbuds", "Power Bank"],
    2: ["Gaming Laptop", "Office Desktop", "Ultrawide Monitor", "Mechanical Keyboard", "Wireless Mouse"],
    3: ["Robot Vacuum", "Microwave Oven", "Blender", "Electric Kettle", "Air Purifier"],
    4: ["4K Smart TV", "Soundbar System", "Home Theater Projector", "Blu-ray Player", "Bluetooth Speaker"],
    5: ["Fresh Apples", "Whole Milk", "Wheat Bread", "Black Tea", "Dark Chocolate"]
}

def seed_products():
    total_created = 0

    for cat in categories:
        cat_id = cat["id"]
        cat_name = cat["name"]

        print(f"\n--- Generating products for: {cat_name} ---")

        for i in range(1, 21):
            base_name = random.choice(product_templates[cat_id])

            # Construct the JSON payload
            payload = {
                "name": f"{base_name} Model {random.randint(1000, 9999)}",
                "price": round(random.uniform(10.0, 1500.0), 2),
                "description": f"High-quality {base_name.lower()} from the {cat_name} category.",
                "count": random.randint(0, 100),
                "is_active": random.choice([True, True, True, False]), # 75% chance of being active
                "category": cat_id
            }

            # Make the POST request
            try:
                response = requests.post(API_URL, json=payload)

                if response.status_code == 201:
                    print(f"[{i}/20] Created: {payload['name']} (Price: ${payload['price']})")
                    total_created += 1
                else:
                    print(f"[{i}/20] FAILED: {payload['name']} - Status: {response.status_code} - Error: {response.text}")

            except requests.exceptions.ConnectionError:
                print("Error: Could not connect to the server. Is 'python manage.py runserver' running?")
                return

    print(f"\nFinished. Successfully created {total_created} products.")

if __name__ == "__main__":
    seed_products()