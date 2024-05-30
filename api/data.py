import pandas as pd
from sqlalchemy import create_engine
import requests
import schedule
import time
from datetime import datetime, timedelta

# Replace these variables with your database credentials
user = 'root'
password = ''
host = 'localhost'
port = '3306'  # Default MySQL port
database = 'attendapp'
#'ENGINE': 'django.db.backends.mysql',
 ##       
import requests
import base64

#VARIABLE FOR API
empcode = "ALL"
previousdate = (datetime.now() - timedelta(days=1)).strftime('%d-%m-%Y')
presentdate = datetime.now().strftime('%d-%m-%Y')

api_url = "https://api.etimeoffice.com/api/DownloadInOutPunchData?Empcode={empcode}&&FromDate={previousdate}&&ToDate={presentdatee}"
api_key = "ORANGEDATATECH:HR@Orange:UY7g2#!gWEA6kB8:true"


# Encode the API key in base64
base64_api_key = base64.b64encode(api_key.encode()).decode()

headers = {
    "Authorization": f"Basic {base64_api_key}",
    "Content-Type": "application/json",
}

try:
    response = requests.get(api_url, headers=headers)

    if response.status_code == 200:
        entry_dataALL = response.json()
    else:
        print(f"Error: {response.status_code} - {response.text}")

except Exception as e:
    print(f"An error occurred: {e}")
##
# Example DataFrame
import pandas as pd

# Your JSON data
json_data = entry_dataALL

# Extract the 'PunchData' key
punch_data = json_data['InOutPunchData']

# Create a DataFrame with the desired columns
df = pd.DataFrame(punch_data, columns=['Empcode', 'INTime', 'OUTTime', 'WorkTime', 'OverTime', 'BreakTime', 'Status', 'DateString', 'Remark', 'Erl_Out', 'Late_In',
                                       'Name'])


# Create SQLAlchemy engine
engine = create_engine(f'mysql+pymysql://{user}:{password}@{host}:{port}/{database}')

# Store DataFrame in MySQL database
table_name = 'employee1'
df.to_sql(name=table_name, con=engine, if_exists='replace', index=False)

print(f'DataFrame successfully stored in table "{table_name}"')

# Schedule the task
schedule.every().day.at("10:30").do(fetch_and_store_data)
schedule.every().day.at("02:00").do(fetch_and_store_data)

print("Scheduler started. Waiting for the next scheduled task...")

# Run the scheduler
while True:
    schedule.run_pending()
    time.sleep(1)