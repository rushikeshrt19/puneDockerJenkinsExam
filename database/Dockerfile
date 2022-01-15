FROM mysql

COPY db.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD "root"

ENV MYSQL_DATABASE "JAN15"

EXPOSE 3306

