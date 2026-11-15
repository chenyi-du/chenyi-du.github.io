# Chenyi Du — Academic Website

This is the personal academic website of **Chenyi Du**, PhD researcher at the **Fenner School of Environment & Society, Australian National University**.

**Website:** https://chenyi-du.github.io/

## Edit your website without writing code

The content is connected to **Pages CMS**, a visual editor for GitHub websites. After the one-time GitHub authorisation, you can maintain research projects, education, teaching, publications, reading notes, bio and contact links without touching React or TypeScript.

### Open the content editor

1. Visit **https://app.pagescms.org/** and choose **Sign in with GitHub**.
2. When asked to install the Pages CMS GitHub App, grant access only to **chenyi-du/chenyi-du.github.io**.
3. Open this repository in Pages CMS, on the **main** branch.
4. Select a section from the left sidebar, make your edits, and press **Save**.
5. GitHub Actions deploys automatically. Check https://chenyi-du.github.io/ or the repository [Actions page](https://github.com/chenyi-du/chenyi-du.github.io/actions).

The CMS configuration is already provided by the root file **.pages.yml**. Do not replace it.

### Edit these sections

| Section | Data file | CMS section |
| --- | --- | --- |
| Name, avatar, public email and social profiles | content/data/profile.json | Profile & Contact |
| Home / About Me | content/bio.md | Home - About Me |
| Research projects, years, tags and links | content/data/research.json | Research Projects |
| Education | content/data/education.json | Education |
| Teaching | content/data/teaching.json | Teaching |
| Publications | content/coming-soon.md | Publications |
| CV | content/cv.md | Curriculum Vitae |
| Reading and essays | content/ideas.md | Sharing Ideas |

**Important:** Research, Education and Teaching now use the JSON data files, **not** their old Markdown files or hardcoded TypeScript entries. In Teaching, the course, institution, position, term and lecturer are separate editable fields; their line breaks are handled by the website automatically.

For Markdown text: a blank line starts a new paragraph. A single Enter inside a paragraph may not create a visible line break.

## Local development (optional)

This website uses Next.js and Node.js 22 or later. Commands: **npm ci**, **npm run dev**, and **npm run build**.

Whenever content changes are saved on the main branch, the workflow in .github/workflows/deploy.yml builds and publishes the website to GitHub Pages.

## Ownership and attribution

This is **Chenyi Du's personal website**, with content and customisations maintained in this repository. The underlying Next.js starter was adapted from [PRISM](https://github.com/xyjoey/PRISM) (MIT license). The original license is retained in [LICENSE](LICENSE) for attribution. The starter's screenshots, generic README and demo documentation have been removed.

Routine content edits require neither software installation nor command-line knowledge.
