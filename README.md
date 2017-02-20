# hydrajs
Client side API for Hydra

## Tests
Set HYDRA_HOSTNAME, RHN_USER, and RHN_PASS environment variables.

    export HYDRA_HOSTNAME=;export RHN_USER=;export RHN_PASS=
    npm run test
    
When testing through Webstorm create a new Mocha test
   
* Environment Variables: Make sure to set the same ones as above HYDRA_HOSTNAME, RHN_USER,RHN_PASS
* Extra Mocha Options: `--timeout 10000 --compilers ts:ts-node/register`
* File Patterns: `src/**/*.test.ts`

## Contributing
Fork and add to your `.git/config`

    [remote "upstream"]
	url = https://github.com/redhataccess/hydrajs.git
	fetch = +refs/heads/*:refs/remotes/upstream/*

## Release process

Since we are now pushing to gitlab we aren't pushing to NPM.  Follow these instructions to release.

* Bump the version in package.json, for example 0.0.99
* Tag the release: `git tag 0.0.99`
* push to gitlab: `git push gitlab --tags`
* Now you can install that tagged version in the end user app, ex.: `npm install --save-dev git+ssh://git@gitlab.cee.redhat.com:smendenh/hydrajs#0.0.99`
