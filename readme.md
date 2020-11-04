# Send-JS-Errors-To-Backend `npm` package

## What this package does

Send application errors in a nice JSON string to the service/backend REST Api that you have provided during init. The JSON string has the data, type of error and other details.

## Why I created another package in NPM to log-errors

`console.log` is great but it does not notify the operations team about the errors that happen in production. Of course you might say we have many 100 tools in the market like Sentry, TrackJS etc which do the logging. Here is the interesting bit, you need to take permission from information security, manager etc because your data is sent to another server on the internet.

As a developer, you do not need another approval to log the data to your service/backend. We call it smart work with no pressure on the project budget. Remember its difficult times 😑

With `Send-JS-Errors-To-Backend` you can be very sure that your `runtime` errors are sent straight to your API URL that you have configured.

## Advantages of Send-JS-Errors-To-Backend over your own piece of code

- This package is getting updated by developer
- No learning curve
- This package is framework agnostic
- You can verify the functionality yourself. Its less than 100 lines of code with no external dependency.

## Getting started

> Under development, do not use it just yet
