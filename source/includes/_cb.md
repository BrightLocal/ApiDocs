# Citation Builder

<aside class="notice"> 
    This API has been deprecated. Please refer to the documentation for our new <a href="https://developer.brightlocal.com/docs/management-apis/agjq3z0pfs6nk-citation-builder">Citation Builder API</a>.
</aside>

## Create Campaign (deprecated)

<span class="label label-info">Account Method</span>

> Create Campaign

```php
<?php
require '../../vendor/autoload.php';

use BrightLocal\Api;

$fullDescription = 'The restaurant has held three stars from the Michelin Guide since its 2005 New York launch and 
currently ranks 24 on the World’s 50 Best Restaurants list. The New York Zagat Guide has recognized Le Bernardin as top rated 
in the category of “Best Food” for the last nine consecutive years, and in 2015 was rated by the guide as New York 
City’s top restaurant for food and service. Le Bernardin has earned seven James Beard Awards since 1998 including 
“Outstanding Restaurant of the Year”.';

$api = new Api('<YOUR_API_KEY>', '<YOUR_API_SECRET>');
$response = $api->post('/v4/cb/create', [
    'location_id'            => 1,
    'business_categories'    => '["restaurant", "cafe"]',
    'contact_name'           => 'Bloggs',
    'contact_firstname'      => 'Joe',
    'contact_email'          => 'joe.bloggs@test.com',
    'full_description'       => $fullDescription,
    'employees_number'       => 35,
    'formation_date'         => '01-2021',
    'opening_hours'          => [
        'regular' => [
            'apply_to_all' => false,
            'mon'          => [
                'status' => 'open',
                'hours'  => [
                    [
                        'start' => '10:00',
                        'end'   => '18:00',
                    ],
                ],
            ],
            'tue'          => [
                'status' => 'split',
                'hours'  => [
                    [
                        'start' => '10:00',
                        'end'   => '12:00',
                    ],
                    [
                        'start' => '13:00',
                        'end'   => '18:00',
                    ],
                ],
            ],
            'wed'          => [
                'status' => '24hrs',
                'hours'  => [],
            ],
            'thu'          => [
                'status' => 'open',
                'hours'  => [
                    [
                        'start' => '10:00',
                        'end'   => '18:00',
                    ],
                ],
            ],
            'fri'          => [
                'status' => 'open',
                'hours'  => [
                    [
                        'start' => '10:00',
                        'end'   => '18:00',
                    ],
                ],
            ],
            'sat'          => [
                'status' => 'closed',
                'hours'  => [
                    [],
                ],
            ],
            'sun'          => [
                'status' => 'closed',
                'hours'  => [],
            ],
        ],
        'special' => [
            [
                'date'   => '2021-01-27',
                'status' => 'closed',
                'hours'  => [],
            ],
        ],
    ],
    'social_profile_links'   => [
        'facebook'  => 'https://en-gb.facebook.com/brightlocal/',
        'twitter'   => 'https://twitter.com/bright_local',
        'linkedin'  => 'https://uk.linkedin.com/company/bright-local-seo',
        'instagram' => '',
        'pinterest' => 'https://www.pinterest.co.uk/brightlocal/',
    ]
]);
print_r($response->getResult());
```

```csharp
string fullDescription = "The restaurant has held three stars from the Michelin Guide since its 2005 New York launch" +
    " and currently ranks 24 on the World’s 50 Best Restaurants list. The New York Zagat Guide has recognized Le Bernardin" +
    " as top rated in the category of “Best Food” for the last nine consecutive years, and in 2015 was rated by the guide as " +
    "New York City’s top restaurant for food and service.  Le Bernardin has earned seven James Beard Awards since 1998 " +
    "including “Outstanding Restaurant of the Year”";
dynamic opening_hours = new
{
    regular = new Dictionary<string, object>()
        {
            { "apply-to-all" , false },
            {  "mon" , new {
                            status = "open",
                            hours = new List<object>{
                                new {
                                    start = "10:00",
                                    end = "18:00"
                                }
                            }
                      }
            },
            {  "tue" , new {
                            status = "split",
                            hours = new List<object>{
                                new {
                                    start = "10:00",
                                    end = "12:00"
                                },
                                new {
                                    start = "13:00",
                                    end = "18:00"
                                },
                            }
                      }
            },
            {  "wed" , new {
                            status = "24hrs",
                      }
            },
            {  "thu" , new {
                            status = "open",
                            hours = new List<object>{
                                new {
                                    start = "10:00",
                                    end = "18:00"
                                }
                            }
                      }
            },
            {  "fri" , new {
                            status = "open",
                            hours = new List<object>{
                                new {
                                    start = "10:00",
                                    end = "18:00"
                                }
                            }
                      }
            },
            {  "sat" , new {
                            status = "closed",
                      }
            },
            {  "sun" , new {
                            status = "closed",
                      }
            },
        },
    special = new List<object>()
    {
        new {
            date = "2021-01-27",
            status = "closed",
        }
    }
};

Api api = new Api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");
Parameters parameters = new Parameters
{
    { "location_id"                , 1 },
    { "extra_business_categories_ids", new List<int>() { 1234,5678,9012 } },
    { "contact_name"               , "Bloggs"},
    { "contact_firstname"          , "Joe"},
    { "contact_email"              , "joe.bloggs@test.com"},
    { "brief_description"          , briefDescription},
    { "full_description"           , fullDescription},
    { "employees_number"           , 35},
    { "formation_date"             , "11-2008" },
    { "opening_hours"              , opening_hours }
};

dynamic response = api.Post("v4/cb/create", parameters).GetContent();
Console.WriteLine(response);
```

