## Local development

Prerequisites: 

- [npm 6.x](https://www.npmjs.com/)
- [node 12.x](https://nodejs.org/en/)
- [serverless](https://www.npmjs.com/package/serverless)

Create `.env` file: 
>`cp .env.example .env`

Run project locally

>`sls offline start --skipCacheInvalidation`

## Deployment

Prerequisites: 
    - AWS account
    - AWS CLI and configure it

Deploy to AWS Lambda
> `sls deploy`