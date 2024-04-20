import mysql.connector

def connectSQL ():
    config = mysql.connector.connect (
    host="rds-mysql-10mintutorial.c5ki2koeiau0.us-east-1.rds.amazonaws.com",
    database='dbname',
    user='masterUsername',
    password='thisisourmasterpass'
    )
    
    return config.cursor()
    # return mysql.connector.connect(**config)

# cursor = conn.cursor()

def childInfo(table, cursor):
    """
    Extracts all the children info from the SQL database
    @param table is the name of SQL table
    @return JSON format about children data
    """

    sql_query = f"SELECT * FROM {table}"
    rows = cursor.fetchall()
    for row in rows:
        print(row)
    cursor.close()

connectSQL()

