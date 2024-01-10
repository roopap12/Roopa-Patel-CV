## Using this boilerplate

This boilerplate is already configured to work with MongoDB Atlas. You make a request to an endpoint using the format:
```
/api/app/data-djwtg/endpoint/data/v1/action/findOne
```  
instead of a full address like  
```
https://ap-southeast-2.aws.data.mongodb-api.com/app/data-djwtg/endpoint/data/v1/action/findOne
```

To see an example of a request, including the headers you should include, see the api.js file.


To set it up:
- Create a file called env.js in the root (main folder) of your project. This will hold all of the configuration information about your database. It will not be uploaded to GitHub because it contains sensitive information like your API key
- Copy and paste the following code into env.js and replace the values with the ones for YOUR database

```
export const apiKey = $API_KEY

export const appId = $APP_ID
// This will look something like 'data-djwtg'

export const baseURL = $BASE_URL
// This will look something like https://ap-southeast-2.aws.data.mongodb-api.com but may be different depending on which geographic region you selected during the database setup

```

