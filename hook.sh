#!/bin/sh

apikey="117be57682d7fe7cfc485b7f306da8e174"
projet="Fatboar-jeu-concours"
echo ${apikey}
# branch=$(git rev-parse --symbolic --abbrev-ref $1)

token=$(curl -u "gogs:117be57682d7fe7cfc485b7f306da8e174" 'https://jenkins.fatboar.site/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)')

echo "Token : " ${token}
#curl -X POST -u "Gogs:${apikey}" -H ".crumb:${token}" http://jenkins.fatboar.site/job/${projet}/job/api-docker-config/build
