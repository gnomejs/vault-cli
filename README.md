# @gnome/vault-cli

<div height=30" vertical-align="top">
<image src="https://raw.githubusercontent.com/gnomejs/gnomejs/main/assets/icon.png"
    alt="logo" width="60" valign="middle" />
<span>Work less. Do more. </span>
</div>

## Overview

The `vault-cli` module provides a simple way to execute
vault commands.

The module relies upon the @gnome/exec module and
has the same basic usage as the `Command` class.

## Basic Usage

```typescript
import { vault } from "@gnome/vault-cli";
 
// runs the vault login command and outputs to stdout and stderror
await vault({ splat: { command: "login" }, tokenOnly: true } }).run();
 
const result = await vault({ splat: { command: "login" }, tokenOnly: true });
console.log(result.code);
console.log(result.text());
 
const result = await vault(["login", "-token-only"]);
console.log(result.code);
console.log(result.text());
```

[MIT License](./LICENSE.md)
