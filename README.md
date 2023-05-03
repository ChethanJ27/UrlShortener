# UrlShortener
Basic url shortener app in Node.js with Postgres as the database.
  - Provides three APIs - one to generate short URLs based on user-specified inputs, one to generate random short URLs, and one to retrieve the original long URL associated with a short URL.
  - Wrote a basic Hash function from scratch to create a random url.
  - Implemented a bloom filter to reduce database queries, improving performance and reducing resource usage.

LIMITATIONS:
  - BloomFilter is stored in RAM, Eventually has to move it to a WAL or Db or some other persistent place.
