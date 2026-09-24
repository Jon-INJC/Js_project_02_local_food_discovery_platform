export async function getReviewsByRestaurantId(id) {
  const response = await fetch(
    `http://localhost:3000/reviews?restaurantId=${id}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return response.json();
}
