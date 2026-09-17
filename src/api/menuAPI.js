export async function getMenuItems(id) {
  const response = await fetch(
    `http://localhost:3000/menuItems/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch menu items");
  }

  return response.json();
}