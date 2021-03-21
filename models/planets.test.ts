import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std/testing/asserts.ts";

Deno.test("Short Example test", () => {
  assertEquals("deno", "deno");
  assertNotEquals({ runtime: "deno" }, { runtime: "node" });
  console.log(Deno.build.os);
});

Deno.test({
  name: "ops leak",
  sanitizeOps: false,
  fn() {
    setTimeout(console.log, 10000);
  },
});

Deno.test({
  name: "resource leak",
  sanitizeResources: false,
  async fn() {
    await Deno.open("./models/planets.ts");
  },
});
