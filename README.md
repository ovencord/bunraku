# 𝗕 𝗨 𝗡 𝗥 𝗔 𝗞 𝗨

<p align="left">
  <a href="https://github.com/sponsors/LuigiColantuono">
    <img src="https://img.shields.io/github/sponsors/LuigiColantuono?style=social">
  </a> 
  <a href="https://paypal.me/l0g4n7">
    <img src="https://img.shields.io/badge/💖-Support-ff69b4">
  </a> 
  <img src="https://img.shields.io/npm/v/@ovencord/bunraku"> 
  <img src="https://img.shields.io/npm/dm/@ovencord/bunraku?label=downloads"> 
  <img src="https://img.shields.io/npm/l/@ovencord/bunraku"> 
  <img src="https://img.shields.io/github/repo-size/ovencord/bunraku"> 
  <a href="https://github.com/ovencord/bunraku">
    <img src="https://img.shields.io/badge/Bun-Networking-black?logo=bun">
  </a>
</p>

> Powerful, Lightweight Lavalink wrapper

<p align="center">
    <img width="400" alt="banraku-logo" src="https://github.com/user-attachments/assets/868729e8-8d2c-4a07-99aa-dffbd57b2360" />
</p>

### Features

- **Bun-Native**: Re-engineered to run exclusively on Bun.Purged all Node.js legacy dependencies (like `ws`).
- **Zero Latency**: Uses Bun's kernel-level WebSocket for maximum throughput.
- **Ultra Lightweight**: Optimized for minimal memory footprint
- **TypeScript Native**: No build step required. Direct execution from source.

## 📦 Bundle Size Comparison

| Package | Size | Dependencies | Total Install |
|---------|------|--------------|---------------|
| shoukaku | 366 kB | ws (~300 kB) | **~666 kB** |
| bunraku | 70 kB | **NONE** | **~70 kB** |

> **90% smaller install size!** 

## 🎵 The Story

Built out of frustration with constant WebSocket upgrade warnings that were 
making my Discord music bot laggy. After migrating to Bun, I realized the 
entire Shoukaku stack could be rewritten to be faster and lighter.

**Result?** Zero warnings. Noticeably faster. Way more fun to work with.

If this solved your problems too, [consider supporting the project](https://paypal.me/l0g4n7)! 
Even a coffee helps keep the motivation high! ☕

### Installation

```bash
bun add @ovencord/bunraku
```

### Official Documentation

> Bunraku is based on Shoukaku created by shipgirlproject                      
> https://guide.shoukaku.shipgirl.moe/
> https://github.com/shipgirlproject/Shoukaku

## Performance
<img width="380" height="" alt="BRUCIUS" src="https://i.imgur.com/zZsPzm6.png" />

