# Authentication

All methods require a valid trial or production API key.

## Authentication Errors

If there's a problem with your API key one of the following errors will be returned:

### Invalid API Key

> Error responses:

```json
{
    "errors":  {
        "INVALID_API_KEY": "Invalid API key specified"
    }
}
```

If you see this error it means that your API key only has partial access to our API. You'll need to contact us to get the API method you're trying to call associated with your API key.
 
### No Trial Requests Left

```json
{
    "errors":  {
        "INVALID_API_KEY": "No trial requests left"
    }
}
```

Your trial key has used its allocation of free credits and you're trying to call a batch API method that needs credits. Methods that manipulate your account don't need credits or a production key.

```
# General Error Handling

```json
{
    "errors":  {
        "INVALID_COMPANY_NAME": "Company name not specified",
        "INVALID_COMPANY_URL": "Company URL not specified",
        "INVALID_COUNTRY": "Country ISO 3 code not specified",
        "INVALID_BUSINESS_CATEGORY_ID": "Business category ID not specified"
    }
}
```

When an error occurs the data returned contains an error section with a list of relevant errors. Errors are returned when incorrect parameters are passed to an API method and in a few other distinct cases.
 
Generally the response will contain a top level node errors {} when an error has occurred and response {} when a successful result is returned.
