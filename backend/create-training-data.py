import random
import csv
import sqlite3
from generate_data import generate_data

save_csv = True #change this if you want to save to csv or to database

  
num_of_samples = 750

if save_csv:
    headers = ["Kid Age","Kid Gender","Kid Ethnicity","Kid Location", "Kid Number of Siblings", "Disability", "Adult Age", "Adult Gender", "Adult Ethnicity", "Adult Location", "Adult Marital Status", "Adult Income", "Adult Employed", "Adult Disability", "Compatibility"]
    data = generate_data(num_of_samples)
    data.insert(0, headers)
    with open("data.csv", mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerows(data)
else:
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()

    cursor.execute('''CREATE TABLE IF NOT EXISTS training_data
                    (id INTEGER PRIMARY KEY, KidAge INTEGER, KidGender INTEGER, KidEthnicity INTEGER, KidLocation INTEGER, KidHobbies INTEGER, KidHealthConditions INTEGER, KidNumberSiblings INTEGER, KidEducation INTEGER, AdultAge INTEGER, AdultGender INTEGER, AdultEthnicity INTEGER, AdultLocation INTEGER, AdultMaritalStatus INTEGER, AdultIncome INTEGER, AdultOccupation INTEGER, AdultHealthConditions INTEGER, Compatibility INTEGER)''')
    cursor.executemany("INSERT INTO training_data (Kid Age, Kid Gender, Kid Ethnicity, Kid Location, Kid Number of Siblings, Disability, Adult Age, Adult Gender, Adult Ethnicity, Adult Location, Adult Marital Status, Adult Income, Adult Employed, Adult Disability, Compatibility) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", data)

    conn.commit()
    conn.close()