#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'shawa.dev' > CNAME

git init
git checkout -B gh-pages
git add -A
git commit --allow-empty -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:mo-shawa/mo-shawa.github.io.git gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mo-shawa/z-islam-home.git main:gh-pages

cd -
