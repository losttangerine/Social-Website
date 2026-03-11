"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GITIGNORE_TEMPLATES = [
  "", "Node", "Python", "Go", "Rust", "Java", "C++", "C", "Ruby", "Swift",
];

const LICENSE_TEMPLATES = [
  { value: "", label: "None" },
  { value: "mit", label: "MIT" },
  { value: "apache-2.0", label: "Apache 2.0" },
  { value: "gpl-3.0", label: "GPL v3" },
  { value: "bsd-2-clause", label: "BSD 2-Clause" },
  { value: "bsd-3-clause", label: "BSD 3-Clause" },
  { value: "unlicense", label: "The Unlicense" },
];

interface RepoResult {
  html_url: string;
  full_name: string;
  clone_url: string;
  ssh_url: string;
  private: boolean;
  description?: string;
}

export default function CreateRepoForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [homepage, setHomepage] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [gitignore, setGitignore] = useState("");
  const [license, setLicense] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RepoResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/create-repo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description: description || undefined,
          homepage: homepage || undefined,
          private: isPrivate,
          auto_init: true,
          gitignore_template: gitignore || undefined,
          license_template: license || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to create repository.");
      } else {
        setResult(data as RepoResult);
        setName("");
        setDescription("");
        setHomepage("");
        setIsPrivate(false);
        setGitignore("");
        setLicense("");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-surface-raised border border-surface-border rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors";
  const labelClass = "block text-xs text-white/50 uppercase tracking-wider mb-1.5 font-medium";

  return (
    <div className="max-w-lg w-full mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="repo-name" className={labelClass}>
            Repository Name <span className="text-accent">*</span>
          </label>
          <input
            id="repo-name"
            type="text"
            required
            placeholder="my-ai-agent"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            pattern="[a-zA-Z0-9_.\-]+"
            title="Only letters, numbers, hyphens, underscores, and dots"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="repo-desc" className={labelClass}>
            Description
          </label>
          <input
            id="repo-desc"
            type="text"
            placeholder="A short description of your AI agent"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Homepage */}
        <div>
          <label htmlFor="repo-homepage" className={labelClass}>
            Homepage URL
          </label>
          <input
            id="repo-homepage"
            type="url"
            placeholder="https://example.com"
            value={homepage}
            onChange={(e) => setHomepage(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Gitignore + License row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="gitignore" className={labelClass}>
              .gitignore Template
            </label>
            <select
              id="gitignore"
              value={gitignore}
              onChange={(e) => setGitignore(e.target.value)}
              className={inputClass + " cursor-pointer"}
            >
              <option value="">None</option>
              {GITIGNORE_TEMPLATES.filter(Boolean).map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="license" className={labelClass}>
              License
            </label>
            <select
              id="license"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              className={inputClass + " cursor-pointer"}
            >
              {LICENSE_TEMPLATES.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Visibility toggle */}
        <div className="flex items-center justify-between p-4 rounded-lg border border-surface-border bg-surface-raised">
          <div>
            <p className="text-sm text-white font-medium">Visibility</p>
            <p className="text-xs text-white/40 mt-0.5">
              {isPrivate ? "Only you can see this repository" : "Anyone on the internet can see this repository"}
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={isPrivate}
            onClick={() => setIsPrivate((v) => !v)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${
              isPrivate ? "bg-accent" : "bg-surface-border"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                isPrivate ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={loading || !name}
          whileHover={{ scale: loading || !name ? 1 : 1.02 }}
          whileTap={{ scale: loading || !name ? 1 : 0.98 }}
          className="w-full py-3 rounded-lg bg-accent text-white text-sm font-semibold transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating…" : "Create Repository"}
        </motion.button>
      </form>

      {/* Feedback */}
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 p-4 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-sm"
          >
            {error}
          </motion.div>
        )}

        {result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 p-5 rounded-lg border border-accent/30 bg-accent/5 space-y-3"
          >
            <p className="text-sm font-semibold text-accent">Repository created!</p>
            <div className="space-y-2 text-xs text-white/60">
              <div className="flex items-center justify-between gap-2">
                <span className="text-white/40">Name</span>
                <a
                  href={result.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors truncate"
                >
                  {result.full_name}
                </a>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-white/40">Visibility</span>
                <span>{result.private ? "Private" : "Public"}</span>
              </div>
              {result.description && (
                <div className="flex items-start justify-between gap-2">
                  <span className="text-white/40 shrink-0">Description</span>
                  <span className="text-right">{result.description}</span>
                </div>
              )}
              <div className="pt-2 border-t border-surface-border">
                <p className="text-white/40 mb-1">Clone via HTTPS</p>
                <code className="block bg-surface-raised rounded px-3 py-2 text-white/80 text-xs break-all">
                  git clone {result.clone_url}
                </code>
              </div>
              <div>
                <p className="text-white/40 mb-1">Clone via SSH</p>
                <code className="block bg-surface-raised rounded px-3 py-2 text-white/80 text-xs break-all">
                  git clone {result.ssh_url}
                </code>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
