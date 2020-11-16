# Building

Required node modules needs to be available (npm ci)

Application needs to be within the build image


# Running

By default port 3000 is exposed

The command to get it running is `bin/www`

| Env key | Description | Default |
|--- | --- | --- |
| DB_HOST | Where to find MySQL/MariaDB | localhost |
| DB_USER | Username to connect with | root |
| DB_PW |  Password to connect with | <empty> |
| DB | Database to find mytable in | mydb |


# Exercise

Get this running and have it display "Got results: hello world"


Hint: There is a dump called dump.sql, this needs to be imported into the MySQL / MariaDB database

