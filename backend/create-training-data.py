import random
import csv
import sqlite3

save_csv = True #change this if you want to save to csv or to database

  
num_of_samples = 1000

ethnicities = [
    'African American',
    'Arab',
    'Asian',
    'Caribbean',
    'Caucasian',
    'Hispanic/Latino',
    'Indigenous',
    'Middle Eastern',
    'Native American',
    'Pacific Islander'
]

zip_codes = [19134, 19144, 19125, 19146, 19131, 19131, 19111]
postal_codes_philadelphia = [
    "19102", "19103", "19104", "19106", "19107", "19111", "19114", "19115", "19116", "19118",
    "19119", "19120", "19121", "19122", "19123", "19124", "19125", "19126", "19127", "19128",
    "19129", "19130", "19131", "19132", "19133", "19134", "19135", "19136", "19137", "19138",
    "19139", "19140", "19141", "19142", "19143", "19144", "19145", "19146", "19147", "19148",
    "19149", "19150", "19151", "19152", "19153", "19154"
]

data = []

for _ in range(num_of_samples):
    kid_age = random.randint(1, 18)
    kid_gender = random.choice(["male", "female"])
    kid_ethnicity = ethnicities[random.randint(0,len(ethnicities) - 1)]
    kid_zip_code = zip_codes[random.randint(0, len(zip_codes) - 1)]
    kid_has_disability = random.randint(0, 1)
    kid_has_sibling = random.randint(0,1)

    adult_age = random.randint(18, 90)
    adult_gender = random.choice(["male", "female"])
    adult_ethnicity = ethnicities[random.randint(0,len(ethnicities) - 1)]
    adult_zip_code = postal_codes_philadelphia[random.randint(0, len(postal_codes_philadelphia) - 1)]
    adult_marital_status = random.randint(0,1)
    adult_income = random.randint(35000, 1000000)
    adult_has_job = random.randint(0,1)
    adult_has_disability = random.randint(0,1)

    compatibility = random.randint(0,1)
    
    if adult_income > 80000 and kid_has_sibling:
        if (random.randint(1,2)) == 2:

            compatibility = 1

    if kid_has_disability == adult_has_disability:

        if (random.randint(1,3)) == 3:

            compatibility = 0

    if kid_zip_code == adult_zip_code:
        
        if (random.randint(1,4)) == 4:

            compatibility = 0

    if kid_ethnicity == adult_ethnicity:
        
        if (random.randint(1,5)) == 5:

            compatibility = 0


    data.append([kid_age, kid_gender, kid_ethnicity, kid_zip_code, kid_has_sibling, kid_has_disability , adult_age, adult_gender, adult_ethnicity, adult_zip_code, adult_marital_status, adult_income, adult_has_job, adult_has_disability, compatibility])

if save_csv:
    headers = ["Kid Age","Kid Gender","Kid Ethnicity","Kid Location", "Kid Number of Siblings", "Disability", "Adult Age", "Adult Gender", "Adult Ethnicity", "Adult Location", "Adult Marital Status", "Adult Income", "Adult Employed", "Adult Disability", "Compatibility"]

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