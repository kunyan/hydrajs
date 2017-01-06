# hydrajs
Client side API for Hydra

# Tests
Set HYDRA_HOSTNAME, RHN_USER, and RHN_PASS environment variables.

    export HYDRA_HOSTNAME=;export RHN_USER=;export RHN_PASS=
    npm run test
    
When testing through Webstorm create a new Mocha test
   
* Environment Variables: Make sure to set the same ones as above HYDRA_HOSTNAME, RHN_USER,RHN_PASS
* Extra Mocha Options: `--timeout 10000 --compilers ts:ts-node/register`
* File Patterns: `src/**/*.test.ts`

# Contributing
Fork and add to your `.git/config`

    [remote "upstream"]
	url = https://github.com/redhataccess/hydrajs.git
	fetch = +refs/heads/*:refs/remotes/upstream/*
