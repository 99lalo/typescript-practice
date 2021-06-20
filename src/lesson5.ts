
const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserIn<T, V> {
  name: string;
  data: T;
  meta: V;
}
const user3: UserIn<{ meta: string }, string> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const user4: UserIn<string[], string> = {
  name: "John",
  data: ["foo", "bar", "baz"],
  meta: "bar",
};
