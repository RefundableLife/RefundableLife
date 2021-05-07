# Call Recordings

## Request URL

https://api-call-recordings-k2mfaanpza-nw.a.run.app/call-recordings/{reference}?key={apikey}

### Required Parameters

{reference} : This value should be replaced with the Refundable reference e.g. REF-00000019
{apikey} : This value should be replaced with the API Key you have been given.

The request body should be the contents of the file.

### Response

All responses will be in JSON. A successful response will look like the following.

```
{
  success: true,
}
```

An unsuccessful response will be one of the following two

**When an invalid API Key has been provided**

```
{
  success: false,
  message: "Invalid API Key"
}
```

**When an a lead could not be found with the given reference**

```
{
  success: false,
  message: "No lead was found"
}
```

## Sample Requests

### CURL

```
curl --location --request POST 'https://api-call-recordings-k2mfaanpza-nw.a.run.app/call-recordings/{reference}?key={apikey}' \
--header 'Content-Type: audio/mpeg' \
--data-binary '@/Users/vultuk/CallRecordings/test1.mp3'
```

### NodeJS (Axios)

```
var axios = require('axios');
var data = '<file contents here>';

var config = {
  method: 'post',
  url: 'https://api-call-recordings-k2mfaanpza-nw.a.run.app/call-recordings/{reference}?key={apikey}',
  headers: {
    'Content-Type': 'audio/mpeg'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

### NodeJS (Native)

```
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'api-call-recordings-k2mfaanpza-nw.a.run.app',
  'path': '/call-recordings/{reference}?key={apikey},
  'headers': {
    'Content-Type': 'audio/mpeg'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = "<file contents here>";

req.write(postData);

req.end();
```

### PHP (Curl)

```
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api-call-recordings-k2mfaanpza-nw.a.run.app/call-recordings/{reference}?key={apikey}',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => "<file contents here>",
  CURLOPT_HTTPHEADER => array(
    'Content-Type: audio/mpeg'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

```

### Shell (Wget)

```
wget --no-check-certificate --quiet \
  --method POST \
  --timeout=0 \
  --header 'Content-Type: audio/mpeg' \
  --body-file='/Users/vultuk/CallRecordings/test.mp3' \
   'https://api-call-recordings-k2mfaanpza-nw.a.run.app/call-recordings/{reference}?key={apikey}'
```
