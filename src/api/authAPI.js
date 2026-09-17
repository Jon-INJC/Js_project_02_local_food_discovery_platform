export async function getUsers(email) {
  const response = await fetch(
    `http://localhost:3000/users?email=${encodeURIComponent(email)}`
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