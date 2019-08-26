#!/bin/sh

apikey="117be57682d7fe7cfc485b7f306da8e174"
projet="Fatboar-jeu-concours"
echo ${apikey}
# branch=$(git rev-parse --symbolic --abbrev-ref $1)
branch=$(git rev-parse --abbrev-ref HEAD)

token=$(curl -u "gogs:117be57682d7fe7cfc485b7f306da8e174" 'https://jenkins.fatboar.site/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)')

echo "Branch : " ${branch}
curl -X POST -u "gogs:${apikey}" -H ".crumb:${token}" https://jenkins.fatboar.site/job/${projet}/job/${branch}/build
