<h1 align= "center">
What's For Dinner?
</h1>

<p align="center">
  <a href="https://github.com/sarahdepalo/whats-for-dinner"><strong>Check Out The Frontend Code »</strong></a>
</p>

The *What's For Dinner* API is a small API built to serve data to the [What's For Dinner ](https://whats-4-dinner.netlify.app/)web app. Below are the routes used for getting data. 

BASE URL - [https://whats-for-dinner2.herokuapp.com/](https://whats-for-dinner2.herokuapp.com/)


## Endpoints

`GET /dinner`

Returns all entrees and sides in the database.

`GET /dinner/category/:category_id`

Returns all entrees and sides for a specific cuisine.

`GET /dinner/category/:category_id/protein/:protein_id`

Returns entrees based on protein and cuisine selection. Returns the sides based on the cuisine selection. 

`GET /dinner/protein/:protein_id`

Returns entrees based on protein selection. Returns all sides in the database. 