import { APIGatewayProxyHandler } from "aws-lambda";
import middy from "@middy/core";
import httpHeaderNormalizer from "@middy/http-header-normalizer";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import hasBodyValid from "../../middleware/HasBodyValid";
import UsersCrudService from "../../services/users.crud.service";
import responseLambda from "../../utils/response";

const originalHandler: APIGatewayProxyHandler = async (event: any, context) => {
  console.log(`HANDLER: Starting ${context.functionName}...`);

  const { email, password, rolesIds } = event.body;

  if(rolesIds.length === 0)
    return responseLambda(400, { message: "Invalid roles" });

  return await UsersCrudService.createUser({ email, password, rolesIds });
};

export const handler = middy()
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(hasBodyValid(["email", "password", "rolesIds"]))
  .handler(originalHandler);
