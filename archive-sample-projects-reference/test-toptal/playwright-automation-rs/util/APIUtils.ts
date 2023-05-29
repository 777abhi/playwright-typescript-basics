import { APIRequestContext, expect } from "@playwright/test";

export class APIUtils {
  readonly apiContext: APIRequestContext;

  constructor(apiContext) {
    this.apiContext = apiContext;
  }
  async getToken() {
    const response = await this.apiContext.post(
      "https://www.rahulshettyacademy.com/api/ecom/auth/login",
      {
        data: {
          userEmail: "test@no-reply.com",
          userPassword: "Test@1234",
        },
      }
    );

    const responseBody = await response.text();
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    console.log(await JSON.parse(responseBody));
    return await JSON.parse(responseBody).token;
  }

  async createOrderID(token) {
    const responseCreateOrder = await this.apiContext.post(
      "https://www.rahulshettyacademy.com/api/ecom/order/create-order",
      {
        data: {
          orders: [
            {
              country: "Cuba",
              productOrderedId: "6262e990e26b7e1a10e89bfa",
            },
          ],
        },
        headers: {
          Authorization: token,
        },
      }
    );

    expect(await responseCreateOrder.ok()).toBeTruthy();
    expect(await responseCreateOrder.status()).toBe(201);

    const responseCreateOrderJson = await responseCreateOrder.json();
    console.log(await responseCreateOrderJson.orders[0]);
    return await responseCreateOrderJson.orders[0];
  }
}
