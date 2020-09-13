---
title: Guidelines
permalink: /guidelines/
layout: page
---

# Guidelines

**Revised 31 May, 2020**

Thanks for taking the time to playtest Unscripted! This document outlines the guidelines for playtesters. Please make sure your feedback and/or contribution matches up with these guidelines.

## 📑 Utilize the issue tracker

**Your input matters to us**; it's what helps us catch game-breaking bugs, fix small glitches, and read, discuss, and implement feature requests for the game. To facilitate the process, we use GitHub issues, both publicly via [UnscriptedVN/issues](https://github.com/UnscriptedVN/issues/issues/) and internally via [UnscriptedVN/game](https://github.com/UnscriptedVN/game/issues/). Please, **utilize the issue tracker and file your feature requests and bug reports**; it helps us stay organized, assess what needs to be done, and keeps everything in one place for easy access.

If you want to discuss a particular bug after you've filed report, chat with us on Discord.

## 💬 Chat with us on Discord

If you need to discuss something with us or other playtesters, please take advantage of the #playtest channel in the Unscripted Community Discord server. Using Discord is a quick and easy way to reach the developers and other playtesters, and it allows us to have a discussion to assess feedback. Additionally, the team may have a poll or ask for feedback on a particular item in Discord, so chatting with us is crucial to ensuring your voice is heard.

### Use the `#playtest` channel (within reason)

Please, talk to us via the `#playtest` channel on Discord; refrain from sending direct messages. Using the `#playtest` channel helps put your feedback in a single place for easy access and discussion and mitigates unnecessary searching and shuffling.

If you need to discuss something and have privacy concerns or need to discuss a potential security vulnerability, direct messaging is allowed.

## 🗳 Fill out the feedback surveys

Please fill out the feedback survey at the end of the playtesting builds. This survey helps assess the current state of the game and what needs more focus. If the survey doesn't open or an error occurs, lets us know on Discord and we'll send you the link.

## 📕 Refrain from red-penning code unless requested

While getting line-by-line analyses of the game's code is helpful, it slows the process down a lot and doesn't give much room for improvement or refactoring. Please don't "red-pen" the source code of the game and try to fix code unless requested by the developers.

There are a few exceptions to this guideline to which red-penning would be allowed:

- The code is a part of [Unscripted Core](https://github.com/UnscriptedVN/core) or is a part of the [minigame backend](https://github.com/UnscriptedVN/fira).
- The code in question may be a security vulnerability.
- The code in question has a major impact on the game that hinders gameplay significantly.

If the developers request for you to "red-pen" a particular section of the code, please adhere to the [contributor guidelines](#-for-contributors).

## 🖋 Peer review with care

Because Unscripted is a visual novel, ensuring the story is readable and enjoyable is a critical component. Feedback tickets should also consider the writing aspect of the game; a template dedicated to writing peer reviews is available when you file an issue.

Please keep these things in mind when you do a peer review on the writing aspect of the game:

- Please, **don't "red-pen" unpublished content**. Although catching typos and grammatical mistakes is important, it should not take precedence over tackling the larger portions of the story, such as finishing routes and chapters. Peer reviews should focus on the content of the story and its fluidity over small errors such as a typo when they're first published in a playtesting build; consider it a "shitty first draft".
  - Chapters that remain unpublished in public releases but have existed for at leat _two_ beta builds are eligible for "red-penning".
- **Ask about the phrasing or wording of a sentence when in doubt**. Sometimes, sentences and dialogue are written deliberately in the story and may not necessarily follow the conventions in Edited American English. Please ask the development team for clarification on the particular wording or phrasing of a sentence. We'd be more than happy to compare with dictionaries and corpora like [iWeb](https://www.english-corpora.org/iweb/) and the [Corpus of Contemporary American English](https://www.english-corpora.org/coca/).
  - For example, Meredith (Fira) Sans typically uses "anymore" without a negating word to go with it; this is known as [_positive anymore_](https://read.dukeupress.edu/american-speech/article-abstract/94/3/313/138692/Anymore-It-s-on-TwitterPositive-Anymore-American), and it does exist, though its usage is rare and typically spoken in the Midland region in the United States. More instances on how a character speaks can be found in the [Code Stylebook](STYLEBOOK.md#character-traits).
- **Submit a peer review when applicable.** The insider repository contains a great template to get started with a peer review, and it helps the team stay organized. Your review will not be displayed in the public and remains confidential in the private repository.
