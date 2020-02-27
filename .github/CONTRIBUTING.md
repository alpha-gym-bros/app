# Contributing

## Commit messages

For the commit messages, write them with the following points in mind:

- Write the messages in imperative form, `Add new feature` instead of `Added new feature`.
- Capital letters at the beginning of the sentence.
- No period at the end of the sentence.
- Keep your messages brief and make sure the sentence is short enough to
  not cause a line break (happens around 50 characters).
- If you need more than 50 characters, consider either committing smaller changes or writing more details in the message body (see link below for more details).

For further info, please read http://chris.beams.io/posts/git-commit/

## Implementing new features and working with branches

Never commit and push directly to the master branch - this is because the master branch should always contain a working copy of the project.

But it's still important to commit often (and not commit too many things at once, which can clutter up your commit messages), so when working on something, create a new branch like this:

```
$ git pull -r
$ git checkout -b branch-name
```

The first command will update your local copy of the git repository. The second command will create the branch `branch-name` and take you to it.

Be sure to give your branch a good, descriptive but still short name that will accurately describe what it's for.

When you're inside a branch, you can commit and push freely.

Switching to another existing branch is simple, just type:

```
$ git checkout other-branch
```

Before you create a pull request, it can be good to fetch the latest changes from the `master` branch to resolve any merge conflicts. Do it with this command:

```
$ git pull -r origin master
```

The `-r` flag will do a "rebase", i.e., Git will first pull from `master` and try to apply your local commits on top, instead of doing a merge commit. This will result in a cleaner commit log.

**Make sure everything still works at this point!**

When you are done with this step, send a pull request to `master`. Someone else will then review your code and approve it if it looks good!

If your pull request is approved, go ahead and merge it, and delete the branch afterwards.

## Useful commit actions

### Edit latest commit

```
$ git commit --amend
```

The command above loads the previous commit message into an editor session, where you can make changes to the commit message, save those changes and exit. When you save and close the editor, the editor writes a new commit containing that updated commit message and makes it your new last commit. This command is also useful if you want to add more changes to an existing commit.

### Undo latest local commit

```
$ git reset HEAD~1
```

This removes the commit from the commit log, but preserves your file changes.

### Squash multiple local commits

If you have multiple small, incremental commits, the commit log might look cleaner if those commits were squashed into one commit instead.

This can be done with the following command:

```
$ git rebase master --interactive
```

(Note that you should specify `master` even though you are in another branch. This parameter specifies which branch you are rebasing _against_, not which one you are in right now).

This command will show you something like this:

```
pick 4bae919 feat: Completely unrelated feature (#14)
pick 5bce508 wip: Incremental commit
pick 5d73144 wip: Another incremental commit
pick 8d1151e feat: Implement function X (#2)

# Rebase 60349bf..8d1151e onto 60349bf (3 commands)
#
# Commands:
# p, pick = use commit
# r, reword = use commit, but edit the commit message
# e, edit = use commit, but stop for amending
# s, squash = use commit, but meld into previous commit
# f, fixup = like "squash", but discard this commit's log message
# x, exec = run command (the rest of the line) using shell
# d, drop = remove commit
```

Do note that these commits are listed oldest at the top. Let's say I want to squash the 3 latest commits into a single commit. I would then edit it like this:

```
pick 4bae919 feat: Completely unrelated feature (#14)
pick 5bce508 wip: Incremental commit
squash 5d73144 wip: Another incremental commit
squash 8d1151e feat: Implement function X (#2)
```

See how I have `pick` on the oldest commit of the ones I want to squash together, and then `squash` (just `s` also works) on the subsequent commits. Save and exit the editor, Git will perform a squash. Then, you will be put into the editor again where you can add a new commit message for the new mega commit. You will see something like this:

```
# This is a combination of 3 commits.
# The first commit's message is:
changed my name a bit

# This is the 2nd commit message:

updated README formatting and added blame

# This is the 3rd commit message:

added cat-file
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Fri Feb 1 11:59:06 2019 +0100
#
# interactive rebase in progress; onto 60349bf
```

Remove all that and just add your new commit message:

```
feat: Implement cool feature (#2)

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Fri Feb 1 11:59:06 2019 +0100
#
# interactive rebase in progress; onto 60349bf
```

Save and exit the editor and you're done! You can double check by running `git log` to see the commit log.
