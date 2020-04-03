import * as AWS from 'aws-sdk'
import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'

type Body = {
  name: string
  email: string
  body: string
}

AWS.config.update({ region: 'us-west-2' })

export const send: APIGatewayProxyHandler = async (event): Promise<APIGatewayProxyResult> => {
  const ses = new AWS.SES({ apiVersion: '2010-12-01' })
  const { name, email, body }: Body = JSON.parse(event.body || '')

  const params: AWS.SES.SendEmailRequest = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Text: {
          Data: body,
          Charset: 'utf-8',
        },
      },
      Subject: {
        Data: `Contact from ${name} <${email}>`,
        Charset: 'utf-8',
      },
    },
    Source: process.env.EMAIL || '',
  }

  try {
    await ses.sendEmail(params).promise()
  } catch (error) {
    console.error(error)
  }

  return {
    statusCode: 200,
    body: '',
  }
}
