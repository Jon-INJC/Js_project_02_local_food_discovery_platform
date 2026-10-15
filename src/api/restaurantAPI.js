async function handleResponse(response, errorMessage) {
  if (!response.ok) {
    throw new Error(errorMessage || "API request failed");
  }
  return response.json();
}

export async function getCuratedCollections() {
  const response = await fetch("http://localhost:3000/curatedCollections");

  if (!response.ok) {
    throw new Error("Failed to fetch curated collections");
  }

  return response.json();
}

export async function getFeaturedRestaurants() {
  const response = await fetch(
    "http://localhost:3000/restaurants?isFeatured=true",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch featured restaurants");
  }

  return response.json();
}

export async function getRestaurant(id) {
  const response = await fetch(`http://localhost:3000/restaurants/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch restaurant");
  }

  return response.json();
}

export async function getRestaurantByName(name) {
  const response = await fetch(
    `http://localhost:3000/restaurants?name=${name}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch restaurant");
  }

  return response.json();
}

export async function setRestaurant(data) {
  console.log(data);
  return data;
}

export async function getRestaurantSaves(id) {
  const response = await fetch(
    `http://localhost:3000/restaurantSaves?restaurantId=${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch restaurant");
  }

  return response.json();
}

export async function getRestaurantByOwnerId(id) {
  const response = await fetch(
    `http://localhost:3000/restaurants?ownerId=${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch restaurant");
  }

  return response.json();
}

export async function getSavedRestaurantByUserId(id) {
  const response = await fetch(
    `http://localhost:3000/restaurantSaves?userId=${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch restaurant");
  }

  return response.json();
}

export async function searchRestaurants({ query = "", category = "" } = {}) {
  const params = new URLSearchParams();

  if (query.trim()) {
    params.set("name:contains", query.trim());
  }

  if (category) {
    params.set("category:contains", category);
  }

  const response = await fetch(
    `http://localhost:3000/restaurants?${params.toString()}`,
  );

  return handleResponse(response, "Failed to search restaurants");
}
