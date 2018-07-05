# job-marketplace-assignment
## Overview

For this challenge, you should create a `jobs overview` and a `profile` view for a Job marketplace application. 

On the jobs overview, the user should be able to `apply` to a job, and to `retract` their application. 

On the profile view, they should be able to `update` their name and their email address.

You can route between the jobs & the profile  using icons in the header bar: a left icon & title for jobs, and a right icon for the profile.

You can use the screenshots in the repo as design guidelines, though you don’t have to struggle to match them perfectly. 

The repo is purposefully almost empty, so you can use your technologies of choice, preferably a front-end library or framework (you can use a default setup if you want). 

## json-server

The only file added to the repo is `db.json`, which you can use to run a mock json server. This way, you don’t have to focus on the back-end side of the project, though if you really want to, go ahead and implement your own back-end :).

In order to run the server, you’ll have to globally install `json-server`, and run db.json from the root directory of the project.

```sh
npm install -g json-server
json-server --watch db.json
```

json-sever runs by default on port `3000`, so if you need your front-end application to run on 3000, can you specify the json-server port, for example 8080:

 ```sh
json-server --watch db.json --port 8080
```

Info about how to use json-server: https://github.com/typicode/json-server

## Endpoints

json-server automatically generates a set of endpoints for you, which you can use to:
- get the jobs you need to display on the jobs overview
- apply to a job or retract an application by updating an individual job
- get the user profile
- update the user profile

In order to simplify the application, we are only working with one user, so you can hardcode the user id to `1`. 

## Good luck!

If you think this is too much to implement or find the challenge too hard, please don’t be intimidated! Just do as much as you can, and we can discuss together what you did and how to go about implementing whatever is left.
