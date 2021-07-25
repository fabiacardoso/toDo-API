# Crie um novo repositório na linha de comando

echo "# API-to-do-server" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/fabiacardoso/API-to-do-server.git
git push -u origin main

# … Ou envie um repositório existente a partir da linha de comando

git remote add origin https://github.com/fabiacardoso/API-to-do-server.git
git branch -M main
git push -u origin main