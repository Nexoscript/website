import { REPOSITORIES } from "./repositories";

const TEN_MIN = 10 * 60 * 1000;

type ReleaseCache = {
  title: string | null;
  fetchedAt: number;
};

const cache = new Map<string, ReleaseCache>();

async function fetchLatestRelease(repo: string) {
  const res = await fetch(
    `https://api.github.com/repos/Nexoscript/${repo}/releases/latest`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "astro-app",
      },
    }
  );

  if (!res.ok) return;

  const json = await res.json();

  cache.set(repo, {
    title: json.name ?? json.tag_name ?? null,
    fetchedAt: Date.now(),
  });
}

export async function getLatestRelease(repo: string) {
  const entry = cache.get(repo);

  if (!entry || Date.now() - entry.fetchedAt > TEN_MIN)
    await fetchLatestRelease(repo);

  return cache.get(repo)?.title ?? null;
}

/* Background refresh */
setInterval(() => {
  for (const repo of REPOSITORIES) fetchLatestRelease(repo);
}, TEN_MIN);

/* Initial fetch */
for (const repo of REPOSITORIES) fetchLatestRelease(repo);
