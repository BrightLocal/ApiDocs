# Offsite SEO
<span class="label label-info">Batch Method</span>

> Fetch offsite SEO information for a website address

```php
<?php
use BrightLocal\Api;
use BrightLocal\Batches\V4 as BatchApi;

$api = new Api('<INSERT_API_KEY>', '<INSERT_API_SECRET>');
$batchApi = new BatchApi($api);
$batchId = $batchApi->create();
if ($batchId) {
    printf('Created batch ID %d%s', $batchId, PHP_EOL);
    foreach ($profileUrls as $profileUrl) {
        $result = $api->call('/v4/seo/offsite', array(
            'batch-id'        => $batchId,
            'website-url'     => 'http://www.gramercytavern.com/'
        ));
        if ($result['success']) {
            printf('Added job with ID %d%s', $result['job-id'], PHP_EOL);
        }
    }
    if ($batchApi->commit($batchId)) {
        echo 'Committed batch successfully.'.PHP_EOL;
        // poll for results, in a real world example you might
        // want to do this in a separate process (such as via an
        // AJAX poll)
        do {
            $results = $batchApi->get_results($batchId);
            sleep(10); // limit how often you poll
        } while (!in_array($results['status'], array('Stopped', 'Finished')));
        print_r($results);
    }
}
```

```csharp
api Api = new api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");
batchApi batchRequest = new batchApi(Api);

// Create a new batch
int batchId = batchRequest.Create();

var parameters = new api.Parameters();
parameters.Add("batch-id", batchId);
parameters.Add("website-url", "http://le-bernardin.com");   

var jobId = Api.Post("/v4/seo/offsite", parameters);

if (jobId.ResponseStatus == ResponseStatus.Completed)
{
    dynamic job = JsonConvert.DeserializeObject(jobId.Content);
    if (!job.success)
    {
        string message = "Error adding job";
        var batchException = new ApplicationException(message + job.errors, job.ErrorException);
        throw batchException;
    }
}
else
{
    throw new ApplicationException(jobId.ErrorMessage);
}

// Commit the batch, resturns true or false
bool commit = batchRequest.Commit(batchId);

// Poll for results. In a real world example you should do this in a background process, such as HangFire, or use the Task Parallel Library to create a BackGroundWorker Task.
// It is bad practice to use Thread.Sleep(). This is only for the example and will actually freeze the UI until the while loop is finished. 

var results = batchRequest.GetResults(batchId);
dynamic offsiteResults = JsonConvert.DeserializeObject(results.Content);

if (offsiteResults.success)
{
    while (offsiteResults.status != "Stopped" || offsiteResults.status != "Finished")
    {
        Thread.Sleep(10000);
        results = batchRequest.GetResults(batchId);
        offsiteResults = JsonConvert.DeserializeObject(results.Content);
    }
    return results;
}
else
{
    const string message = "Error Retrieving batch results ";
    var batchException = new ApplicationException(message, results.ErrorException);
    throw batchException;
}
```

> Success (201 Created)

```json
{
    "success": true,
    "job-id": 318
}
```
 
> Failure (400 Bad Request)

```json
{
  "success": false,
  "errors": {
    "INVALID_BATCH_ID": "Batch ID not found",
    "INVALID_WEBSITE_URL": "Website URL missing"
  }
}
```
 
> Failure (405 Method Not Allowed)

```json
{
  "success": false,
  "errors": {
    "INVALID_METHOD": "Invalid method specified. Only POST method is available"
  }
}
```

This API method returns offsite SEO information domain age, hosting location, number of pages indexed and authority. Authentication for this method is via API key only.

### HTTP Request

`POST https://tools.brightlocal.com/seo-tools/api/v4/seo/offsite`

### Query Parameters

Parameter | Notes
--------- | -----
api-key | <span class="label label-required">Required</span>
batch-id | <span class="label label-required">Required</span>
website-url | <span class="label label-required">Required</span> URL of the business web site. Can be specified with or without http(s).
