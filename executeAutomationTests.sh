#!/bin/sh
node examples/examplesServer.js &
WEB_PID=$!

sleep 5

for test in ./spec/phantomjs/*.spec.js
do
    echo "Running $test"
    phantomjs --ssl-protocol=any $test
done

kill $WEB_PID
