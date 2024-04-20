import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import random
import sqlite3

# Load the CSV file
data = pd.read_csv('data.csv')


X = data[data.columns.difference(['Compatibility'])]
y = data['Compatibility']

# a decision tree classifier
clf = DecisionTreeClassifier()

# Train the classifier on the data
clf.fit(X, y)

ethnicities = ['African', 'African American', 'Arab', 'Asian', 'Caribbean', 'European', 'Hispanic/Latino', 'Indigenous', 'Middle Eastern', 'Native American', 'Pacific Islander', 'South Asian', 'Southeast Asian']

num_of_test_parents = 100

test_parents = []
for _ in range(num_of_test_parents):
    test_parents.append([random.randint(18, 90), random.randint(0,1), random.randint(1, len(ethnicities)), random.randint(501, 99950), random.randint(0,1), random.randint(25750, 154500), random.randint(1,20), random.randint(1,10)])


conn = sqlite3.connect('data.db')
cursor = conn.cursor()

cursor.execute("SELECT KidAge, KidGender, KidEthnicity, KidLocation, KidHobbies, KidHealthConditions, KidNumberSiblings, KidEducation FROM current_children;")
conn.commit()
current_children = cursor.fetchall()

test_data = [list(x) + y for x, y in zip(current_children, test_parents)]


accuracy = clf.score(test_data, y)
print(accuracy)

conn.close()
