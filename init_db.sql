
DROP TABLE IF EXISTS rawpacketdata;

CREATE TABLE rawpacketdata (
    _index VARCHAR (50) primary key,
    packet_loss numeric,
    time_stamp TIMESTAMP,
    dest_site VARCHAR (50),
    src_site VARCHAR (50)
);


