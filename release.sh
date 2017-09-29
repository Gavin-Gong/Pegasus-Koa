npm run build-ts
git checkout gh-pages
git add .
git commit -m "release"
git push origin gh-pages -f
echo "released!"
git checkout master -f
rm -rf dist