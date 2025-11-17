export async function getUserProfile(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      "Accept": "application/vnd.github+json",
      "User-Agent": "Next.js App"
    },
    cache: "no-store"   // prevents caching in dev
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub user");
  }

  return res.json();
}
