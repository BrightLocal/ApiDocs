# Locations

## Add Location

<span class="label label-info">Account Method</span>

> Add Location

```php
<?php
use BrightLocal\Api;

$api = new Api('<INSERT_API_KEY>', '<INSERT_API_SECRET>');
$success = $api->post('/v2/clients-and-locations/locations/', [
    'name'                 => 'Le Bernardin',
    'location-reference'   => 'LE-BERNARDIN-10019',
    'url'                  => 'le-bernardin.com',
    'business-category-id' =>  605,
    'country'              => 'USA', // 3 letter iso code
    'address1'             => '155 West 51st Street',
    'address2'             => '',
    'region'               => 'NY', // State or Region
    'city'                 => 'New York',
    'postcode'             => '10019',
    'telephone'            => '+1 212-554-1515',
    'opening-hours' => [
        'regular' => [
            'apply-to-all' => false,
            'mon' => [
                'status' => 'open',
                'hours' => [
                    [
                        'start' => '10:00',
                        'end' => '18:00',
                    ]
                ],           
            ],
            'tue' => [
                'status' => 'split',
                'hours' => [
                    [
                        'start' => '10:00',
                        'end' => '12:00',
                    ],
                    [
                        'start' => '13:00',
                        'end' => '18:00',
                    ]
                ],                  
            ],
            'wed' => [
                'status' => '24hrs',
                'hours' => [],           
            ],
            'thu' => [
                'status' => 'open',
                'hours' => [
                    [
                        'start' => '10:00',
                        'end' => '18:00',
                    ]
                ],           
            ],
            'fri' => [
                'status' => 'open',
                'hours' => [
                    [
                        'start' => '10:00',
                        'end' => '18:00',
                    ]
                ],           
            ],
            'sat' => [
                'status' => 'closed',
                'hours' => [
                    []
                ],           
            ],
            'sun' => [
                'status' => 'closed',
                'hours' => [],           
            ],
        ],
        'special' => [
            [
                'date' => '01-01-2020',
                'status' => 'closed',
                'hours' => [],
            ],
        ],
    ], 
]);
print_r($success);
```

```shell
curl -X POST \
 -d 'api-key=<INSERT_API_KEY>' \
 -d 'sig=<INSERT_API_SIG>' \
 -d 'expires=<INSERT_API_EXPIRES>' \
 -d 'name=Le Bernardin' \
 -d 'location-reference=LE-BERNARDIN-10019' \
 -d 'url=le-bernardin.com' \
 -d 'business-category-id=605' \ 
 -d 'country=USA' \
 -d 'address1=155 West 51st Street' \
 -d 'address1=' \
 -d 'region=NY' \
 -d 'city=New York' \
 -d 'postcode=10019' \
 -d 'telephone=+1 212-554-1515' \
 https://tools.brightlocal.com/seo-tools/api/v2/clients-and-locations/locations/
```

```csharp
api request = new api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");

var parameters = new api.Parameters();
parameters.Add("name", "Le Bernardin");
parameters.Add("location-reference", "LE-BERNARDIN-10019");
parameters.Add("url", "http://le-bernardin.com");
parameters.Add("business-category-id", "605");
parameters.Add("country", "USA"); // 3 Letter iso code
parameters.Add("address1", "155 Weest 51st Street");
parameters.Add("address2", "");
parameters.Add("region", "NY"); // State or Region
parameters.Add("city", "New York");
parameters.Add("postcode", "10019");
parameters.Add("telephone", "+1 212-554-1515");

var success = request.Post("/v2/clients-and-locations/locations/", parameters);
```

> Success (200 OK)

```json
{
    "success": true,
    "location-id": 1
}
```

Adds a new location and associates it with your account.

### HTTP Request

`POST https://tools.brightlocal.com/seo-tools/api/v2/clients-and-locations/locations/`

### Query Parameters

