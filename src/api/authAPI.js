export async function getUsers(email) {
  const response = await fetch(
    `http://localhost:3000/users?email=${encodeURIComponent(email)}`,
  );

  if (!response.ok) {
    throw new Error("Failed to reach authentication server");
  }

  const users = await response.json();

  if (!users || users.length === 0) {
    return null;
  }

  return users[0];
}

export async function getUsersByID(id) {
  const response = await fetch(
    `http://localhost:3000/users/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json();
}

export async function setUsers(data) {
  console.log(data);
  return data;
}
