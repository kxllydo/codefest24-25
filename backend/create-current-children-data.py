import random
import csv
import sqlite3
from generate_data import generate_data

save_csv = True

num_of_samples = 750

if save_csv:
    headers = ["Kid Age", "Kid Gender", "Kid Ethnicity", "Kid Location", "Kid Number of Siblings", "Disability"]
    data = generate_data(num_of_samples)

    data = [[row[0], row[1], row[2], row[3], row[4], row[5]] for row in data]

    data.insert(0, headers)
    with open("available_adoptees.csv", mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerows(data)
