# Chenyi Du — Academic Website

This is the personal academic website of **Chenyi Du**. **Website:** https://chenyi-du.github.io/

## Visitor analytics (private dashboard)

Visitor tracking is prepared using privacy-friendly **Umami Cloud**. It is deliberately off until the website owner configures a tracking Website ID.

1. Open https://cloud.umami.is/ and create/sign in to a personal account.
2. Add a website: **chenyi-du.github.io**.
3. In the website's **Settings > Tracking code**, copy the **Website ID** (UUID). Do **not** copy or publish any API tokens.
4. Open https://app.pagescms.org/, select this repository and open **Website Analytics (Umami)**.
5. Paste the Website ID into the **websiteId** field; keep domain as **chenyi-du.github.io**, then Save.
6. Wait for GitHub Actions to deploy. Visit your website; Umami's dashboard will show daily visitors, page views, popular pages, referring sites and approximate visitor countries/regions.

**Important:** No historical visits can be reconstructed from before tracking activation. You may see fewer visits than your true total due to ad blocking, Do Not Track, and browser restrictions. Visit counts depend on your selected reporting timezone. Location is approximate and should not be treated as exact.

 
## How to edit this website

**Visual editor:** https://app.pagescms.org/ — sign in with GitHub, choose repository **chenyi-du/chenyi-du.github.io** on the **main** branch. The editor sections are About Me, Education, Research Projects, Teaching, Curriculum Vitae and Profile & Contact.

Press **Save** when you finish editing. The website is published automatically by [GitHub Actions](https://github.com/chenyi-du/chenyi-du.github.io/actions).

If the editor does not list this repository, confirm the Pages CMS GitHub App has access. You can also edit content directly from the [content folder on GitHub](https://github.com/chenyi-du/chenyi-du.github.io/tree/main/content). Note that Research, Education and Teaching are maintained as JSON in content/data.

The underlying website was adapted from [PRISM](https://github.com/xyjoey/PRISM) under the MIT license; the original license is retained.
