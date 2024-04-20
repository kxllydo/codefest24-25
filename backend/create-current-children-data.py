import random
import sqlite3


  
num_of_samples = 100

ethnicities = ['African', 'African American', 'Arab', 'Asian', 'Caribbean', 'European', 'Hispanic/Latino', 'Indigenous', 'Middle Eastern', 'Native American', 'Pacific Islander', 'South Asian', 'Southeast Asian']

data = []

for _ in range(num_of_samples):
    data.append([random.randint(1, 18), random.randint(0,1), random.randint(1, len(ethnicities)), random.randint(501, 99950), random.randint(1, 10), random.randint(1,10), random.randint(0,5), random.randint(1,4)])


conn = sqlite3.connect('data.db')
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS current_children
                (id INTEGER PRIMARY KEY, KidAge INTEGER, KidGender INTEGER, KidEthnicity INTEGER, KidLocation INTEGER, KidHobbies INTEGER, KidHealthConditions INTEGER, KidNumberSiblings INTEGER, KidEducation INTEGER)''')
cursor.executemany("INSERT INTO current_children (KidAge, KidGender, KidEthnicity, KidLocation, KidHobbies, KidHealthConditions, KidNumberSiblings, KidEducation) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", data)
conn.commit()
conn.close()
