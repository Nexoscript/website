import type { APIRoute } from "astro";
import { REPOSITORIES } from "../../server/repositories";
import { getLatestRelease } from "../../server/githubReleaseCache";

export const GET: APIRoute = async () => {
  const result: Record<string, string | null> = {};

  for (const repo of REPOSITORIES) result[repo] = await getLatestRelease(repo);

  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
};
