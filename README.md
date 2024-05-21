
### Pour installer les dépendances
```bash
npm ci
```
ou
```bash
pnpm install --frozen-lockfile
```

### Pour lancer la base de données et le serveur
```bash
npm run start:postgres
```
ou
```bash
pnpm run start:postgres
```

### Pour lancer les tests
```bash
npm run test:e2e:postgres
```
ou
```bash
pnpm run test:e2e:postgres
```

### En complément (Frontend next.js) : si vous voulez tester le frontend, il faut relancer le serveur avec la commande start:all

### Pour installer les dépendances du frontend
```bash
npm install:frontend
```
ou
```bash
pnpm install:frontend
```

### Pour lancer le serveur et le frontend
```bash
npm run start:all
```
ou
```bash
pnpm run start:all
```






