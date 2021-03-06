var config = {
    myapikey: {
        samlStrategy: {

            "path": "/myapikey/samlcallback",
            "entryPoint": "https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php",
            "issuer": "IntegrifySAMLTest",
            "protocol": "http://",
            cert: "idp-openid.crt"
        },
        integrify: {
            "service_user" : "iApprove",
            "integrify_base_url" : "http://localhost:3500",
            "consumer_key": "myapikey",
            "consumer_secret": "mysecret",
            "fieldMap" : {
                "NameFirst": "givenName",
                "NameLast" : "sn",
                "Email" : "mail",
                "UserName" : "mail",
                "Defaults":{"TimeZone":"Eastern Standard Time"}
            }
        }
    }

}


module.exports = config;
