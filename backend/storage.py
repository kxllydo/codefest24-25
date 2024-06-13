# import mysql.connector
import json

# def connectSQL ():
#     config = mysql.connector.connect (
#     host="rds-mysql-10mintutorial.c5ki2koeiau0.us-east-1.rds.amazonaws.com",
#     database='dbname',
#     user='masterUsername',
#     password='thisisourmasterpass'
#     )
    
#     return config.cursor()
    # return mysql.connector.connect(**config)

# cursor = conn.cursor()

def childInfo(path):
    """
    Opens a file that contains the "perfect matched" kid
    @param path is the name of SQL table
    @return JSON format about children data
    """
    # Open the JSON file
    with open(f'{path}') as f:
        data = json.load(f)
    
    return data

print(childInfo("C:\\Users\\kelly\\Downloads\\bruh.txt"))
    







