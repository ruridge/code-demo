import { users } from "./_users.js";

export const config = {
  runtime: "experimental-edge",
};

const headers = { "Content-Type": "application/json" };

export default function people(req) {
  const url = new URL(req.url);
  let employment = url.searchParams.get("employment");
  let name = url.searchParams.get("name_like");
  let filteredPeople = users.people;

  if (employment) {
    filteredPeople = filteredPeople.filter(
      (person) => person.employment.toLowerCase() === employment.toLowerCase()
    );
  }
  if (name) {
    filteredPeople = filteredPeople.filter((person) =>
      person.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  const blob = new Blob([JSON.stringify(filteredPeople, null, 2)], {
    type: "application/json",
  });

  return new Response(blob, { status: 200, statusText: "OK", headers });
}
