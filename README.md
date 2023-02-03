# JOBBER - Frontend

## About

The JOBBER web app is a portal that simplifies finding job.
The application provides two types of accounts - recruiter or candidate. The recruiter creates and manages his offers. He can browse profiles or can privately message candidates who have applied for the offer. 
The candidate can fill out a profile in the form of a standard CV and apply for a given offer. In addition, he has his own page for tracking submitted applications with their current acceptance status.
The application provides settings, where user is able to choose the language of the application - English or Polish, change the password and e-mail account or deactivate and delete the account. 

## Run

Firstly run the `jobber-backend`

Install dependencies

```shell
yarn
```

Create `.env.development` file and add to it:

```.env
REACT_APP_API_URL=http://localhost:5000
```

Start

```shell
yarn start
```
