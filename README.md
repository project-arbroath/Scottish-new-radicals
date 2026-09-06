# the scottish new radicals — site

Eleventy + Decap CMS, deployed on Netlify. Same stack as Project Arbroath and
End the Union.

## What's here

- `src/_includes/base.njk` — shared layout: nav, hamburger menu, footer,
  sticky mobile join bar. Every page pulls from this, so nav/footer edits
  only need to happen once.
- `src/index.njk`, `src/the-case.njk`, `src/privacy.njk` — converted
  directly from the approved static HTML, content unchanged.
- `src/faq.njk` — loops over the `faq` collection (`src/faq/*.md`). Shows
  the "nothing published yet" empty state until entries exist.
- `src/faq/*.md` — individual FAQ entries, each with `question` /
  `answer` (and optional `order`) frontmatter. This is the one piece of
  the site meant to be edited through the CMS rather than in code.
- `src/admin/` — Decap CMS admin panel, configured with the FAQ
  collection.
- `src/css/style.css`, `src/js/site.js` — unchanged styling, plus the
  hamburger toggle and a fetch-based Netlify Forms submission for the
  join form (no full page reload).
- `netlify.toml` — build command and publish directory.

## What still needs doing manually (not code)

1. **Push this to a new GitHub repo.**
2. **Create a new Netlify site from that repo.** Build command and
   publish directory are already set via `netlify.toml`.
3. **Enable Netlify Identity + Git Gateway** in the Netlify dashboard
   (Site settings → Identity → Enable Identity, then Services → Git
   Gateway → Enable). This is what lets `/admin` authenticate — same
   step already done for the other sites.
4. **Invite yourself as an Identity user** so you can log into `/admin`.
5. **Check the Netlify Forms tab** after the first deploy — Netlify
   detects the `join` form automatically from the built HTML and starts
   collecting submissions there, with email notifications you can turn
   on in Site settings → Forms → Form notifications.
6. **Point `scottishnewradicals.scot`'s DNS at the new Netlify site**,
   and set `newradicals.scot` to redirect to it, once you're happy with
   the deploy.

## Local development

```
npm install
npm start        # serves locally with live reload
npm run build     # builds to _site/
```
