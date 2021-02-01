// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5pvaccrh44c8t129api1s6td6r",     // CognitoClientID
  "api_base_url": "https://ukwvx7rd6i.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-trucker-connect.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1gzlgybm5ejc9.amplifyapp.com"                                      // AmplifyURL
};

export default config;
