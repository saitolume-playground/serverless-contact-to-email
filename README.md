# serverless-contact-to-email

Sample API implementation for transferring contact form data with Serverless Framework

## Requirements

- Node.js 12.x.x
- AWS account
- [Verifying your email address](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/setting-up-email.html)


## API

- method: POST
- url: `https://${BASE_URL}/send`
- body
  - name
  - email
  - body

Sample

```bash
$ http POST http://localhost:3000/dev/send name=saitoeku3 email=saitoeku3@gmail.com body='This is a test'
HTTP/1.1 200 OK
Connection: keep-alive
Date: Fri, 03 Apr 2020 05:26:11 GMT
cache-control: no-cache
content-length: 0
content-type: application/json; charset=utf-8
```

## Environment variables

## Development

```bash
$ git clone
$ cd serverless-contact-to-email
$ yarn install
$ yarn dev
```

## Deployment

```bash
$ yarn deploy
$ yarn drop # Remove uploaded functions
```

## License

MIT
