# https://vitejs.dev/guide/static-deploy.html#github-pages
#!/usr/bin/env sh
set -e

npm run build

cd dist
git init
git checkout -b main
git add -A
git commit -m "deploy"
git push -f git@github.com:mikelarrieta/mikelarrieta.github.io.git main

cd -
rm -rf ./dist
