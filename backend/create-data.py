import random
import csv

headers = ["Kid Age","Kid Gender","Kid Ethnicity","Kid Location", "Kid Hobbies", "Kid Health Conditions", "Kid Number of Siblings", "Kid Education", "Adult Age", "Adult Gender", "Adult Ethnicity", "Adult Location", "Adult Marital Status", "Adult Income", "Adult Occupation", "Adult Health Conditions", "Compatibility"]


  
num_of_samples = 1000


ethnicities = ['African', 'African American', 'Arab', 'Asian', 'Caribbean', 'European', 'Hispanic/Latino', 'Indigenous', 'Middle Eastern', 'Native American', 'Pacific Islander', 'South Asian', 'Southeast Asian'];

data =[]
data.append(headers)
for _ in range(num_of_samples):
    data.append([random.randint(1, 18), random.randint(0,1), random.randint(1, len(ethnicities)), random.randint(501, 99950), random.randint(1, 10), random.randint(1,10), random.randint(0,5), random.randint(1,4), random.randint(18, 90), random.randint(0,1), random.randint(1, len(ethnicities)), random.randint(501, 99950), random.randint(0,1), random.randint(25750, 154500), random.randint(1,20), random.randint(1,10), random.randint(0,1)])

with open("data.csv", mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)
