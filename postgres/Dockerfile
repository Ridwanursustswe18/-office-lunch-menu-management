FROM postgres:15
RUN apt-get update && apt-get install -y postgresql-contrib
COPY init.sql /docker-entrypoint-initdb.d/

