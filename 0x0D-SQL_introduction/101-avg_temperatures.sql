-- This script imports the table dump into the hbtn_0c_0 database
-- and displays the average temperature by city in Fahrenheit, ordered by temperature (descending)

-- Import the table dump into the hbtn_0c_0 database
mysql -u <username> -p hbtn_0c_0 < path/to/table_dump.sql

-- Query the average temperature by city, in Fahrenheit
SELECT city, ROUND(AVG((temperature * 1.8) + 32), 2) AS avg_temp_f
FROM temperatures
GROUP BY city
ORDER BY avg_temp_f DESC;
