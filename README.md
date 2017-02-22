# hydrajs
Client side API for Hydra

## Tests
Set HYDRA_HOSTNAME, RHN_USER, and RHN_PASS environment variables.
```shell
export HYDRA_HOSTNAME=;export RHN_USER=;export RHN_PASS=
npm run test
```  

* Environment Variables: Make sure to set the same ones as above HYDRA_HOSTNAME, RHN_USER,RHN_PASS
* File Patterns: `src/**/*.test.ts`

#### Running specific tests
`.only` could help your save time when you do TDD, but don't forgot remove `.only` before commit it.
```javascript
import test from 'ava';
test.only('should do something', async t => {
  const caseNumber = '00023622';
  const kase = await getCase();
  t.is(kase.CaseNumber, caseNumber);
});
```

## Contributing
1. Fork https://gitlab.cee.redhat.com/redhataccess/hydrajs to yours
2. Clone the forked project
3. Add remote upstream
```shell
cd hydrajs
git remote add upstream git@gitlab.cee.redhat.com:redhataccess/hydrajs.git
```
4. Sync up with upstream
```shell
git checkout master
git pull --rebase upstream master
```
5. Commit & Push
```shell
git add .
git commit
git push -u origin your_branch
```
6. Create a Merge Request from gitlab

## Release process

Since we are now pushing to gitlab we aren't pushing to NPM.  Follow these instructions to release.

* Bump the version in package.json, for example 0.0.99
* Tag the release: `git tag 0.0.99`
* push to upstream: `git push upstream --tags`
* Now you can install that tagged version in the end user app, ex.: `npm install --save-dev git+ssh://git@gitlab.cee.redhat.com:redhataccess/hydrajs#0.0.99`
