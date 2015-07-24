# Substantial's Atom Config

## Installation instructions

If you don't have it already, [download the Atom editor](https://atom.io/). Install it, run it at least once and be sure to quit it, then:


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
* It is never finished. It should be refined, added to  and optimized indefinitely.
* Be mindful of the fact that others use this config. If you have good reason to make huge changes, communicate them and seek advice on them. We shouldn't worry about backwards compatibility too much, but we should be mindful.

## Key Bindings

Most of the default Key Bindings are still enabled. Below are custom and particularly important key bindings.

Key                             | Command | Preview
---                             | --- | ---
                                | **File Management** |
&#x2325;&#x2318;N               | Advanced New File |
&#x2325;&#x2318;O               | Advanced Open File |
&#x2303;-                       | Toggle Tree View |
&nbsp;                          | |
                                | **Fuzzy File Finder** |
&#x2318;P                       | Open Fuzzy File Finder |
&#x2303;S                       | Open file in horizontal split |
&#x2303;V                       | Open file in vertical split |
&nbsp;                          | |
                                | **Window Navigation** |
&#x21E7;&#x2318;K               | Focus Previous Pane |
&#x21E7;&#x2318;J               | Focus Next Pane |
&nbsp;                          | |
                                | **Editing** |
&#x2303;I                       | Auto Indent |
&#x21E7;&#x2318;'               | Toggle quotes - replace ' with " or vice versa |
&#x21E7;&#x2318;C               | Open Color Picker |
&nbsp;                          | |
                                | **Moving Around** - Most can be combined with &#x21E7; to select text |
&#x2303;F                       | Move right |
&#x2303;B                       | Move left |
&#x2325;F                       | Move to next word |
&#x2325;B                       | Move to previous word |
&#x2303;P                       | Move up |
&#x2303;N                       | Move down |
&#x2325;P                       | Move up to next blank line |
&#x2325;N                       | Move down to next blank line |
&#x2303;S&nbsp;&#x2591;         | Move to right before next &#x2591; on line, like vim `t` |
&#x2303;R&nbsp;&#x2591;         | Move to right after previous &#x2591; on line, like vim `T` |
&#x2303;8                       | Find next word under cursor, like vim `*` |
&#x2303;3                       | Find previous word under cursor, like vim `#` |
&#x2325;S                       | Fuzzy Search Forward |
&#x2325;R                       | Fuzzy Search Reverse |
&nbsp;                          | |
                                | **Selecting Text** |
&#x2318;L                       | Select Current Line - Can be repeated to select multiple lines |
&#x2318;I                       | Expand Region (word, inside parens, etc.) |
&#x21E7;&#x2318;I               | Shrink Region (word, inside parens, etc.) |
&#x2303;O&nbsp;(                | Select inside parentheses (works for `{[<'"t`) |
&#x21E7;&#x2303;O&nbsp;(        | Select around parentheses (works for `{[<'"t`) |
&nbsp;                          | |
                                | **Multiple Cursors** - If multiple things are selected, you can type to change them all at once. You can also use regular navigation keys to move multiple cursors around at once. This is helpful for making lots of similar changes at once. | ![multiple-cursors](https://cloud.githubusercontent.com/assets/8588/8748680/117f7748-2c51-11e5-9366-3280cef0222d.gif)
&#x2318;D                       | Select Next - First press selects entire word. Next adds next instance of word under cursor to selection |
&#x2318;K&nbsp;&#x2318;D        | Skip Selection - After &#x2318;D, if you don't want it but want the next instance |
&#x2318;U                       | Undo Select Next |
&#x2303;&#x2318;G               | Select All instances of current word (works w/ File Find too) |
&#x21E7;&#x2318;L               | Split Selection into Multiple Cursors - Turns a selection of multiple lines into separate selections/multiple cursors. Try hitting &#x2303;A afterwards to get the cursors to the beginning of the lines |
&#x2318;Click                   | Add Cursor - Good for quickly adding multiple cursors for multiple changes in places that would be tricky with find or &#x2318;D |
&nbsp;                          | |
                                | **Git (git plus)** | ![git-plus](https://cloud.githubusercontent.com/assets/12339/8751823/8b38209a-2c64-11e5-8041-aa803b1dd8b6.gif)
&#x21E7;&#x2318;H               | Open up git plus fuzzy find (try typing 'checkout' to see options) |
                                | |
                                | **Git (atomatigit)** |
&#x2318;&#x2325;G               | Open up atomatigit panel |
&#x21E5;                        | Show diff |
&#x21E7;S                       | Stage file |
C                               | commit |
&#x21E7;P                       | Push to head |
P                               | Fetch |
R                               | Refresh |
Z                               | Stash |
&#x21E7;Z                       | Stash pop |

<!--
&#x21E7; shift
&#x2325; opt
&#x2318; cmd
&#x2303; ctrl
&#x21E5; tab
&#x2591; placeholder
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
  reasonable file open/new with tab completion.
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
