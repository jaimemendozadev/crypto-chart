# [Crypto Currency Chart](https://github.com/jaimemendozadev/crypto-chart)

A simple chart that shows you the latest prices for your favorite Crypto Currency!


## Table of contents

- Initial Setup
- Create a `.env` File
- Starting the App
- Created By

## Initial Setup

Open up your terminal and clone the repo locally to your computer by running the following command at the target destination: `$ git clone https://github.com/jaimemendozadev/crypto-chart.git`

You'll need to create a user account to use the [Brave New Coin](https://bravenewcoin.com/api/digital-currency-exchange-rates/) Digital Currency Exchange Rates API. The API is available at [this link](https://rapidapi.com/user/BraveNewCoin/package/Digital%20Currency%20Tickers) under the [Prices link](https://rapidapi.com/user/BraveNewCoin/package/Digital%20Currency%20Tickers/functions/Prices). A credit card will be needed to use this particular API (to make sure you don't go over the free 500 API calls monthly limit). Once you're registered, you'll need the BRAVE COIN URL string of the API and the `X-Mashape-Key` that you'll place in a `.env` file.

You'll also need to sign up to mLab, a free service that allows your app to save data in a sandbox environment in a Mongo Database. All the currency data will be saved in this database. 

- [Follow the quickstart guide](http://docs.mlab.com/) to sign up and create a database. 

- Once you've created the database, select the database from the [mLab management portal](http://docs.mlab.com/connecting/#users). You'll need to create a database user and password that can access your newly created database. 

- Finally, from the database home page, grab the `mongodb://` URL string and replace the `<dbuser>` and `<dbpassword>` sections with the newly created DB user and password. This string will be saved in an `.env` file.


## Create a `.env` File

Fire up your terminal and create a new `.env` by simply running `$ touch .env.`

After creating the `.env` file, use your text editor to enter the BRAVECOIN_URL, X_MASHAPE_KEY, and DB_URL into separate lines inside the `.env` file. There should be no spacing between the lines and do not end the line with punctuation or spacing. The `.env` should appear like the following snippet:

```
BRAVECOIN_URL = "https://bravenewcoin-api-string"
X_MASHAPE_KEY = "some-random-string-with-chars-and-numbers"
DB_URL = "mongodb://<dbuser>:<dbpassword>@xy176309.mlab.com:76309/name-of-your-database"
```

After creating the `.env` and you fire up the app, the key value pairs in the file will correspond to any line of code that references `process.env`.

## Starting the App

There are two ways we could start the app. We could do it the normal Node way, or we could build the app as a Docker image and run the image in a container.

<strong>Normal Node App Bootup</strong>

In the root of the app, use your terminal to run `$ npm install` to install all the app dependencies. Wait until everything finishes loading.

Open a second tab in your terminal and run the command `$ npm run build` to build all the React components. Watch the terminal and wait until all the components finish building.

Finally in the first terminal tab, or in another opened terminal tab, run the command `$ npm start` to start the app.

Go to `http://localhost:3000` in your favorite browser to start using the app. 


<strong>Run the Node App With Docker</strong>

*For this step, you'll need to have Docker installed on your computer already. Please [consult the docs](https://docs.docker.com/engine/installation/) for installation.

Once you have Docker installed, run the following commands in your terminal:


- If you haven't done so, run `$ npm install` to install all the app dependencies. Wait until everything finishes loading.

- Run `$ docker build -t nameOfYourApp`. The `nameOfYourApp` will be the name of your image Docker will use to run the Node app in a Docker container. Wait until the Docker image finishes building.

- Run `$ docker run -p 3000:3000 --rm -t -i -v $PWD:/usr/src/app nameOfYourApp` to start the app. 

- Open `http://localhost:3000` in your preferred web browser. The app should be properly running.

Once you're done with the app, kill the Docker container and remove the image from your computer by inputing the following commands in your terminal:

- Run `$ docker container ls -a` to get the container ID.
- Run `$ docker kill containerID` to kill the container.
- Run `$ docker image ls -a` to get the Docker image ID.
- Run `$ docker image rm IMAGEID` to remove the Docker image.

## Created By

**Jaime Mendoza**
[https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)