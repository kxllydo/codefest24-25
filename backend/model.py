import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import random
import sqlite3
import csv
from generate_data import generate_data
from sklearn.preprocessing import StandardScaler
import pickle

#
# Load the CSV file
data = pd.read_csv('data.csv')

import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier
from sklearn import datasets

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(data.iloc[:, :-1], data.iloc[:, -1], test_size=0.04, random_state=259)

# Assuming X_train is your training data
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)

# Create an MLPClassifier (neural network) model
model = MLPClassifier(hidden_layer_sizes=(26,), max_iter=1000, random_state=259)

# Train the model on the training data
model.fit(X_train_scaled, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = np.mean(y_pred == y_test)
print(f"Accuracy: {accuracy}")


# save
with open('model.pkl','wb') as f:
    pickle.dump(model,f)
