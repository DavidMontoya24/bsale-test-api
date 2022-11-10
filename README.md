
# BSale Test API

This is the api for the Bsale Test App, challenge to BSale made by David Montoya

This REST API was made using Node.Js and Javascript as main language. Also with a provided MySqL Database, ExpressJS and dependencies such as nodemon, mysql and promise-mysql. Basically, we build a online store, where we can see the products, search and filter by category.

Here are the back and front end repositories
1) [API - Backend](https://github.com/DavidMontoya24/bsale-test-api)
2) [CLIENT - Frontend](https://github.com/DavidMontoya24/bsale-test-client)

## Used tools

<img src="https://skillicons.dev/icons?i=nodejs" />
<img src="https://skillicons.dev/icons?i=expressjs" />
<img src="https://skillicons.dev/icons?i=mysql" />

## Run Locally

Download or clone this repository
Open Git Bash and change the current working directory to the location where you want to clone the project.

```bash
  git clone git@github.com:DavidMontoya24/bsale-test-api.git
```

Go to that cloned directory

Install dependencies

```bash
  npm install
```

On the directory CREATE a .env file and set the environment variables for the database, there is a .env example file as well
```bash
  DB_HOST=[YOUR_DB_HOST]
  DB_USER=[YOUR_DB_USER]
  DB_PASSWORD=[YOUR_DB_PASSWORD]
  DB_NAME=[YOUR_DB_NAME]
```


Start the server

```bash
  npm run start
```

By default the server will listen on port ```http://localhost:8080/```
So you can try by go to your browser and set path ```http://localhost:8080/products``` for example

## Deployed API

There's has been setup and online deployed version of this API in the following link

[https://bsale-test-api.fly.dev](https://bsale-test-api.fly.dev)

That can be used as a URL for the requests
## Usage
You can use Postman or Insomnia as software to test the following endpoints.
Add the [URL](https://bsale-test-api.fly.dev) and then the following paths to make your requests


| HTTP verb | Paths     | Usage               |
| :-------- | :------- | :------------------------- |
| `GET` | /products | List all products |
| `GET` | /products/:id | Show the product by the given ID |
| `GET` | /products/:query | Show a product that matches a given name or query |
| `GET` | /categories | List all categories |
| `GET` | /categories/:id/products | List all products of a given category |

