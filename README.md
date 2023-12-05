# Argentina Election 2023

This is a personal project whose mission is to experiment with the **RESIUM** library.

I created an application where you can obtain the results of the 2023 presidential election in Argentina.

- You can interact with the map.
- Get state results.
- Basic information about the election.

In Argentina, the electoral system allows 3 instances of elections to be held:

- PASO
- General (First Round)
- Ballotage (Second Round)

I used the public API [DINE](https://resultados.mininterior.gob.ar/desarrollo).

Stack of technologies used:

- [Vite React](https://v2.vitejs.dev/guide/)
- [Cesium / Resium](https://resium.reearth.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://docs.pmnd.rs/zustand/)
- [React Query](https://tanstack.com/query/v3/docs/react/overview)

### ✨ Local environment set up

```bash
git clone https://github.com/CarlosEduardoBotero/resium-argentina-election.git

cd resium-argentina-election

npm i

# copy example _.env to .env.local
cp _.env .env.local

# development
npm run dev
```
