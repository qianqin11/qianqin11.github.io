# Qian Qin Personal Website

This repository contains the source for Qian Qin's personal academic website. The site is built with React and Vinext. The page markup is HTML-like JSX, so most content changes can be made in one file without changing the design.

## Quick reference

| What you want to change | File |
| --- | --- |
| Name, position, contact details, CV link, research text, students, articles, and links | `app/page.tsx` |
| Page title and social-sharing metadata | `app/layout.tsx` |
| Colors, typography, spacing, panel layout, and mobile layout | `app/globals.css` |
| Portrait | `public/qian-qin.jpg` |
| Social-sharing image | `public/og.png` |
| Browser icon | `public/favicon.svg` |

Do not edit files inside `dist`, `.next`, `.vinext`, `node_modules`, or `.wrangler`. They are generated automatically.

## Before editing

Install:

- Node.js 22.13 or newer
- pnpm
- A code editor such as Visual Studio Code

Open a terminal in this repository and install the dependencies once:

```powershell
pnpm install
```

## Editing page content

Open `app/page.tsx`. Use the editor's Find command to locate the section heading or existing text you want to change.

### Basic information

Find `className="basic-info"`. This section contains:

- Name
- Position
- School link
- Office
- Email address
- CV link
- Portrait

Change visible text between tags, such as `<p>...</p>` or `<a>...</a>`. Change a link by editing its `href="..."` value. Keep `mailto:` before an email address.

### Educational background, research interests, and PhD students

Find `className="background-grid"`. Each panel is an `<article>...</article>` block. To add or remove an item inside a panel, add or remove one complete `<p>...</p>` block.

The PhD student and dissertation paragraphs intentionally use special spacing without a divider between them. Keep the `student-card` class on that article.

### Research description

Find `className="research-intro"`. Edit the paragraph inside this section. Preserve the surrounding `<p>` and `<a>` tags.

### Articles

Find `className="articles"`. Every publication is one complete block with this structure:

```tsx
<article>
  <p>Publication information goes here.</p>
</article>
```

When adding a publication:

1. Copy one complete existing `<article>...</article>` block.
2. Paste it immediately after the `Articles` heading so the list remains newest to oldest.
3. Replace the copied text and links.
4. Put a journal name inside `<em>...</em>`.
5. Use the existing link pattern for author pages, journal pages, arXiv, DOI, or PDF links.

When removing a publication, delete its entire `<article>...</article>` block, including both opening and closing tags.

The expressions `{' '}` insert spaces next to JSX links. Leave them in place unless you are sure the sentence still has correct spacing.

### Links section

Find `className="links-section"`. Each row is a `<p>...</p>` block. Copy or remove a complete paragraph to add or remove a row. External links use this pattern:

```tsx
<a href="https://example.com" {...externalProps}>
  Link text
</a>
```

Replace both the URL and the visible link text.

## Replacing images

To replace the portrait, save the new image as `public/qian-qin.jpg`. Keeping the same filename means no code change is needed. A vertical image with a 4:5 aspect ratio works best.

To replace the social-sharing image, save the new image as `public/og.png` and update its width and height in `app/layout.tsx` if the dimensions changed.

## Editing the appearance

Open `app/globals.css`.

- The Oxford Blue color palette is defined near `:root`.
- Desktop layout rules appear first.
- Tablet and smaller-screen rules begin at `@media (max-width: 900px)`.
- Phone rules begin at `@media (max-width: 560px)`.

Make small changes and preview them before changing several values at once.

## Previewing changes locally

Start the development server:

```powershell
pnpm dev
```

Open the local address printed in the terminal, normally <http://localhost:3000>. The page refreshes automatically after a saved edit. Press `Ctrl+C` in the terminal when finished.

## Checking the site before publishing

Run a production build:

```powershell
pnpm build
```

Do not publish if the build reports an error. Common causes include:

- A missing closing tag such as `</p>`, `</a>`, or `</article>`
- A missing quotation mark around a URL
- Deleting only part of an article block
- Using a backslash in a web URL

## Saving a revision with Git

Review the changed files:

```powershell
git status
git diff
```

Then save a revision:

```powershell
git add app/page.tsx
# Also add any other files that you intentionally changed.
git status
git commit -m "Update website content"
```

Use a short commit message that describes the actual change. Publishing the revision is a separate step.