> Validation Failure

```json
{
  "error": true,
  "errors": {
    "business_name": "Please enter business name",
    "campaign_name": "Please enter campaign name",
    "contact_firstname": "Please enter contact first name",
    "contact_name": "Please enter contact last name",
    "business_category_id": "Please select business category",
    "business_categories": "Please enter at least one business category or tag",
    "campaign_country": "Please select country",
    "campaign_state": "Please select state",
    "campaign_city": "Please select location",
    "address1": "Please enter street address",
    "postcode": "Please enter zip / postal code",
    "website_address": "Please enter the website address for the business",
    "contact_email": "Please enter correct email address",
    "contact_telephone": "Please check your entered telephone number. Only digits 0-9 and ( ) - + characters can be entered.",
    "brief_description": "Please enter short description",
    "full_description": "Please enter full description",
    "employees_number": "Please enter number of employees",
    "formation_date": "Please enter formation date",
    "working_hours": "Your must provide valid Opening Hours",
    "social_profile_links": "The supplied URL for facebook is too long (max 256 characters)",
    "campaign_status": "Invalid campaign status",
    "location_id": "Location with ID 0 not found or doesn't belong to this customer"
  }
}
```

> Success (200 OK)

```json
{
  "error": false,
  "campaign-id": 280
}
```

### HTTP Request

`POST https://tools.brightlocal.com/seo-tools/api/v4/cb/create`

### Query Parameters

