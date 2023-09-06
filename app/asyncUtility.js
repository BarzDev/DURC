export async function getTopic() {
  try {
    const response = await fetch("https://apimongodb.barzdev.repl.co/api/topics", {
      method: "GET",

      headers: {
        accept: "application/json",
        "Cache-Control": "no-store",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the response as JSON
    return data; // Return the fetched data
  } catch (err) {
    console.error("Error fetching topics:", err);
    throw err; // Re-throw the error so that the caller can handle it
  }
}
