# Substantial's Atom Config

## Installation instructions

If you don't have it already, [download and run the Atom editor](https://atom.io/)


```bash
cd ~
# If you have an atom config already:
mv .atom .atom-bak
git clone git@github.com:substantial/atomfiles.git .atom
cd .atom && bin/update-packages
```

## Goal

This is an experiment. We want to see if we can build a config that we enjoy that we all feel comfortable and productive in. Currently only a few of us have opted in, but please join and start contributing if you are interested.

## Tenets

* Tenets should be agreed upon, discussed, modified or removed if they do not fit.
* This config should be usable by all disciplines and all skill levels. It should be approachable enough for all, but powerful enough for power users.
* There is no owner. All at Substantial have an equal say in what goes in it.
* No forks, we should all run off of master. It's ok to use branches to experiment with things.
* Performance is an important part of the experience and should not be neglected. Poorly performing addons should be optimized or removed.
* No Vim mode. No Emacs mode. It is good to take inspiration from them, but we should see if we can build something as usable for all without that as a wholesale starting point. [Readline](http://www.catonmat.net/download/readline-emacs-editing-mode-cheat-sheet.pdf) keys are great and fine, but we should be sure to keep standard OS X arrow key movements as well.
* Avoid overriding keys common to other OS applications (like cmd+s).
* Try to avoid overriding default atom key bindings. If multiple keys are bound
  to the same thing (like cmd+t and cmd+p) it is more OK if the less common one
  is overridden.
* It is never done. It should be refined, added to  and optimized indefinitely.
* Be mindful of the fact that others use this config. If you have good reason to make huge changes, communicate them and seek advice on them. We shouldn't worry about backwards compatibility too much, but we should be mindful.

## Key Bindings

Most of the default Key Bindings are still enabled. Below are custom and particularly important key bindings.

Key                 | Command
---                 | ---
                    | **File Management**
&#x2325;&#x2318;N   | Advanced New File
&#x2325;&#x2318;O   | Advanced Open File
&nbsp;              |
                    | **Window Navigation**
&#x21E7;&#x2318;K   | Focus Previous Pane
&#x21E7;&#x2318;J   | Focus Next Pane
&nbsp;              |
                    | **Editing**
&#x2318;=           | Auto Indent
&#x21E7;&#x2318;C   | Open Color Picker
&nbsp;              |
                    | **Selecting Text**
&#x2318;I           | Expand Region (word, inside parens, etc.)
&#x21E7;&#x2318;I   | Shrink Region (word, inside parens, etc.)
&#x2303;I (         | Select inside parentheses (works for `{[<'"t`)
&#x2303;O (         | Select around parentheses (works for `{[<'"t`)
&nbsp;              |
                    | **Multiple Cursors**
&#x2318;D           | Select Next
&#x2318;K &#x2318;D | Select Skip
&#x2318;U           | Select Undo
&#x2303;&#x2318;G   | Select All
&nbsp;              |
                    | **Moving Around**
&#x2325;P           | Move up to next blank line (&#x21E7; to select)
&#x2325;N           | Move down to next blank line (&#x21E7; to select)
&#x2303;S           | Fuzzy Search Forward
&#x2303;R           | Fuzzy Search Reverse
&nbsp;              |
                    | **Git**
&#x2318;&#x2325;G   | Open up atomaitigit panel
&#x21E5;            | Show diff
&#x21E7;S           | Stage file
c                   | commit
&#x21E7;P           | Push to head
p                   | Fetch
r                   | Refresh
z                   | Stash
&#x21E7;Z           | Stash pop

<!--
&#x21E7; shift
&#x2325; opt
&#x2318; cmd
&#x2303; ctrl
&#x21E5; tab
-->

## Packages

### How to install a new package

#### Via the command line

1. Install `my-new-package`:

   ```bash
   ~/.atom/bin/install-package my-new-package
   ```
2. Commit the change to `packages.txt` and pull request it.

#### Via the UI

1. Use the Install section of preferences to install a package.
2. Run:

    ```bash
    ~/.atom/bin/update-packages
    ```
3. Answer "keep" when asked about your package.
4. Commit the change to `packages.txt` and pull request it.

### How to upgrade packages

1. Use the UI to update packages.
2. Run:

    ```bash
    ~/.atom/bin/update-packages
    ```
3. Commit the changes to `package.txt` and pull request it.

### Installed

* [advanced-open-file](https://atom.io/packages/advanced-open-file) - A more
  reasonable file open with tab completion.
* [advanced-new-file](https://atom.io/packages/advanced-new-file) - A more
  reasonable new file with tab completion.
* [color-picker](https://atom.io/packages/color-picker) - Adds a color picker.
* [pigments](https://atom.io/packages/pigments) - Displays colors in projects
  and files.
* [Linter](https://atom.io/packages/linter) - Enable displaying lint (code
  style) warnings.
* [linter-eslint](https://atom.io/packages/linter-eslint) - Linter plugin for
  [eslint](https://atom.io/packages/linter-eslint)
* [expand-region](https://atom.io/packages/expand-region) - Expand selection to
  quotes/braces/brackets/etc.
* [language-haml](https://atom.io/packages/language-haml) - HAML support
* [react](https://atom.io/packages/react) - React support
* [block-travel](https://atom.io/packages/block-travel) - Move the cursor by code blocks
* [tabularize](https://atom.io/packages/tabularize) - Align code
* [lazy-motion](https://atom.io/packages/lazy-motion) - Rapid cursor
  positioning w/ fuzzy search.
