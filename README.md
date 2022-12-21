# UrlShortener
Basic url shortener app in Node.js with Postgres as the database.
  - Two post endpoints to create the custom shorturl and random shorturl.
  - Wrote a basic Hash function from scratch to create a random url.
  - Created a BloomFilter from scratch with two hash functions to avoid unnecessary db calls.

LIMITATIONS:
  - BloomFilter is stored in RAM, Eventually has to move it to a WAL or Db or some other persistent place.
