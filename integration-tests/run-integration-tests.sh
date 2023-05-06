#!/bin/bash

RESET='\033[0m'
GREEN='\033[38;5;2m'
RED='\033[38;5;1m'

export TEST_URL="http://resume:3000/resume"
COMPOSE_LOCATION='./integration-tests/docker-compose.yml'
INTEGRATION_TESTS_LOCATION="./integration-tests"

playwrightContainer="integration-tests-playwright-1"
resumeImages=$(docker images -q resume)
playwrightImages=$(docker images -q playwright)

if [[ -z $resumeImages ]] || [[ -z $playwrightImages ]] || [[ $1 == "--build" ]]; then
  npm ci
  docker build -t playwright -f $INTEGRATION_TESTS_LOCATION/Dockerfile.playwright .
  docker build -t resume -f $INTEGRATION_TESTS_LOCATION/Dockerfile.resume .
fi

docker compose --file $COMPOSE_LOCATION up --detach

testOutput=$(docker exec $playwrightContainer npx playwright test)
testResult=$?

copyFiles () {
  files=$1

  for file in $files; do
    containerDirectory=$(dirname "$file")
    hostDirectory="${containerDirectory/\/app/.}"
    filename=$(basename $file)

    mkdir -p "$hostDirectory"
    docker cp $playwrightContainer:$file "$hostDirectory/$filename"
  done
}

listDockerContents () {
  directory=$1

  search='find $(pwd) ! -type d'
  command="cd $directory && $search"
  docker exec $playwrightContainer /bin/bash -c "$command"
}

screenshotFiles=$(listDockerContents $INTEGRATION_TESTS_LOCATION/screenshot-tests.spec.ts-snapshots)
copyFiles "$screenshotFiles"

testResultFiles=$(listDockerContents ./test-results)
copyFiles "$testResultFiles"

playwrightReportFiles=$(listDockerContents ./playwright-report)
copyFiles "$playwrightReportFiles"

docker compose --file $COMPOSE_LOCATION down

reset='\033[0m'
green='\033[32;42m'
red='\033[31;41m'
if [ $testResult -ne 0 ]; then
  echo -e "${RED}TESTS FAILED${CLEAR}"
  exit 1
else
  echo -e "${GREEN}TESTS PASSED${CLEAR}"
fi