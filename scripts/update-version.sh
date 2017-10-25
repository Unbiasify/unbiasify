npm version minor

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

MANIFEST_VERSION=$(cat manifest.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

echo $PACKAGE_VERSION
echo $MANIFEST_VERSION
git checkout master
sed -i "s@$(echo $MANIFEST_VERSION | sed 's/\./\\./g')@$(echo $PACKAGE_VERSION | sed 's/\./\\./g')@g" manifest.json

git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git status
git add .
git commit -m update-manifest-version

git remote add origin-update https://${GH_TOKEN}@github.com/Unbiasify/unbiasify.git
git push --set-upstream origin-update master
git push