Parameter | Notes
--------- | -----
api-key | <span class="label label-required">Required</span>
sig | <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires | <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
name | <span class="label label-required">Required</span> 250 characters max.
client-id | 
url | 256 characters max
business-category-id | <span class="label label-required">Required</span> [See here for a full list of valid business codes.](#business-categories)
country | <span class="label label-required">Required</span> ISO 3 country code.
address1 | <span class="label label-required">Required</span> 80 characters max
address2 | 80 characters max
region | <span class="label label-required">Required</span> 100 characters max
city | <span class="label label-required">Required</span> 100 characters max
postcode | <span class="label label-required">Required</span> 80 characters max
telephone | <span class="label label-required">Required</span> 20 characters max
location-reference | <span class="label label-required">Required</span> An arbitrary unique reference you can use to identify a location. This may correspond to a unique value used within your system and can be useful when importing or exporting data. 50 characters max.
contact-first-name | 20 characters max
contact-last-name | 20 characters max
contact-mobile | 20 characters max
contact-telephone | 20 characters max
contact-email | 100 characters max
contact-fax | 20 characters max
number-of-employees | 10 characters max
formation-date | Month and date formatted 'mm-yyyy'
extra-business-categories-ids | Array. For example, [1234,5678,9012]. [See here for a full list of valid business category IDs.](#business-categories)
opening-hours[regular][apply-to-all] | <span class="label label-required">Required</span> Boolean field
opening-hours[regular][mon][status] | <span class="label label-required">Required</span> Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][mon][hours][start] | <span class="label label-required">Required</span> Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][mon][hours][end] | <span class="label label-required">Required</span> Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][tue][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][tue][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][tue][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][wed][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][wed][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][wed][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][thu][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][thu][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][thu][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][fri][status]	| Can be 'open', 'closed', '24hrs', 'split'	
opening-hours[regular][fri][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm	
opening-hours[regular][fri][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm	
opening-hours[regular][sat][status]	| Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][sat][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][sat][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][sun][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][sun][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][sun][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[special][][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[special][][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm, Closed or N/A
opening-hours[special][][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm, Closed or N/A
opening-hours[special][][date] | Date string with format 'yyyy-mm-dd'
payment-methods | Array. Available values: cash, visa, mastercard, amex, cheque, invoice, insurance, atm, travelers, financing, paypal, discover
short-description | 200 characters max
long-description | 500 characters max
services-of-products| Array

## Update Location

<span class="label label-info">Account Method</span>

Update an existing location. Only supply values you want to update. The rest will be left unchanged.

> Update Location

```php
<?php
use BrightLocal\Api;

$locationId = 1;
$api = new Api('<INSERT_API_KEY>', '<INSERT_API_SECRET>');
$success = $api->put('/v2/clients-and-locations/locations/' .$locationId, [
    'name'                	 		=> 'Le Bernardin',
    'url'                  			=> 'le-bernardin.com',
    'location-reference'			=> 'LE-BERNADIN-10019',
    'business-category-id' 			=>  605,
    'country'              			=> 'USA', // 3 letter iso code
    'address1'             			=> '155 West 51st Street',
    'address2'             			=> '',
    'region'               			=> 'NY', // State or Region
    'city'                 			=> 'New York',
    'postcode'             			=> '10019',
    'telephone'            			=> '+1 212-554-1515',
    'opening-hours' => [
        'regular' => [
            'apply-to-all' => true,
            'mon' => [
                'status' => 'open',
                'hours' => [
                    [
                        'start' => '10:00',
                        'end' => '18:00',
                    ]
                ],           
            ],
        ],
    ], 
]);
print_r($success);
```

```shell
curl -X PUT \
 -d 'api-key=<INSERT_API_KEY>' \
 -d 'sig=<INSERT_API_SIG>' \
 -d 'expires=<INSERT_API_EXPIRES>' \
 -d 'name=Le Bernardin' \
 -d 'location-reference=LE-BERNADIN-10019' \
 -d 'url=le-bernardin.com' \
 -d 'business-category-id=605' \ 
 -d 'country=USA' \
 -d 'address1=155 West 51st Street' \
 -d 'address1=' \
 -d 'region=NY' \
 -d 'city=New York' \
 -d 'postcode=10019' \
 -d 'telephone=+1 212-554-1515' \
 https://tools.brightlocal.com/seo-tools/api/v2/clients-and-locations/locations/1
```

```csharp
api request = new api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");

var locationId = 1;
var parameters = new api.Parameters();
parameters.Add("name", "Le Bernardin");
parameters.Add("location-reference", "LE-BERNADIN-10019");
parameters.Add("url", "http://le-bernardin.com");
parameters.Add("business-category-id", "605");
parameters.Add("country", "USA"); // 3 Letter iso code
parameters.Add("address1", "155 Weest 51st Street");
parameters.Add("address2", "");
parameters.Add("region", "NY"); // State or Region
parameters.Add("city", "New York");
parameters.Add("postcode", "10019");
parameters.Add("telephone", "+1 212-554-1515");

var success = request.Put("/v2/clients-and-locations/locations/" + locationId + "", parameters);
```

> Success (200 OK)

```json
{
    "success": true,
    "location-id": 1
}
```

### HTTP Request

`PUT https://tools.brightlocal.com/seo-tools/api/v2/clients-and-locations/locations/<locationId>`

### Query Parameters

Parameter | Notes
--------- | -----
api-key | <span class="label label-required">Required</span>
sig | <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires | <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
name | 250 characters max.
client-id |
url | 256 characters max
business-category-id | [See here for a full list of valid business codes.](#business-categories)
country | ISO 3 country code.
address1 | 80 characters max
address2 | 80 characters max
region | 100 characters max
city | 100 characters max
postcode | 80 characters max
telephone | 20 characters max
location-reference | <span class="label label-required">Required</span> An arbitrary unique reference you can use to identify a location. This may correspond to a unique value used within your system and can be useful when importing or exporting data. 50 characters max.
contact-first-name | 20 characters max
contact-last-name | 20 characters max
contact-mobile | 20 characters max
contact-telephone | 20 characters max
contact-email | 100 characters max
contact-fax | 20 characters max
number-of-employees | 10 characters max
formation-date | Month and date formatted 'mm-yyyy'
extra-business-categories-ids | Array. For example, [1234,5678,9012]. [See here for a full list of valid business category IDs.](#business-categories)
opening-hours[regular][apply-to-all] | Boolean field
opening-hours[regular][mon][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][mon][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][mon][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][tue][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][tue][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][tue][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][wed][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][wed][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][wed][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][thu][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][thu][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][thu][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][fri][status]	| Can be 'open', 'closed', '24hrs', 'split'	
opening-hours[regular][fri][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm	
opening-hours[regular][fri][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm	
opening-hours[regular][sat][status]	| Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][sat][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][sat][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][sun][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[regular][sun][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[regular][sun][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening-hours[special][][status] | Can be 'open', 'closed', '24hrs', 'split'
opening-hours[special][][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm, Closed or N/A
opening-hours[special][][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm, Closed or N/A
opening-hours[special][][date] | Date string with format 'yyyy-mm-dd'
payment-methods | Array. Available values: cash, visa, mastercard, amex, cheque, invoice, insurance, atm, travelers, financing, paypal, discover
short-description | 200 characters max
long-description | 500 characters max
services-of-products| Array

## Delete Location

<span class="label label-info">Account Method</span>

> Delete a Location

```php
<?php
use BrightLocal\Api;

$locationId = 1;
$api = new Api('<INSERT_API_KEY>', '<INSERT_API_SECRET>');
$result = $api->delete('/v2/clients-and-locations/locations/' . $locationId);
if (!empty($result['success'])) {
    echo 'Successfully deleted location.' . PHP_EOL;
}
```

```csharp
api request = new api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");

var locationId = 1;
var parameters = new api.Parameters();

var success = request.Delete("/v2/clients-and-locations/locations/" + locationId + "", parameters);
```

> Success (200 OK)

```json
{
    "success": true
}
```

Delete an existing location. If there are reports associated with this location then the association is removed but the reports are not deleted. Warning: This action cannot be undone.

### HTTP Request

`DELETE https://tools.brightlocal.com/seo-tools/api/v2/clients-and-locations/locations/<locationId>`

### Query Parameters

Parameter | Notes
--------- | -----
api-key | <span class="label label-required">Required</span>
sig | <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires | <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
location-id | <span class="label label-required">Required</span>

## Get Location

<span class="label label-info">Account Method</span>

> Get location

```php
<?php
use BrightLocal\Api;

$locationId = 1;
$api = new Api(<INSERT_API_KEY>', '<INSERT_API_SECRET>);
$location = $api->get('/v2/clients-and-locations/locations/' . $locationId);
print_r($location);
```

```csharp
api request = new api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");

var locationId = 1;
var parameters = new api.Parameters();

var success = request.Get("/v2/clients-and-locations/locations/" + locationId + "", parameters);
```

> Success (200 OK)

```json
{
   "success":true,
   "location":{
        "location-name":"BrightLocal HQ",
        "client-id":1,
        "location-url":"https://www.brightlocal.com",
        "business-category-id":650,
        "country":"GBR",
        "address1":"The Old Candlemakers",
        "address2":"West St, Lewes",
        "region":"East Sussex",
        "town":"Lewes",
        "postcode":"BN7 2NZ",
        "telephone":"80500 050 0505",
        "location-reference":"BL1",
        "contact-first-name":"first name",
        "contact-last-name":"last name",
        "contact-telephone":"+44 1273 917 374",
        "contact-fax":"",
        "contact-mobile":"",
        "num-of-employees":"50",
        "formation-date":"11-2009",
        "extra-business_categories":[
          "marketing"
        ],
        "extra-business-categories-ids":[
            503,
            2824
        ],
        "payment-methods-accepted":[
            "visa",
            "paypal"
        ],
        "short-desc":"",
        "long-desc":"",
        "services-or-products":[
            "analytics"
        ]
   }
}
```

Get extended details for a specific location.

### HTTP Request

`GET https://tools.brightlocal.com/seo-tools/api/v2/clients-and-locations/locations/<locationId>`

### Query Parameters

Parameter | Notes
--------- | -----
api-key | <span class="label label-required">Required</span>	
sig | <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires | <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)

## Search Locations

<span class="label label-info">Account Method</span>

> Search for a location

```php
<?php
use BrightLocal\Api;

$api = new Api('<INSERT_API_KEY>', '<INSERT_API_SECRET>');
$results = $api->call('/v2/clients-and-locations/locations/search', [
    'q' => 'BrightLocal'
]);
print_r($results);
```

```shell
curl -X GET \
 -d 'api-key=<INSERT_API_KEY>' \
 -d 'sig=<INSERT_API_SIG>' \
 -d 'expires=<INSERT_API_EXPIRES>' \
 -d 'q=My+Sample+Query' \	
  https://tools.brightlocal.com/seo-tools/api/v2/clients-and-locations/locations/search/
```

```csharp
api request = new api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");
var parameters = new api.Parameters();
parameters.Add("q", "BrightLocal");
var success = request.Get("/v2/clients-and-locations/locations/search", parameters);
```

> Success (200 OK)

```json
{
    "success": true,
    "locations":  [
        {
	    "location-id": 1,
            "location-name":"BrightLocal HQ",
            "client-id":1,
	    "location-reference":"BL1"
	},
	{
            "location-id": 2,
            "location-name":"Talking Elephant",
            "client-id":12,
            "location-reference":"TE12"
	}
    ]
}
```

Search for locations matching a specified search string. The search uses a number of fields including location name, contact firstname, lastname and email address.

### HTTP Request

`GET https://tools.brightlocal.com/seo-tools/api/v2/clients-and-locations/locations/search`

### Query Parameters

Parameter | Notes
--------- | -----
api-key | <span class="label label-required">Required</span>
sig | <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires | <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
q | <span class="label label-required">Required</span>
client-id | Client Id
