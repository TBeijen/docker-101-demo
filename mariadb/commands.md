Sample commands illustrating volumes and env
============================================

```
# run container
docker run \
  --name mydb \
  -e MYSQL_ROOT_PASSWORD=r00t \
  -e MYSQL_DATABASE=test \
  -e MYSQL_USER=user1 \
  -e MYSQL_PASSWORD=pw1 \
  -v $(pwd)/data:/var/lib/mysql \
  -p 33306:3306 \
  -d \
  mariadb:10.3.6

# connect and create table
mysql -h127.0.0.1 --port=33306 -u user1 -ppw1 test -e "CREATE TABLE test_table (id INT);"
mysql -h127.0.0.1 --port=33306 -u user1 -ppw1 test -e "SHOW TABLES;"

# stop and remove container
docker stop $(docker ps -aq --filter name=mydb)
docker rm $(docker ps -aq --filter name=mydb)

# run container
# (same as above)

# check if table still there
mysql -h127.0.0.1 --port=33306 -u user1 -ppw1 test -e "SHOW TABLES;"
