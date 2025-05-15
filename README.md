**URL Shortener API**

A simple RESTful API using Express.js and MongoDB allows users to shorten URLs, redirect to original URLs using shortened URLs, delete existing shortened URLs, and view all stored URLs.


**Technologies Used**

- Node.js

- Express.js

- MongoDB + Mongoose

- nanoid (for generating short IDs)


**API Endpoints**

POST /new
Create a new shortened URL

GET /:shortenedURL
Redirect to the original URL

DELETE /delete
Delete a shortened URL

GET /
Retrieve all shortened URLs
