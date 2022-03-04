#!/bin/bash

set -e
run_cmd="dotnet run --server.urls http://*:80"

until dotnet ef database update; do
>&2 echo "Sql server starting up"
sleep 1
done

>&2 echo "Sql server is up - seed stated"

exec $run_cmd