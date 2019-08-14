import psycopg2
from psycopg2 import IntegrityError
from config import config

params = config()
conn = psycopg2.connect(**params)
cur = conn.cursor()

with open("init_db.sql", "r") as f:
    commands = f.read()


cur.execute(
    """
    DROP TABLE IF EXISTS rawpacketdata;

    CREATE TABLE rawpacketdata (
        _index VARCHAR (50) primary key,
        packet_loss numeric,
        time_stamp TIMESTAMP,
        dest_site VARCHAR (50),
        src_site VARCHAR (50)
    );
    
    INSERT INTO rawpacketdata (_index) values (5);
    """
)

conn.commit()
conn.close()