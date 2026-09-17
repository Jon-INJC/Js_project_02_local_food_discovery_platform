export async function getRecentMenuItems() {
  const response = await fetch(
    "http://localhost:3000/analyticsEvents"
  );

  if (!response.ok) {
    throw new Error("Failed to analyticsEvents");
  }

  const data = await response.json();

  const resentMenus = data.filter(item => {
    const itemsTime = new Date(item.createdAt).getTime();
    return itemsTime >= Date.now() - (7 * 24 * 60 * 60 * 1000);
  })

  return resentMenus;
}