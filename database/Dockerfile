FROM postgres:11.5-alpine

RUN mkdir -p /data
COPY ./tickets.csv /data
COPY fatboar.sql /docker-entrypoint-initdb.d/
RUN chown postgres /data
RUN chmod +w /data
