import random
import csv
import sqlite3

save_csv = True #change this if you want to save to csv or to database

  
num_of_samples = 1000

ethnicities = ['African', 'African American', 'Arab', 'Asian', 'Caribbean', 'European', 'Hispanic/Latino', 'Indigenous', 'Middle Eastern', 'Native American', 'Pacific Islander', 'South Asian', 'Southeast Asian']

zip_codes = [19134, 19144, 19125, 19146, 19131, 19131, 19111]
postal_codes_philadelphia = [
    "19102", "19103", "19104", "19106", "19107", "19111", "19114", "19115", "19116", "19118",
    "19119", "19120", "19121", "19122", "19123", "19124", "19125", "19126", "19127", "19128",
    "19129", "19130", "19131", "19132", "19133", "19134", "19135", "19136", "19137", "19138",
    "19139", "19140", "19141", "19142", "19143", "19144", "19145", "19146", "19147", "19148",
    "19149", "19150", "19151", "19152", "19153", "19154"
]

data =[]

for _ in range(num_of_samples):
    data.append([random.randint(1, 18), random.randint(0,1), random.randint(1, len(ethnicities)), zip_codes[random.randint(0, len(zip_codes) - 1)], random.randint(1, 10), random.randint(1,10), random.randint(0,5), random.randint(1,4), random.randint(18, 90), random.randint(0,1), random.randint(1, len(ethnicities)), postal_codes_philadelphia[random.randint(0, len(postal_codes_philadelphia) - 1)], random.randint(0,1), random.randint(25750, 154500), random.randint(1,20), random.randint(1,10), random.randint(0,1)])

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

    conn.commit()
    conn.close()