# UrlShortener
Basic url shortener app in node.js with postgres as the backend.
Two post endpoints to create the custom shorturl and random shorturl.
Wrote a basic hash function from scratch to create a random url.
Created a BloomFilter from scratch with two hash functions to avoid unnecessary db calls.

LIMITATIONS:
BloomFilter is stored in RAM, Eventually has to move it to a WAL or Db or some other persistent place.
