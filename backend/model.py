import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import random

# Load the CSV file
data = pd.read_csv('data.csv')


X = data[data.columns.difference(['Compatibility'])]
y = data['Compatibility']

# a decision tree classifier
clf = DecisionTreeClassifier()

# Train the classifier on the data
clf.fit(X, y)

ethnicities = ['African', 'African American', 'Arab', 'Asian', 'Caribbean', 'European', 'Hispanic/Latino', 'Indigenous', 'Middle Eastern', 'Native American', 'Pacific Islander', 'South Asian', 'Southeast Asian']

test = [random.randint(1, 18), random.randint(0,1), random.randint(1, len(ethnicities)), random.randint(501, 99950), random.randint(1, 10), random.randint(1,10), random.randint(0,5), random.randint(1,4)]



accuracy = clf.score(X, y)
print(accuracy)
