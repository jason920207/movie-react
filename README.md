# IMBa Client

This repository is for the front end client built react based full-stack javascript application. It features IMBa, a mock movie app. The client relies on React, Express and Mongo, User can add Movie into their favorites and Wishlist, user can comment the movie and can like other user's comment. the admin can create movie and movie image using aws s3 to store the image.

## TECHNOLOGIES IN USE

- REACT.js
- Express.js
- Node.js
- MongoDB
- Mongoose
- AXIOS
- CSS/Bootstrap
- aws upload image
## PLANNING & DEVELOPMENT

We made initial wireframes and an ERD for our prompt. We tried several different approaches when creating our API. The first attempt, we found that we had a lot of nested data that was difficult to mentally parse, and decided to scrap the whole idea and create four models reflecting each part of our website. It taught us a lot about what /not/ to do, which in turn allowed us to learn from our mistakes and ultimately improve our skeletal design.

## WIREFRAMES & USER STORIES

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As an unregistered user, I would like to see all of Movies.
- As a signed in user, I would like to add movie in my wishlist and favorites
- As a signed in user, I would like to comment the movie.
- As a unregistered in user, I would like to see other people's comment.
- As a admin , i can create Movie and update Movie.

[Link to Wireframes](https://imgur.com/a/GOmCAJ5)

[Link to ERD](https://imgur.com/a/4AMp392)

## UNSOLVED PROBLEMS

Clean up code.
refactor the code

## LINKS
[Back End Repo](https://github.com/jason920207/movie-api)

[Front End Repo](https://github.com/jason920207/movie-react)

[Deployed Front End](https://jason920207.github.io/movie-react/)

[Deployed Heroku](https://evening-ocean-81784.herokuapp.com)
