import Navbar from "@/components/Navbar";
import CreateRepoForm from "@/components/CreateRepoForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create AI Agent Repository | Lost Tangerine",
  description: "Scaffold a new GitHub repository for your AI agent project.",
};

export default function CreateRepoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
        {/* Background glow */}
        <div
          className="fixed inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(251,146,60,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-lg">
          {/* Header */}
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 font-medium mb-3">
              GitHub · AI Agent
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Create Repository
            </h1>
            <p className="text-sm text-white/50">
              Scaffold a new GitHub repository for your AI agent project.
              Equivalent to{" "}
              <code className="bg-surface-raised px-1.5 py-0.5 rounded text-accent/80 text-xs">
                gh repo create &lt;name&gt; [flags]
              </code>
            </p>
          </div>

          <CreateRepoForm />

          {/* CLI equivalent reference */}
          <div className="mt-10 p-4 rounded-lg border border-surface-border bg-surface-raised text-xs text-white/40 space-y-1.5">
            <p className="text-white/60 font-medium mb-2">CLI equivalent</p>
            <code className="block text-white/50">
              gh repo create &lt;name&gt; \
            </code>
            <code className="block text-white/50 pl-4">
              --description &quot;&lt;description&gt;&quot; \
            </code>
            <code className="block text-white/50 pl-4">
              --homepage &quot;&lt;url&gt;&quot; \
            </code>
            <code className="block text-white/50 pl-4">
              [--public | --private] \
            </code>
            <code className="block text-white/50 pl-4">
              --gitignore &lt;template&gt; \
            </code>
            <code className="block text-white/50 pl-4">--license &lt;spdx-id&gt;</code>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-xs text-white/20 border-t border-surface-border">
        © {new Date().getFullYear()} Lost Tangerine. All rights reserved.
      </footer>
    </>
  );
}
