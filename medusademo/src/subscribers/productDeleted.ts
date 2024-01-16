import {
    Product,
    ProductService,
    SubscriberArgs,
    SubscriberConfig,
  } from "@medusajs/medusa";
  
  
  export default async function handleProductCreation({
    data,
    eventName,
    container,
    pluginOptions,
  }: SubscriberArgs<Product>) {
    const createProductService = container.resolve(
      "createProductService"
    );
  
    createProductService.deleteDocumentInSanity(data);
  }
  
  export const config: SubscriberConfig = {
    event: ProductService.Events.DELETED,
  };
  