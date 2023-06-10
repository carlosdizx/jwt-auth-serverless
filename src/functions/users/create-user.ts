import { APIGatewayProxyHandler } from "aws-lambda";
import middy from "@middy/core";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import responseLambda from "../../utils/response";
import hasBodyValid from "../../middleware/HasBodyValid";

const originalHandler: APIGatewayProxyHandler = async (event: any, context) => {
  console.log(`HANDLER: Starting ${context.functionName}...`);
  return responseLambda(200, event);
};

export const handler = middy()
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(hasBodyValid(["email", "password"]))
  .handler(originalHandler);
