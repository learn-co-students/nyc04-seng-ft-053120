# Intro to SQL & ORMs

## SQL

#### SWBATs

* [ ] Explain persistence and the need for using SQL
* [ ] Define SQL
* [ ] Explain the difference between SQLite3 and SQL
* [ ] Explore provided data through SQLite Browser
* [ ] Define CRUD
* [ ] Perform CRUD actions on a single table
* [ ] Perform CRUD actions across related tables


_____

<p>
<details>
<summary> What can I do with data? Why is data important in our applications?</summary>
<pre><code>
<li>Enter information in a form/get user input</li>
<li>Collect data & infer conclusions (analyze)</li>
<li>Ask questions about it or make changes to it</li>
</code></pre>
</details>
</p>
<p>
<details>
<summary> Why is persistance important? How have we been persisting data so far?</summary>
<pre>
So far in our apps, we've been using variables and data structures to persist information. For example, we've been using <code>@@all << self</code> in order to store all of our instances of a class.

There are a few issues that arise with how we've been persisting data. The main issue is that our data is only persisted for the runtime of our application. Once we exit our application, we lose all the data we had forever, so it's not persisted in the long run.
</pre>
</details>
</p>
<p>
<details>
<summary>What is a (relational) database?</summary>
<pre><code>
A relational database is a common type of database whose data is stored in tables.
</code></pre>
</details>
</p>
<p>
<details>
<summary>What kinds of databases are there?</summary>
<pre><code>
<li>Relational database (SQL database) -> SQLite3, Postgresql, MySQL, MSSQL</li>
<li>NoSQL database -> MongoDB, redis, GraphQL</li>
</code></pre>
</details>
</p>
<p>
<details>
<summary>What is SQL?</summary>
<pre>
Structured Query Language

SQL is a declarative programming language. It reads like you're telling the computer to do something in English.
</pre>
</details>
</p>
<p>
<details>
<summary>What is CRUD?</summary>
<pre>
<li>Create</li>
<li>Read</li>
<li>Update</li>
<li>Delete</li>

You can break almost any web applications into these four different actions. 

Regarding databases, we can create rows from the a table in the database, read data from the database, update data, or delete rows, etc.
</pre>
</details>
</p>

<br>
* How does an app like Instagram use CRUD?

C -> create content, post images, post comments, sign up for the app

R -> comments on photos, number of likes, bio, photos

U -> update our profile photo/username, update captions, update settings, update password

D -> delete photos, account, comments



___

### Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `game-reviews.db` file from this repo. 
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below



### Player -< Review >- Game


#### Challenges

1. Write the SQL to return all of the rows in the games table

```sql
SELECT games.title
FROM games;
```


2. Write the SQL to select the game with the title "Mario Kart 64"

```sql
SELECT games.title
FROM games
WHERE games.title like 'mario Kart 64';
```


3. Change the query above to include all games with the word 'Mario' in their title

```sql
SELECT games.title
FROM games
WHERE games.title like '%mario%';
```


4. Write the SQL to display the games' titles next to their rating

```sql
SELECT games.title, reviews.rating
FROM games
JOIN reviews ON games.id = reviews.game_id;
```


5. Write the SQL to show the game title, the review rating, and the player's name

```sql
SELECT games.title, reviews.rating, players.name
FROM games
JOIN reviews ON games.id = reviews.game_id
JOIN players ON players.id = reviews.player_id;
```


6. Write the SQL to create a review

```sql
INSERT INTO reviews(game_id, player_id, rating, comment)
VALUES (15, 18, 4, "Could be better......")
```



_______

## ORMs


#### SWBATs

* [ ] Define Object Relational Mapper (ORM)
* [ ] Explain how the `sqlite` gem works as a driver or wrapper around SQL
* [ ] Perform persistent CRUD actions on a model
* [ ] Distinguish between ORM and SQL
* [ ] Demonstrate that ORMs are the pattern connecting scripting languages and databases

________

<p>
<details>
<summary>What is an ORM?</summary>
<pre>
Object Relational Mapper
<br>
<li>Object -> instance of a class, the data/behavior of a ruby object</li>
<li>Relational -> relational databases, how classes interact</li>
<li>Mapper -> takes data and turns it into a new format</li>

We are going to take information from our relational database and map it to a Ruby Object, so an ORM is like the layer that will connect SQL into Ruby.
</pre>
</details>
</p>

<br><br>
How do the following SQL concepts translate to Ruby?:
<details>
<summary>Table</summary>
<pre>
class
</pre>
</details>
<details>
<summary>Row</summary>
<pre>
instance
</pre>
</details>
<details>
<summary>column/cell</summary>
<pre>
instance variable
</pre>
</details>

#### Challengs
- [ ] Rewrite `Game.all` with logic to retrieve data from the database
- [ ] Create a `Game#save` method that stores a new instance in the database



______

#### Resources
- [Bundler documentation](https://bundler.io/docs.html)
- [SQLite documentation](https://www.sqlite.org/lang.html)
- [SQLite3 gem](https://github.com/sparklemotion/sqlite3-ruby)
- [Why we need to sanitize database queries](https://xkcd.com/327/)