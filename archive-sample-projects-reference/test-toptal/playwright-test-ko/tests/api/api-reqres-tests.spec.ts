import test, { expect, request } from "@playwright/test";

test.describe("API tests examples all", () => {
  test("GET Request", async ({ request, baseURL }) => {
    const response = await request.get(baseURL + "/api/users/2");
    expect((await response).ok()).toBeTruthy();
    expect((await response).status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.data.email).toBe("janet.weaver@reqres.in");
  });

  test("GET - List users", async ({ request, baseURL }) => {
    const response = request.get(baseURL + "/api/users", {
      params: {
        page: "2",
      },
    });
    expect((await response).ok()).toBeTruthy();
    expect((await response).status()).toBe(200);
    const responseBody = await (await response).json();
    expect(await responseBody.page).toBe(2);
    expect(await responseBody.per_page).toBe(6);
    responseBody.data.forEach((element) => {
      expect(element.email).toContain("@reqres.in");
    });
  });

  test("GET user not found", async ({ request, baseURL }) => {
    const response = await request.get(baseURL + "/api/users/23");
    expect(response.ok()).toBeFalsy();
    expect(response.status()).toBe(404);
  });

  test("POST CREATE users", async ({ request, baseURL }) => {
    const response = request.post(baseURL + "/api/users", {
      data: {
        name: "morpheus",
        job: "leader",
      },
    });
    expect((await response).ok()).toBeTruthy();
    expect((await response).status()).toBe(201);
    const responseBody = await (await response).json();

    expect(responseBody.createdAt).toBeTruthy();
    expect(responseBody.id).toBeTruthy();
    expect(responseBody.name).toBe("morpheus");
    expect(responseBody.job).toBe("leader");
  });

  test("PUT update user", async ({ request, baseURL }) => {
    const response = await request.put(baseURL + "/api/users/2", {
      data: {
        name: "morpheus",
        job: "zion resident",
      },
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.updatedAt).toBeTruthy();
    expect(responseBody.name).toBe("morpheus");
    expect(responseBody.job).toBe("zion resident");
  });

  test("PATCH partial update data", async ({ request, baseURL }) => {
    const response = await request.patch(baseURL + "/api/users/2", {
      data: {
        "name": "morpheus",
        "job": "zion resident"
    }
    });

    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    await expect(responseBody.updatedAt).toBeTruthy();


  });

  test("DELETE request", async ({request, baseURL})=>{
      const response = await request.delete(baseURL+'/api/users/2');
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(204);

  })
});