Parameter | Notes
--------- | -----
api-key	| <span class="label label-required">Required</span>	
sig	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
location_id |	<span class="label label-required">Required</span>	
business_name | Deprecated, please use Location for update this field	
campaign_name | Deprecated, please use Location for update this field	
website_address	| Deprecated, please use Location for update this field	
campaign_country | Deprecated, please use Location for update this field	
campaign_state | Deprecated, please use Location for update this field
campaign_city | Deprecated, please use Location for update this field	
business_category_id | Deprecated, please use Location for update this field 	
address1 | Deprecated, please use Location for update this field	
address2 | Deprecated, please use Location for update this field		
postcode | Deprecated, please use Location for update this field	
contact_name | 	
contact_firstname |	
contact_telephone | Deprecated, please use Location for update this field	
contact_email |
mobile_number |		
fax_number |			
full_description | <span class="label label-required">Required</span>	
employees_number |	
formation_date | Month and date formatted ‘mm-yyyy’
extra_business_categories_ids | Array. For example, [1234,5678,9012]. [See here for a full list of valid business category IDs.](#business-categories)
service_name_1 |		
service_name_2 |		
service_name_3 |		
service_name_4 |		
service_name_5 |		
opening_hours[regular][apply_to_all] | <span class="label label-required">Required</span> Boolean field
opening_hours[regular][mon][status] | <span class="label label-required">Required</span> Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][mon][hours][start] | <span class="label label-required">Required</span> Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][mon][hours][end] | <span class="label label-required">Required</span> Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][tue][status] | Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][tue][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][tue][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][wed][status] | Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][wed][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][wed][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][thu][status] | Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][thu][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][thu][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][fri][status]	| Can be 'open', 'closed', '24hrs', 'split'	
opening_hours[regular][fri][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm	
opening_hours[regular][fri][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm	
opening_hours[regular][sat][status]	| Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][sat][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][sat][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][sun][status] | Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][sun][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][sun][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[special][][status] | Can be 'open', 'closed', '24hrs', 'split'
opening_hours[special][][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm, Closed or N/A
opening_hours[special][][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm, Closed or N/A
opening_hours[special][][date] | Date string with format 'yyyy-mm-dd'special_offer |		
special_offer_description |		
special_offer_expiry_date |		
payment_methods	| <p>Array of options. E.g. ['cash', 'visa', 'mastercard', 'amex', 'cheque', 'atm', 'discover]. Possible values - cash&#124;visa&#124;mastercard&#124;amex&#124;cheque&#124;invoice&#124;insurance&#124;atm&#124;travellers&#124;financing&#124;paypal&#124;discover</p>
social_profile_links | Object. See example on the right for reference. Social channels supported are facebook, twitter, linkedin, pinterest and instagram.
receive-email-alerts | 		
alert-email-addresses | 		
old_business_name |		
old_lookup_data	| For e.g, old postcode
is_public | Publish reports on a white label URL. Y or N.
campaign_notes | Notes for any issues & concerns which you want our submission team to be aware of when they submit to directories
white_label_profile_id | Deprecated, please use Location for update this field

## Update Campaign (deprecated)

<span class="label label-info">Account Method</span>


```php
<?php
require '../../vendor/autoload.php';

use BrightLocal\Api;

$campaignId = 1;
$api = new Api('<YOUR_API_KEY>', '<YOUR_API_SECRET>');
$response = $api->put('/v4/cb/' . $campaignId, [
    'location_id'          => 1,
    'business_categories'  => '["restaurant", "cafe"]',
    'contact_name'         => 'Bloggs',
    'contact_firstname'    => 'Joe',
    'contact_email'        => 'joe.bloggs@test.com',
    'payment_methods'      => [
        'visa',
        'paypal',
    ],
    'social_profile_links' => [
        'facebook' => 'https://en-gb.facebook.com/brightlocal/',
        'twitter'  => 'https://twitter.com/bright_local',
    ],
]);
print_r($response->getResult());

```


```csharp
Api api = new Api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");
Parameters parameters = new Parameters
{
    { "location_id"                , 1 },
    { "business_categories"        , new List<string>() { "restaurant", "cafe" } },
    { "contact_name"               , "Bloggs"},
    { "contact_firstname"          , "Joe"},
    { "contact_email"              , "joe.bloggs@test.com"},
    { "payment_methods"        , new List<string>() { "visa", "paypal" } },
    { "social_profile_links",  new
            { special = new List<object>()
                {
                    new {
                        facebook = "https://en-gb.facebook.com/brightlocal/",
                        twitter = "https://twitter.com/bright_local",
                        linkedin = "https://uk.linkedin.com/company/bright-local-seo",
                        instagram = "",
                        pinterest = "https://www.pinterest.co.uk/brightlocal/",
                    }
                }
            }
        }

};
dynamic response = api.Put("/v4/cb/" + campaignId, parameters).GetContent();
Console.WriteLine(response);
```

> Validation Failure

```json
{
  "success": false,
  "error": true,
  "errors": {
    "working_hours": "Your must provide Working Hours for at least one day in the week",
    "social_profile_links": "Please use valid social channels. Channels supported are facebook, twitter, linkedin, pinterest and instagram."  
  }
}
```

> Success (200 OK)

```json
{
  "error": false,
  "success": true,
  "result": "Campaign updated"
}
```

### HTTP Request

`PUT https://tools.brightlocal.com/seo-tools/api/v4/cb/<campaignId>`

### Query Parameters

Parameter | Notes
--------- | -----
api-key	| <span class="label label-required">Required</span>	
sig	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
location_id |	<span class="label label-required">Required</span>
business_name | Deprecated, please use Location for update this field
campaign_name | Deprecated, please use Location for update this field
website_address	| Deprecated, please use Location for update this field
campaign_state | Deprecated, please use Location for update this field
campaign_city | Deprecated, please use Location for update this field
extra_business_categories_ids	| Array. For example, [1234,5678,9012]. [See here for a full list of valid business category IDs.](#business-categories)	
address1 | Deprecated, please use Location for update this field
address2 | Deprecated, please use Location for update this field
postcode | Deprecated, please use Location for update this field
contact_name | 	
contact_firstname | 	
contact_telephone | Deprecated, please use Location for update this field
contact_email | 	
mobile_number |		
fax_number |
full_description | 	Deprecated, please use Location for update this field
employees_number | 	
formation_date | Month and date formatted ‘mm-yyyy’	
service_name_1 |		
service_name_2 |		
service_name_3 |		
service_name_4 |		
service_name_5 |		
opening_hours[regular][apply_to_all] | <span class="label label-required">Required</span> Boolean field
opening_hours[regular][mon][status] | <span class="label label-required">Required</span> Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][mon][hours][start] | <span class="label label-required">Required</span> Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][mon][hours][end] | <span class="label label-required">Required</span> Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][tue][status] | Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][tue][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][tue][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][wed][status] | Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][wed][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][wed][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][thu][status] | Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][thu][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][thu][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][fri][status]	| Can be 'open', 'closed', '24hrs', 'split'	
opening_hours[regular][fri][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm	
opening_hours[regular][fri][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm	
opening_hours[regular][sat][status]	| Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][sat][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][sat][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][sun][status] | Can be 'open', 'closed', '24hrs', 'split'
opening_hours[regular][sun][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[regular][sun][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm
opening_hours[special][][status] | Can be 'open', 'closed', '24hrs', 'split'
opening_hours[special][][hours][start] | Please only use allowed working hours formats such as 14:45, 2:45 pm, Closed or N/A
opening_hours[special][][hours][end] | Please only use allowed working hours formats such as 14:45, 2:45 pm, Closed or N/A
opening_hours[special][][date] | Date string with format 'yyyy-mm-dd'
special_offer |		
special_offer_description |		
special_offer_expiry_date |		
payment_methods	| <p>Array of options. E.g. ['cash', 'visa', 'mastercard', 'amex', 'cheque', 'atm', 'discover']. Possible values - cash, visa, mastercard, amex, cheque, invoice, insurance, atm, travellers, financing, paypal, discover</p>
social_profile_links | Object. Social channels supported are facebook, twitter, linkedin, pinterest and instagram.
receive-email-alerts | 		
alert-email-addresses | 		
old_business_name |		
old_lookup_data	| For e.g, old postcode
is_public | Publish reports on a white label URL. Y or N.
campaign_notes | Notes for any issues & concerns which you want our submission team to be aware of when they submit to directories
white_label_profile_id | Deprecated, please use Location for update this field

## Upload Image (deprecated)

<span class="label label-info">Account Method</span>

> Upload Image

```php
<?php
require '../../vendor/autoload.php';

use BrightLocal\Api;

$campaignId = 1;
$api = new Api('<YOUR_API_KEY>', '<YOUR_API_SECRET>');
$response = $api->post("/v2/cb/upload/$campaignId/logo", [
    'file' => fopen('/path/to/image.jpg', 'r')
]);
print_r($response->getResult());
```

```csharp
int campaignId = 1;
Api api = new Api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");
Response response = api.PostImage("v2/cb/upload/" + campaignId + "/logo", "../../../Brightlocal/logo.jpg");
Console.WriteLine(response.GetResponseCode());
Console.WriteLine(response.IsSuccess());
Console.WriteLine(response.GetContent());;
```


> Success (200 OK)

```json
{
  "success": true,
  "error":   false,
  "result":  "File companyLogo.jpg uploaded"
}
```

Upload an image to be used in CB campaign. <campaignId> is the id of existing campaign, <imageType> is one of: logo, image1, image2, image3. Request must contain standard file upload. There should be exactly one file uploaded with size not exceeding 2 MB. Acceptable formats are: jpg, png.

### HTTP Request

`POST https://tools.brightlocal.com/seo-tools/api/v2/cb/upload/[campaignId]/[imageType]`

### Query Parameters

Parameter | Notes
--------- | -----
api-key	| <span class="label label-required">Required</span>	
sig	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)

### Example URL

http://tools.brightlocal.com/seo-tools/api/v2/cb/upload/5533/logo

## Get Citations (deprecated)

<span class="label label-info">Account Method</span>

> Get Citations

```php
<?php
require '../../vendor/autoload.php';

use BrightLocal\Api;

$api = new Api('<YOUR_API_KEY>', '<YOUR_API_SECRET>');
$response = $api->get('/v2/cb/citations', [
    'campaign-id' => 1
]);
print_r($response->getResult());
```

```csharp
Api api = new Api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");
Parameters parameters = new Parameters {
       { "campaign_id", 1 }
};
Response response = api.Get("/v2/cb/citations", parameters);
Console.WriteLine(response.GetContent());
```

> Success (200 OK)

```json
{
    "error": false,
    "campaignId": 123,
    "citations": {
        "bing.com": {
            "url": "https://bing.com/local/some-place",
            "citation_value": "Very High",
            "domain_authority": "99",
            "type": "General Directory",
            "phone_verification": "N",
            "client_verification": "Y",
            "notes": "Bingplaces will send you verification PIN at your registered postal address.",
            "no_update": "Y",
            "no_photos": "Y",
            "part_of_yext_network": "Y",
            "quick_listing": "N",
            "secondary_campaign_id": "b",
            "status": "To Do",
            "previous_submission_updates_allowed":"Y"
        }        
    },
  "aggregators": [
    {
      "name": "Foursquare",
      "type": "foursquare",
      "expiration": "2025-08-08",
      "secondary_campaign_id": "",
      "directories": [
        {
          "citation": "Foursquare",
          "notes": "",
          "status": "Live",
          "profile_url": "https://foursquare.com/listing"
        }
      ]
    }
  ]
}
```

Retrieve list of citations associated with campaign.

### HTTP Request

`GET https://tools.brightlocal.com/seo-tools/api/v2/cb/citations`

### Query Parameters

Parameter | Notes
--------- | -----
api-key	| <span class="label label-required">Required</span>
sig	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
campaign-id	| <span class="label label-required">Required</span>

## Confirm &amp; Pay (deprecated)

<span class="label label-info">Account Method</span>

> Confirm &amp; Pay

```php
<?php
require '../../vendor/autoload.php';

use BrightLocal\Api;

$api = new Api('<YOUR_API_KEY>', '<YOUR_API_SECRET>');
$response = $api->post('/v2/cb/confirm-and-pay', [
    'campaign_id'       => 1,
    'package_id'        => 'cb15',
    'autoselect'        => 'N',
    'remove-duplicates' => 'Y',
    'aggregators'       => json_encode(['foursquare']),
    'citations'         => json_encode([
        'brownbook.net', 'bing.com', 'manta.com', 'yell.com', 'accessplace.com', 'bizfo.co.uk',
        'bizwiki.co.uk', 'citylocal.co.uk', 'cylex-uk.co.uk', 'where2go.com', 'yelp.co.uk', 'scoot.co.uk',
        'restaurants.co.uk', 'opendi.co.uk', 'misterwhat.co.uk'
    ]),
    'notes'             => 'Some very important notes'
]);
print_r($response->getResult());
```

```csharp
Api api = new Api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");
Parameters parameters = new Parameters
{
    { "campaign_id"             , 1 },
    { "package_id"              , "cb15"},
    { "autoselect"              , "N"},
    { "remove-duplicates"       , "Y"},
    { "aggregators"             , new List<string>() { "foursquare" }},
    { "citations"               , new List<string>() { "brownbook.net", "bing.com", "manta.com", "yell.com", "accessplace.com", "bizfo.co.uk", "bizwiki.co.uk", "citylocal.co.uk",
    "cylex-uk.co.uk", "where2go.com", "yelp.co.uk", "scoot.co.uk", "restaurants.co.uk", "opendi.co.uk", "misterwhat.co.uk" }},
    { "notes"                   , "Some very important notes"},

};
dynamic response = api.Post("/v2/cb/confirm-and-pay", parameters).GetContent();
Console.WriteLine(response);
```

> Validation Failure

```json
{
  "error": true,
  "errors": {
    "citations": "No citations supplied",
    "package_id": "Invalid package id"
  }
}
```
> Success (200 OK)
```json
{
  "error": false
}
```

Confirm and pay (using credits) for a CB campaign.

### HTTP Request

`POST https://tools.brightlocal.com/seo-tools/api/v2/cb/confirm-and-pay`

### Query Parameters

Parameter | Notes
--------- | -----
api-key	| <span class="label label-required">Required</span>	
sig	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
campaign_id	| <span class="label label-required">Required</span>	
package_id | <span class="label label-required">Required</span> CB package id corresponding to the number of ordered credits: 'cb10' for 10 citations, 'cb15' for 15, then 25, 30, 50, 75, 100. To use only aggregators and ignore citations or package_id, please use 'cb0' package only. 
autoselect | String. Possible values 'N' or 'Y'. Default 'N'.
citations | JSON Array. List of sites you require listings for. You can leave citations empty for auto selecting citations.
remove-duplicates | String. Possible values 'N' or 'Y'. Default 'N'. Find and Remove Duplicate Listings
aggregators | JSON Array. List of aggregators you require listings for. Possible values for USA are: ‘dataaxle’ ‘neustar’, ‘foursquare’, ‘gpsnetwork’ and ‘ypnetwork’. For CAN possible values are ‘dataaxle’, ‘foursquare’, ‘gpsnetwork’.  For AUS possible values are ‘foursquare’, ‘gpsnetwork’ and ‘locafynetwork’. The only possible values for all other countries are ‘foursquare’, and ‘gpsnetwork’.
notes | Provide instructions to our submissions team with specifics about how you'd like your campaign handled.
short_business_name | Short business name of maximum 60 characters is required for submission to GPS Network.

## Get Campaigns (deprecated)

<span class="label label-info">Account Method</span>

> Get Campaigns

```php
<?php
require '../../vendor/autoload.php';

use BrightLocal\Api;

$api = new Api('<YOUR_API_KEY>', '<YOUR_API_SECRET>');
$response = $api->get('/v4/cb/get-all');
print_r($response->getResult());
```

```csharp
Api api = new Api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");
Response response = api.Post("/v4/cb/get-all");
Console.WriteLine(response.GetContent());
```

> Success (200 OK)

```json
{
    "response":  {
        "results":  [
            {
                "campaign_id": "4",
                "location_id": "7459",
                "campaign_name": "Test 1",
                "date_purchased": "2012-06-11 00:00:00",
                "date_completed": "2012-06-25 00:00:00",
                "email": "test@test1.com",
                "username": "",
                "password": "",
                "citations":  [
                    {
                        "name": "advertiserdirectory.co.uk",
                        "status": "Live",
                        "site_type": "Local Directory",
                        "citation_url": "advertiserdirectory.co.uk",
                        "domain_authority": "21/100",
                        "citation_value": "Low"
                    },
                    {
                        "name": "freeindex.co.uk",
                        "status": "Updated",
                        "site_type": "General Directory",
                        "citation_url": "freeindex.co.uk",
                        "domain_authority": "< 10/100",
                        "citation_value": "High"
                    }
                ],
                "aggregators":  [
				    {
					    "name": "dataaxle",
					    "status": "Live",
					    "site_type": "Aggregator",
					    "citation_url": "data-axle.com",
					    "domain_authority": "NA",
					    "citation_value": "NA"
				    },
				    {
					    "name": "foursquare",
					    "status": "Updated",
					    "site_type": "Aggregator",
					    "citation_url": "foursquare.com",
					    "domain_authority": "NA",
					    "citation_value": "NA"
				    }
			    ]                
            }
        ]
    }
}
```

### HTTP Request

`GET https://tools.brightlocal.com/seo-tools/api/v4/cb/get-all`

### Query Parameters

Parameter | Notes
--------- | -----
api-key	| <span class="label label-required">Required</span>	
sig	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
location-id |

## Get Campaign (deprecated)

<span class="label label-info">Account Method</span>

> Get Campaign

```php
<?php
require '../../vendor/autoload.php';

use BrightLocal\Api;

$api = new Api('<YOUR_API_KEY>', '<YOUR_API_SECRET>');
$response = $api->get('/v4/cb/get', [
    'campaign-id' => 1
]);
print_r($response->getResult());
```

```csharp
Api api = new Api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");
Parameters parameters = new Parameters {
       { "campaign_id", 1 }
};
Response response = api.Get("/v2/cb/get", parameters);
Console.WriteLine(response.GetContent());
```

> Success (200 OK)

```json
{
    "response": {
        "results": {
            "campaign_id": "116225",
            "location_id": 522411,
            "campaign_name": "CUCINA urbana",
            "creation_date": "2017-01-11 14:56:56",
            "package_id": "1",
            "selection_type": "manual",
            "paid": "Yes",
            "status": "Complete",
            "submission_date": null,
            "purchase_date": "2017-01-11 15:06:18",
            "completion_date": "2017-01-25 00:00:00",
            "username": "",
            "email": "",
            "password": "",
            "campaign_note": "",
            "customer_note": "",
            "white_label_profile_id": "0",
            "num_citations": null,
            "package_price": "75",
            "website_address": "http:\/\/www.cucinaurbana.com\/",
            "campaign_country": "USA",
            "campaign_state": "CA",
            "campaign_city": "San Diego",
            "business_category_id": "2291",
            "business_category_name": "bar, liquor store, restaurant, food, store",
            "extra_business_categories_ids": [
            	"1058",
                "1160",
                "5376"
            ],
            "address": {
                "street_address_1": "505 Laurel Street",
                "street_address_2": null,
                "city": null,
                "region": null,
                "postcode": "92101"
            },
            "contact": {
                "last_name": "name",
                "first_name": "name",
                "email": "<hidden>",
                "telephone": "+1 619-239-2222"
            },
            "mobile_number": null,
            "fax_number": null,
            "descriptions": {
                "brief": "",
                "full": ""
            },
            "num_employees": "20",
            "formation_date": "11-2000",
            "service_names": {
                "1": null,
                "2": null,
                "3": null,
                "4": null,
                "5": null
            },
            "opening_hours": {
                "apply_to_all": "1",
                "days": {
                    "mon": {
                        "start": null,
                        "end": null,
                        "24_hours": "1"
                    },
                    "tue": {
                        "start": null,
                        "end": null,
                        "24_hours": "1"
                    },
                    "wed": {
                        "start": null,
                        "end": null,
                        "24_hours": "1"
                    },
                    "thu": {
                        "start": null,
                        "end": null,
                        "24_hours": "1"
                    },
                    "fri": {
                        "start": null,
                        "end": null,
                        "24_hours": "1"
                    },
                    "sat": {
                        "start": null,
                        "end": null,
                        "24_hours": "1"
                    },
                    "sun": {
                        "start": null,
                        "end": null,
                        "24_hours": "1"
                    }
                }
            },
            "payment_methods": {
                "cash": "on"
            },
            "company_logo": null,
            "photos": {
                "1": null,
                "2": null,
                "3": null
            },
            "social_profile_links": {
                "facebook": "https:\/\/en-gb.facebook.com\/brightlocal\/",
                "twitter": "https:\/\/twitter.com\/bright_local",
                "linkedin": "https:\/\/uk.linkedin.com\/company\/bright-local-seo",
                "pinterest": "https:\/\/www.pinterest.co.uk\/brightlocal\/",
                "instagram": ""
            },            
            "email_alerts": {
                "enabled": "N",
                "addresses": [
                    "<hidden>",
                    "<hidden>",
                    "<hidden>",
                    "<hidden>",
                    "<hidden>"
                ]
            },
            "old_business_name": null,
            "specialist_info": [],
            "stats": [
                {
                    "start_date": "2017-01-11 15:06:18",
                    "citations_count": 25,
                    "scheduled": 0,
                    "submitted": 0,
                    "live": 25,
                    "updated": 0,
                    "replaced": 0
                }
            ],
            "citations": [
                {
                    "site": "google.com",
                    "type": "Local Directory",
                    "domain_authority": "100",
                    "status": "Live",
                    "link": "https:\/\/www.google.com\/search?q=CUCINA+urbana&npsic=0&gbv=2&gws_rd=cr&ludocid=1563397020059271303&hl=en&gl=us",
                    "notes": ""
                },
                {
                    "site": "mapsconnect.apple.com",
                    "type": "General Directory",
                    "domain_authority": "100",
                    "status": "Live",
                    "link": "mapsconnect.apple.com",
                    "notes": "We can't give you a link to your live listing in Apple Maps. You can find your listing by using the Apple Maps app of any iOS device."
                },
                {
                    "site": "bing.com",
                    "type": "General Directory",
                    "domain_authority": "99",
                    "status": "Live",
                    "link": "bing.com",
                    "notes": "Bingplaces will send you verification PIN at your registered postal address."
                },
                {
                    "site": "mapquest.com",
                    "type": "Local Map Site",
                    "domain_authority": "95",
                    "status": "Live",
                    "link": "https:\/\/www.mapquest.com\/us\/california\/italian-restaurants-san-diego\/cucina-urbana-265234833",
                    "notes": "This site does not allow images to be uploaded and displays limited information on company profile."
                },
                {
                    "site": "yellowpages.com",
                    "type": "General Directory",
                    "domain_authority": "92",
                    "status": "Live",
                    "link": "http:\/\/www.yellowpages.com\/san-diego-ca\/mip\/cucina-urbana-22866099",
                    "notes": ""
                },
                {
                    "site": "angieslist.com",
                    "type": "General Directory",
                    "domain_authority": "91",
                    "status": "Live",
                    "link": "angieslist.com",
                    "notes": "The site supports a limited number of cities in Canada only (no problem with US located businesses). Please don't be surprise if we end up replacing this site in your order; it means your city is not supported."
                },
                {
                    "site": "citysearch.com",
                    "type": "Local Directory",
                    "domain_authority": "90",
                    "status": "Live",
                    "link": "http:\/\/www.citysearch.com\/profile\/607571610\/san_diego_ca\/cucina_urbana.html",
                    "notes": "We list your business here via Expressupdate.com; site does not accept Toll Free phone. It takes 2-3 months before your listing goes live here."
                },
                {
                    "site": "superpages.com",
                    "type": "General Directory",
                    "domain_authority": "90",
                    "status": "Live",
                    "link": "http:\/\/www.superpages.com\/bp\/san-diego-ca\/cucina-urbana-L2129766314.htm",
                    "notes": "We submit your listing to this site via Dexmedia.com"
                },
                {
                    "site": "manta.com",
                    "type": "General Directory",
                    "domain_authority": "87",
                    "status": "Live",
                    "link": "http:\/\/www.manta.com\/c\/mtxfvs9\/cucina-urbana",
                    "notes": ""
                },
                {
                    "site": "switchboard.com",
                    "type": "Local Directory",
                    "domain_authority": "87",
                    "status": "Live",
                    "link": "switchboard.com",
                    "notes": "We list your business here via Expressupdate.com; site does not accept Toll Free phone. It takes 2-3 months before your listing goes live here."
                },
                {
                    "site": "tomtom.com",
                    "type": "GPS Data Provider",
                    "domain_authority": "85",
                    "status": "Live",
                    "link": "tomtom.com",
                    "notes": "We submit data to Tomtom once every quarter, so your data will be submitted the next round during the next round of submissions to Tomtom."
                },
                {
                    "site": "whowhere.com",
                    "type": "General Directory",
                    "domain_authority": "83",
                    "status": "Live",
                    "link": "whowhere.com",
                    "notes": "We submit your listing to this site via Dexmedia.com"
                },
                {
                    "site": "kudzu.com",
                    "type": "General Directory",
                    "domain_authority": "82",
                    "status": "Live",
                    "link": "http:\/\/www.kudzu.com\/m\/Cucina-Urbana-841435",
                    "notes": ""
                },
                {
                    "site": "local.com",
                    "type": "General Directory",
                    "domain_authority": "81",
                    "status": "Live",
                    "link": "local.com",
                    "notes": "We create basic listing on this site (no images) & create a new account. Client\/agency respond to email to put listing live. See campaign email inbox."
                },
                {
                    "site": "local.botw.org",
                    "type": "Local Directory",
                    "domain_authority": "80",
                    "status": "Live",
                    "link": "local.botw.org",
                    "notes": "This site does not display URL in live listing."
                },
                {
                    "site": "aboutus.com",
                    "type": "General Directory",
                    "domain_authority": "79",
                    "status": "Live",
                    "link": "aboutus.com",
                    "notes": ""
                },
                {
                    "site": "heraldtribune.com",
                    "type": "News \/ Content Site",
                    "domain_authority": "79",
                    "status": "Live",
                    "link": "heraldtribune.com",
                    "notes": ""
                },
                {
                    "site": "directory.wfaa.com",
                    "type": "Local Directory",
                    "domain_authority": "78",
                    "status": "Live",
                    "link": "directory.wfaa.com",
                    "notes": "This site does not allow images to be uploaded and displays limited information on company profile."
                },
                {
                    "site": "chamberofcommerce.com",
                    "type": "General Directory",
                    "domain_authority": "74",
                    "status": "Live",
                    "link": "https:\/\/chamberofcommerce.com\/san-diego-ca\/2736482-cucina-urbana",
                    "notes": "We can only list your business name, address, and phone number here. Please be guided before ordering a listing from this site."
                },
                {
                    "site": "hotfrog.com",
                    "type": "General Directory",
                    "domain_authority": "74",
                    "status": "Live",
                    "link": "hotfrog.com",
                    "notes": ""
                },
                {
                    "site": "411.com",
                    "type": "Local Directory",
                    "domain_authority": "72",
                    "status": "Live",
                    "link": "411.com",
                    "notes": "We list your business here via Expressupdate.com; site does not accept Toll Free phone. It takes 2-3 months before your listing goes live here."
                },
                {
                    "site": "tupalo.com",
                    "type": "General Directory",
                    "domain_authority": "70",
                    "status": "Live",
                    "link": "tupalo.com",
                    "notes": "Tupalo is notorious on auto updating address: for example, Suite to Ste, or North to just \"N\"."
                },
                {
                    "site": "brownbook.net",
                    "type": "General Directory",
                    "domain_authority": "64",
                    "status": "Live",
                    "link": "http:\/\/www.brownbook.net\/business\/11048772\/laurel-restaurant",
                    "notes": "We cannot update the business name in this site after submission. Ensure that you get the business name provided is correct from the very beginning."
                },
                {
                    "site": "citysquares.com",
                    "type": "General Directory",
                    "domain_authority": "57",
                    "status": "Live",
                    "link": "http:\/\/citysquares.com\/b\/cucina-urbana-19686169",
                    "notes": "This site does not display URL, description for free listing. They are reserved to paid listing only."
                },
                {
                    "site": "routeandgo.net",
                    "type": "General Directory",
                    "domain_authority": "22",
                    "status": "Live",
                    "link": "http:\/\/www.routeandgo.net\/place\/3118699\/united-states\/cucina-urbana",
                    "notes": ""
                }
            ],
            "aggregators": [],
            "urls": {
                "interactive_url": "<hidden>",
                "pdf_url": "<hidden>",
                "csv_url": "<hidden>"
            }
        }
    }
}
```

### HTTP Request

`GET https://tools.brightlocal.com/seo-tools/api/v4/cb/get`

### Query Parameters

Parameter | Notes
--------- | -----
api-key	| <span class="label label-required">Required</span>	
sig	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
campaign-id	| <span class="label label-required">Required</span>	

## Get Credits Balance (deprecated)

<span class="label label-info">Account Method</span>

> Get Credits

```php
<?php
require '../../vendor/autoload.php';

use BrightLocal\Api;

$api = new Api('<YOUR_API_KEY>', '<YOUR_API_SECRET>');
$response = $api->get('/v2/cb/credits');
print_r($response->getResult());
```

```csharp
Api api = new Api("<INSERT_API_KEY>", "<INSERT_API_SECRET>");
Response response = api.Get("/v2/cb/credits");
Console.WriteLine(response.GetContent());
```

> Success (200 OK)

```json
{
    "success": true,
    "credits": 9000
}
```

### HTTP Request

`GET https://tools.brightlocal.com/seo-tools/api/v2/cb/credits`

### Query Parameters

Parameter | Notes
--------- | -----
api-key	| <span class="label label-required">Required</span>	
sig	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
expires	| <span class="label label-required">Required</span> [See above for how to generate signature and expires values.](#authentication)
