npm run build
git checkout gh-pages
git add .
git commit -m "release"
git push origin gh-pages
echo "released!"
git checkout master