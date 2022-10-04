import promisesCheck from "./promise.js";

import { marks } from "./promise.lib.js";

it("should return db1 data", async () => {
  const res = await promisesCheck(1);
  expect(res).toStrictEqual({
    id: 1,
    username: "username1",
    country: "country1",
    firstname: "firstname1",
    lastname: "lastname1",
    email: "email1"
  });
});

it("should return db2 data", async () => {
  const res = await promisesCheck(2);
  expect(res).toStrictEqual({
    id: 2,
    username: "username2",
    country: "country2",
    firstname: "firstname2",
    lastname: "lastname2",
    email: "email2"
  });
});

it("should time properly", async () => {
  const start = new Date().getTime();
  await promisesCheck(1);
  expect(new Date().getTime() - start).toBeLessThan(220);
});

it("should throw Error central", async (done) => {
  expect.assertions(1);
  try {
    await promisesCheck(10);
  } catch (e) {
    expect(e).toMatch("Error central");
    done();
  }
});

it("should throw Error db3", async (done) => {
  expect.assertions(1);
  try {
    await promisesCheck(3);
  } catch (e) {
    done();
    expect(e).toMatch("Error db3");
  }
});

it("should throw Error vault", async (done) => {
  expect.assertions(1);
  try {
    await promisesCheck(9);
  } catch (e) {
    expect(e).toMatch("Error vault");
    done();
  }
});

it("should have left a mark", async () => {
  marks[1] = 0;
  await promisesCheck(1);
  expect(marks[1]).toBe(1);
});
