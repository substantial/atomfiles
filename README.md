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

Key                | Command | Preview
---                | --- | ---
                   | **File Management** |
⌥⌘N                | Advanced New File |
⌥⌘O                | Advanced Open File |
⌃-                 | Toggle Tree View |
⌃X&nbsp;C          | Duplicate File |
⌃X&nbsp;M          | Move/Rename File |
⌃X&nbsp;D          | Delete File |
&nbsp;             | |
                   | **Fuzzy File Finder** |
⌘P                 | Open Fuzzy File Finder |
⌘B                 | Open Fuzzy File Finder for recently opened files |
⌃S                 | Open file in horizontal split |
⌃V                 | Open file in vertical split |
&nbsp;             | |
                   | **Window Navigation** |
⇧⌘K                | Focus Previous Pane |
⇧⌘J                | Focus Next Pane |
⌥⌃P                | Toggle automatic pane resizing |
&nbsp;             | |
                   | **Editing** |
⌃I                 | Auto Indent |
⌃Y                 | Paste from kill ring (press repeatedly to toggle through things previously copied.) | ![clip-history example](https://raw.githubusercontent.com/t9md/t9md/2453c4abea50741938bce79b9087e4845e8b66d1/img/atom-clip-history.gif)
⇧⌃Y                | Paste last thing pasted |
⇧⌘'                | Toggle quotes - replace ' with " or vice versa |
⇧⌘C                | Open Color Picker |
&nbsp;             | |
                   | **Moving Around** - Most can be combined with ⇧ to select text |
⌃F                 | Move right |
⌃B                 | Move left |
⌥F                 | Move to next word |
⌥B                 | Move to previous word |
⌃P                 | Move up |
⌃N                 | Move down |
⌥P                 | Move up to next blank line |
⌥N                 | Move down to next blank line |
⌥S&nbsp;&#x2591;   | Move to right before next &#x2591; on line, like vim `t` (hold or double tap to select) | ![find-and-till](https://cloud.githubusercontent.com/assets/8588/8742523/26480284-2c1b-11e5-86c7-be78a28e6289.gif)
⌥R&nbsp;&#x2591;   | Move to right after previous &#x2591; on line, like vim `T` (hold or double tap to select) |
⌃8                 | Find next word under cursor, like vim `*` |
⌃3                 | Find previous word under cursor, like vim `#` |
⌃S                 | Fuzzy Search Forward |
⌃R                 | Fuzzy Search Reverse |
&nbsp;             | |
                   | **Selecting Text** |
⌘L                 | Select Current Line - Can be repeated to select multiple lines |
⌘I                 | Expand Region (word, inside parens, etc.) |
⇧⌘I                | Shrink Region (word, inside parens, etc.) |
⌃O&nbsp;(          | Select inside parentheses (works for `{[<'"t`) |
⇧⌃O&nbsp;(         | Select around parentheses (works for `{[<'"t`) |
⌥S⌥S&nbsp;&#x2591; | Select to right before next &#x2591; on line, like vim `vt` |
⌥R⌥R&nbsp;&#x2591; | Select to right after previous &#x2591; on line, like vim `vT` |
&nbsp;             | |
                   | **Multiple Cursors** - If multiple things are selected, you can type to change them all at once. You can also use regular navigation keys to move multiple cursors around at once. This is helpful for making lots of similar changes at once. | ![multiple-cursors](https://cloud.githubusercontent.com/assets/8588/8748680/117f7748-2c51-11e5-9366-3280cef0222d.gif)
⌘D                 | Select Next - First press selects entire word. Next adds next instance of word under cursor to selection |
⌘K&nbsp;⌘D         | Skip Selection - After ⌘D, if you don't want it but want the next instance |
⌘U                 | Undo Select Next |
⌃⌘G                | Select All instances of current word (works w/ File Find too) |
⇧⌘L                | Split Selection into Multiple Cursors - Turns a selection of multiple lines into separate selections/multiple cursors. Try hitting ⌃A afterwards to get the cursors to the beginning of the lines |
⌘Click             | Add Cursor - Good for quickly adding multiple cursors for multiple changes in places that would be tricky with find or ⌘D |
&nbsp;             | |
                   | **Find and Replace** |
⌘F                 | Find in File |
⌘G                 | Find Next in File |
⇧⌘G                | Find Previous in File |
⇧⌘F                | Find in Project |
⌃⌘N                | Find Next in Project | ![project-find-navigation](https://cloud.githubusercontent.com/assets/8588/9000934/bc40cda4-3704-11e5-8287-8c5481f09f0f.gif)
⌃⌘P                | Find Previous in Project |
⇧⌃⌘F               | Focus Find in Project Results |
&nbsp;             | |
                   | **Git (git plus)** | ![git-plus](https://cloud.githubusercontent.com/assets/12339/8751823/8b38209a-2c64-11e5-8041-aa803b1dd8b6.gif)
⇧⌘H                | Open up git plus fuzzy find (try typing 'checkout' to see options) |

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
* [project-find-navigation](https://atom.io/packages/project-find-navigation) -
  Quickly navigate project find
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
* [find-and-till](https://atom.io/packages/find-and-till) - Quickly jump to a
  character on your current line (like Vim's find and till)
* [painless-panes](https://atom.io/packages/painless-panes) - Automatically resize panes
* [clip-history](https://atom.io/packages/clip-history) - Paste from clipboard history like emacs' kill-ring
* [pane-split-moves-tab](https://atom.io/packages/pane-split-moves-tab) -
  Opening a new split moves the current file to that split instead of
  duplicating it.
* [recent-files-fuzzy-finder](https://atom.io/packages/recent-files-fuzzy-finder) -
  See recently opened files in a Fuzzy Finder dialog

