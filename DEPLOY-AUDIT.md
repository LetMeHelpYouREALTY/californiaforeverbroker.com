# Git → Vercel deployment audit

**Project:** californiaforeverbroker.com  
**Date:** 2026-03-03  
**Issue:** Pushing to Git does not trigger a Vercel deployment.

---

## What was verified (repo and CLI)

| Check | Result |
|-------|--------|
| Git remote | `https://github.com/DrJanDuffy/californiaforeverbroker.com.git` |
| Production branch | `main` |
| Vercel project | `californiaforeverbroker.com` (scope: **janet-duffys-projects**) |
| Local link | `.vercel/project.json` present (gitignored); projectId `prj_OtKFgqeAGlI5hRSpiQiqdFm0XGnD` |
| `vercel.json` | None in repo — no Ignored Build Step or deploy config in repo |
| `next.config.mjs` | No Vercel-specific overrides that would block builds |
| Recent deployments | Only one deployment listed (2m ago); source appears to be **CLI** (`vercel --prod`), not Git |

**Conclusion:** Repo and build config are fine. Git push not deploying is almost certainly due to **Vercel Git integration** (project not connected to GitHub, or wrong repo/branch) or **GitHub webhooks / Vercel app** (webhook missing, failing, or not installed for this repo).

---

## What you must check (Vercel Dashboard)

1. **Open the project**
   - Vercel Dashboard → team **janet-duffys-projects** → project **californiaforeverbroker.com**.

2. **Settings → Git**
   - **Connected Git Repository:** Is a repository shown (e.g. `DrJanDuffy/californiaforeverbroker.com`)?
     - **If “No repository” or “Disconnected”:** Git is not connected → pushes will never trigger deploys. **Fix:** Connect (or reconnect) the GitHub repo.
   - **Production Branch:** Must be `main` (to match your default branch).
   - **Ignored Build Step:** If set, ensure it doesn’t always return “skip” (e.g. empty or wrong condition). You can leave it empty to build on every push.

3. **Deployments**
   - In **Deployments**, check whether new commits on `main` show up as deployments. If only old or CLI deployments appear, Git is not connected or webhooks are not firing.

---

## What you must check (GitHub)

1. **Repo → Settings → Webhooks**
   - Is there a webhook whose URL contains **vercel.com** (or **vercel.app**)?
   - Open it and check **Recent Deliveries:** do “push” events show **200**?
   - If there is no Vercel webhook, or deliveries fail (4xx/5xx), Vercel won’t be notified on push. **Fix:** Reconnect the repo in Vercel (which recreates the webhook) or fix the failing webhook.

2. **GitHub App (Vercel)**
   - **GitHub → Settings → Applications → Installed GitHub Apps:** ensure **Vercel** is installed for the **DrJanDuffy** org (or for this repo).
   - If Vercel was uninstalled or access was removed for this repo, reconnect the project in Vercel so it can reinstall or regain access.

---

## Recommended fix (if Git is not connected)

1. In **Vercel:** **californiaforeverbroker.com** → **Settings → Git**.
2. Click **Connect Git Repository** (or **Reconnect** if it was disconnected).
3. Choose **GitHub** and select **DrJanDuffy/californiaforeverbroker.com**.
4. Set **Production Branch** to `main`.
5. Save. Vercel will create/update the webhook.
6. Push a small commit to `main` and confirm a new deployment appears under **Deployments**.

---

## Optional: Deploy Hook (if you don’t use Git integration)

If you prefer not to use Git integration, you can use a **Deploy Hook** (Settings → Git → Deploy Hooks): a URL that triggers a deployment on POST. You could call it from CI or a script after push. This does not fix “git push deploys”; it only gives an alternative way to trigger the same project.

---

## Summary

| Likely cause | What to do |
|--------------|------------|
| Git not connected in Vercel | Connect/reconnect **DrJanDuffy/californiaforeverbroker.com** in project **Settings → Git**. |
| Wrong production branch | Set Production Branch to `main`. |
| Webhook missing or failing | Reconnect repo in Vercel; check **GitHub → Settings → Webhooks** for 200 on push. |
| Vercel GitHub App not installed / no access | Install or grant Vercel access to the org/repo, then reconnect in Vercel. |

No code or config changes in the repo are required unless you later add an **Ignored Build Step** or change the branch layout.

---

## Build error: "Couldn't find any `pages` or `app` directory"

**Error:** `Couldn't find any \`pages\` or \`app\` directory. Please create one under the project root`

**Cause:** The Next.js app lives at the **repo root** (`app/` is committed and at the top level). If Vercel runs the build from a **subdirectory** (Root Directory setting), that folder may not contain `app`, so Next.js fails.

**Fix:**

1. **Vercel Dashboard** → **janet-duffys-projects** → **californiaforeverbroker.com** → **Settings** → **General**.
2. Find **Root Directory**.
3. If it is set to anything (e.g. `web`, `frontend`, `src`), **clear it** so the build runs from the repository root where `app/` lives.
4. Save and **redeploy**.

Your repo layout is: `app/`, `components/`, `lib/`, `next.config.mjs`, `package.json` at the root — so Root Directory must be empty (or `.`).

---

## Build error: "No Output Directory named public found"

**Error (after `next build` succeeds):** `Error: No Output Directory named "public" found after the Build completed.`

**Cause:** This repo is a Next.js App Router app. Next.js writes `.next/`, not `public/`. GitHub is connected to **two** Vercel projects:

| GitHub check / environment | Project | Notes |
|---|---|---|
| `Vercel – californiaforeverbroker.com` | `californiaforeverbroker.com` (`prj_OtKFgqeAGlI5hRSpiQiqdFm0XGnD`) | Framework Next.js; Output Directory empty. Preview deploys succeed. |
| `Vercel – californiaforeverbroker-live` | `californiaforeverbroker-live` | GitHub check that failed on `b63cc36`. Output Directory is `public` (static/"Other" preset). That is the log that ends in the missing-`public` error. |

Do **not** add an empty `public/` folder to satisfy that check. If the live project stays on the static preset, Vercel would publish only `public/` and skip the Next.js app.

**Repo fix (committed):** `vercel.json` sets `framework` to `nextjs`, `buildCommand` to `next build`, and `outputDirectory` to `null` so dashboard Output Directory=`public` cannot win.

**Dashboard (still do this on `californiaforeverbroker-live`):**

1. Vercel → **californiaforeverbroker-live** → **Settings** → **General** → **Build & Development Settings**.
2. Framework Preset: **Next.js**.
3. Output Directory: turn **Override** off (leave empty). Do not set `public`.
4. Build Command: leave default (`next build` / `npm run build`).
5. Save and redeploy.

Production DNS already points at `californiaforeverbroker.com`. After previews are green, disconnect Git on `californiaforeverbroker-live` or delete that duplicate project so only one Vercel project builds this repo.
