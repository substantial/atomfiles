# Substantial's Atom Config

## Installation instructions

If you don't have it already, [download the Atom editor](https://atom.io/)


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
* Be mindful of the fact that others use this config. If you have good reason to make huge changes, communicate them and seek advice on them. We shouldn't worry about backwards compatability too much, but we should be mindful.

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

* [Linter](https://atom.io/packages/linter) - Enable displaying lint (code
  style) warnings.
* [linter-eslint](https://atom.io/packages/linter-eslint) - Linter plugin for
  [eslint](https://atom.io/packages/linter-eslint)
* [expand-region](https://atom.io/packages/expand-region) - Expand selection to
  quotes/braces/brackets/etc.
  * `ctrl-s` - Expand selection
  * `ctrl-shift-s` - Shrink selection
* [language-haml](https://atom.io/packages/language-haml) - HAML support
* [react](https://atom.io/packages/language-haml) - React support
* [language-javascript-jsx](https://atom.io/packages/language-javascript-jsx) - Babel/jsx support
