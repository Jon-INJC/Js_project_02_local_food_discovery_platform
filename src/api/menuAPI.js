export async function getMenuItems(id) {
  const response = await fetch(
    `http://localhost:3000/menuItems/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch menu items");
  }

  return response.json();
}

export async function getMenuItemsByName(name) {
  const response = await fetch(
    `http://localhost:3000/menuItems?name=${name}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch menu items");
  }

  return response.json();
}

export async function setMenuItem(data){
  console.log(data);
  return data;
}