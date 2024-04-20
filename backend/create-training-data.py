import random
import csv
import sqlite3

save_csv = False #change this if you want to save to csv or to database

  
num_of_samples = 1000

ethnicities = ['African', 'African American', 'Arab', 'Asian', 'Caribbean', 'European', 'Hispanic/Latino', 'Indigenous', 'Middle Eastern', 'Native American', 'Pacific Islander', 'South Asian', 'Southeast Asian']

data =[]

for _ in range(num_of_samples):
    data.append([random.randint(1, 18), random.randint(0,1), random.randint(1, len(ethnicities)), random.randint(501, 99950), random.randint(1, 10), random.randint(1,10), random.randint(0,5), random.randint(1,4), random.randint(18, 90), random.randint(0,1), random.randint(1, len(ethnicities)), random.randint(501, 99950), random.randint(0,1), random.randint(25750, 154500), random.randint(1,20), random.randint(1,10), random.randint(0,1)])

if save_csv:
    headers = ["Kid Age","Kid Gender","Kid Ethnicity","Kid Location", "Kid Hobbies", "Kid Health Conditions", "Kid Number of Siblings", "Kid Education", "Adult Age", "Adult Gender", "Adult Ethnicity", "Adult Location", "Adult Marital Status", "Adult Income", "Adult Occupation", "Adult Health Conditions", "Compatibility"]

    data.insert(0, headers)
    with open("data.csv", mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerows(data)
else:
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()

    cursor.execute('''CREATE TABLE IF NOT EXISTS training_data
                    (id INTEGER PRIMARY KEY, KidAge INTEGER, KidGender INTEGER, KidEthnicity INTEGER, KidLocation INTEGER, KidHobbies INTEGER, KidHealthConditions INTEGER, KidNumberSiblings INTEGER, KidEducation INTEGER, AdultAge INTEGER, AdultGender INTEGER, AdultEthnicity INTEGER, AdultLocation INTEGER, AdultMaritalStatus INTEGER, AdultIncome INTEGER, AdultOccupation INTEGER, AdultHealthConditions INTEGER, Compatibility INTEGER)''')
    cursor.executemany("INSERT INTO training_data (KidAge, KidGender, KidEthnicity, KidLocation, KidHobbies, KidHealthConditions, KidNumberSiblings, KidEducation, AdultAge, AdultGender, AdultEthnicity, AdultLocation, AdultMaritalStatus, AdultIncome, AdultOccupation, AdultHealthConditions, Compatibility) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", data)

