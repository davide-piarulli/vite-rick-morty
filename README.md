VITE Rick & Morty
===

https://github.com/user-attachments/assets/ee10a9cc-7c94-47f4-a9b8-1e0df6acd180

Nuovo progetto utilizzando Vite e Vue 3 e definire i componenti necessari per strutturare il layout.
Al caricamento della pagina, effettuare una chiama ajax all’API di Rick & Morty: https://rickandmortyapi.com/api/character e con i dati restituiti, stampare una card per ogni carta.

Documentazione:
https://rickandmortyapi.com/documentation



Quindi nell’header o in un componente dedicato (es SearchBar.vue) mettere un campo di ricerca per nome.
All’invio della ricerca verranno configurati i criteri di ricerca presenti nello store, generato un $emit che invocherà una nuova chiamata API in App.vue
BONUS:
aggiungere la ricerca per status
aggiungere la ricerca per species
aggiungere un componente che si occupa della paginazione
far generare dinamicamente gli status e le species per le option di ricerca
