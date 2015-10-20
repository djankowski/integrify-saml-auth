The folder can be installed into an integrify instance and configured to allow SSO integration via SAML 2.0

To configure:

* Download and unzip this folder. Save it under webserver/app/_custom in your Integrify installation.
* Obtain a certificate in base64 DER format if required to verify the SAML asertion sent from your IDP and copy it to this folder
* Copy the config.saml.js, config-adfs.js or config-openid.js (example configs) file to a file named config.js in this folder
* Edit config.js based on the requirements specified by your IDP and your Integrify instance settings. Note, you will need a Consumer_Key with API access with Impersonation enabled. See your OAUTH_CONSUMERS table.
* Copy the samlauth.yml file to  /webserver/app/data/routes
* Copy the auth-config-yourhost-yourport.yml file to the root /webserver. Edit the contents of this file and replace myapikey in the iurl property to a valid API key for your instance.
Rename the file replacing yourhost with the host name of the Integrify server. If running on a port other than 80 or 443, replace -yourport with the port the Integrify servier is listening on. 
If Integrify is running on port 80 or por 443, remove the -yourport section from the file name.
* restart your Integrify isntance
* browse to http(s)://{integrify server}/samlauth/{app_key}/status to verify that the module has loaded
* browse to http(s)://{integrify server}/samlauth/{app_key}/metadata to get the XML metadata that describes this service including the Assertion Consumer Service URL and Identifier
