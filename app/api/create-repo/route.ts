import { NextRequest, NextResponse } from "next/server";

export interface CreateRepoPayload {
  name: string;
  description?: string;
  homepage?: string;
  private?: boolean;
  auto_init?: boolean;
  gitignore_template?: string;
  license_template?: string;
}

export async function POST(req: NextRequest) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN environment variable is not set." },
      { status: 500 }
    );
  }

  let body: CreateRepoPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, description, homepage, private: isPrivate, auto_init, gitignore_template, license_template } = body;

  if (!name || typeof name !== "string" || !/^[a-zA-Z0-9_.-]+$/.test(name)) {
    return NextResponse.json(
      { error: "Repository name is required and must contain only letters, numbers, hyphens, underscores, or dots." },
      { status: 400 }
    );
  }

  const payload: Record<string, unknown> = {
    name,
    private: isPrivate ?? false,
    auto_init: auto_init ?? true,
  };
  if (description) payload.description = description;
  if (homepage) payload.homepage = homepage;
  if (gitignore_template) payload.gitignore_template = gitignore_template;
  if (license_template) payload.license_template = license_template;

  const ghRes = await fetch("https://api.github.com/user/repos", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify(payload),
  });

  const data = await ghRes.json();

  if (!ghRes.ok) {
    return NextResponse.json(
      { error: data.message ?? "GitHub API error.", errors: data.errors },
      { status: ghRes.status }
    );
  }

  return NextResponse.json({
    html_url: data.html_url,
    full_name: data.full_name,
    clone_url: data.clone_url,
    ssh_url: data.ssh_url,
    private: data.private,
    description: data.description,
  });
}
