import test, { expect, request } from "@playwright/test";

test.describe("Test Suite HTTP Methods", () => {
  test("DELETE", async ({ request, baseURL }) => {
    const response = request.delete(baseURL + "/delete");
    expect((await response).ok()).toBeTruthy();
    expect((await response).status()).toBe(200);

    const responseBody = await (await response).json();
    expect(responseBody.origin).toBeTruthy();
    expect(responseBody.url).toBe(baseURL + "/delete");
  });
  test("GET", async ({ request, baseURL }) => {
    const response = request.get(baseURL + "/get");
    expect((await response).ok()).toBeTruthy();
    expect((await response).status()).toBe(200);
  });
  test("PATCH", async ({ request, baseURL }) => {
    const response = await request.patch(baseURL + "/patch");
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
  test("POST", async ({ request, baseURL }) => {
    const response = await request.post(baseURL + "/post");
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
  test("PUT", async ({ request, baseURL }) => {
    const response = await request.put(baseURL + "/put");
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});

test.describe("Auth methods", () => {
  test("Basic Auth 200", async ({ baseURL }) => {
    const apiContext = await request.newContext({
      httpCredentials: {
        username: "user",
        password: "passwd",
      },
    });

    const response = await apiContext.get(baseURL + "/basic-auth/user/passwd");
    const responseBody = (await response).json();
    console.log(await responseBody);
    expect((await response).ok()).toBeTruthy();
    expect((await response).status()).toBe(200);
  });
  test("Basic Auth 401", async ({ baseURL }) => {
    const context = await request.newContext({
      httpCredentials: {
        username: "user",
        password: "paswd",
      },
    });
    const response = await context.get(baseURL + "/basic-auth/user/passwd");
    expect(response.status()).toBe(401);
    expect(response.statusText()).toBe("UNAUTHORIZED");
    expect(response.ok()).toBeFalsy();
  });

  test("bearer scenario", async ({ baseURL }) => {
    const context = request.newContext();
    const response = (await context).get(baseURL + "/bearer", {
      headers: {
        Authorization: "Bearer Authorization",
      },
    });
    expect((await response).ok()).toBeTruthy();
    expect((await response).status()).toBe(200);
  });
});
