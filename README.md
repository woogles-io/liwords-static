# Liwords Static Site

Hugo-based static site for Liwords/Woogles.

## Setup

### First Time Clone

Clone the repository with submodules:

```bash
git clone --recurse-submodules <repo-url>
```

### If Already Cloned

If you already cloned the repo and the `themes/dream` directory is empty, initialize the submodules:

```bash
git submodule update --init --recursive
```

## Updating Submodules

To get the latest updates from the theme (or other submodules):

```bash
# Update a specific submodule
git submodule update --remote themes/dream

# Or update all submodules
git submodule update --remote
```

After updating, commit the change to track the new submodule version:

```bash
git add themes/dream
git commit -m "Update dream theme to latest version"
```

**Alternative:** You can also navigate into the submodule and pull directly:

```bash
cd themes/dream
git pull origin main
cd ../..
git add themes/dream
git commit -m "Update dream theme"
```

## Running Locally

Start the Hugo development server:

```bash
hugo server
```

Or with drafts enabled:

```bash
hugo server -D
```

The site will be available at `http://localhost:1313`

## Building

Build the static site:

```bash
hugo
```

Output will be in the `public/` directory.
