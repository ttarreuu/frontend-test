const dataTemplate = {
  db: "db{i}",
  id: "id{i}",
  username: "username{i}",
  country: "country{i}",
  firstname: "firstname{i}",
  lastname: "lastname{i}",
  email: "email{i}"
};

const data = [];

for (let i = 1; i < 10; i++) {
  const item = { ...dataTemplate };
  for (let k in item) {
    item[k] = item[k].replace("{i}", i);
  }
  item.db = `db${((i - 1) % 3) + 1}`;
  data[i] = item;
}
data[4].db = "db4";
delete data[9].firstname;

const marks = [];

const delay = (retval, time) =>
  new Promise((res) => setTimeout(() => res(retval), time));

const central = (id) => {
  if (!data[id]) {
    return Promise.reject("id doesnt exist");
  }
  return delay(data[id].db, 100);
};

const db = (dbId) => (id) => {
  if (data[id]?.db !== `db${dbId}`) {
    throw Error("wrong db");
  }
  const { username, country } = data[id];
  return delay({ username, country }, 100);
};
const db1 = db(1);
const db2 = db(2);
const db3 = () => Promise.reject("db3 never works");

const vault = (id) => {
  if (!data[id]) {
    return delay({}, 150);
  }
  const { firstname, lastname, email } = data[id];

  if (!firstname || !lastname || !email) {
    return Promise.reject("data missing in vault");
  }
  return delay({ firstname, lastname, email }, 150);
};

const mark = async (id) => {
  marks[id] = (marks[id] || 0) + 1;
  await delay(null, 100);
};

export { central, db1, db2, db3, vault, mark, marks };
