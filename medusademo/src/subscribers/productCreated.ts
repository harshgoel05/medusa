import {
  Product,
  ProductService,
  SubscriberArgs,
  SubscriberConfig,
} from "@medusajs/medusa";

type OrderPlacedEvent = {
  id: string;
  no_notification: boolean;
};

export default async function handleProductCreation({
  data,
  eventName,
  container,
  pluginOptions,
}: SubscriberArgs<Product>) {
  console.log(data);
  const createProductService = container.resolve(
    "createProductService"
  );

  createProductService.createProductInSanity(data);
}

export const config: SubscriberConfig = {
  event: ProductService.Events.CREATED,
};
