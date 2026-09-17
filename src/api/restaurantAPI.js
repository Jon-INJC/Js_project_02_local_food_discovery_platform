export async function getCuratedCollections() {
  const response = await fetch("http://localhost:3000/curatedCollections");

  if (!response.ok) {
    throw new Error("Failed to fetch curated collections");
  }

  return response.json();
}

export async function getFeaturedRestaurants() {
  const response = await fetch(
    "http://localhost:3000/restaurants?isFeatured=true"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch featured restaurants");
  }

  return response.json();
}

export async function getRestaurant(id) {
  const response = await fetch(
    `http://localhost:3000/restaurants/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch restaurant");
  }

  return response.json();
}