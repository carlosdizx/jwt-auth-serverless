import responseLambda from "../utils/response";
const hasBodyValid = (properties: any[] = []) => {
  return {
    before: async (handler) => {
      console.log("MIDDLEWARE: Starting hasBodyValid method");
      handler.context.callbackWaitsForEmptyEventLoop = false;

      if (!handler.event.body)
        return responseLambda(400, {
          message: "Invalid body, body must be a object",
        });

      if (properties.length > 0) {
        const { body } = handler.event;
        const keys = Object.keys(body);
        for (const property of properties) {
          if (!keys.includes(property))
            return responseLambda(400, {
              message: `Invalid property ${property}, is undefined!`,
            });
        }
      }
    },
    onError: async (handler) => {
      console.log("onError: ", handler.error);
      const e = responseLambda(401, handler.error);
      return handler.callback(null, e);
    },
  };
};

export default hasBodyValid;
