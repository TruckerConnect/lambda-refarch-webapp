// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6lnvbsl3bf8hn457eheero8u21",     // CognitoClientID
  "api_base_url": "https://omv0wygp2k.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-trucker-connect.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d14yif6naksib4.amplifyapp.com"                                      // AmplifyURL
};

export default config;
