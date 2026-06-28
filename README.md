# 🚀 FloatHub

> **A modern floating browser companion for Chrome.**

## What problem am I solving here?

I was tired of opening a ChatGPT tab every time I was working on something. For example, if I needed to know the meaning of a word, I had to switch to another tab and start a new chat on ChatGPT. That made no sense because my browser was already full of hundreds of tabs.

I got tired of opening new tabs just for a quick chat with GPT. So, I made this extension. With just one click, I can open a small browser window running ChatGPT, search for my query, get my answer, and continue working without creating another tab.

Yeah... basically, I'm just being lazy AF!! 😆

I personally use this extension every day for a quick heads-up with GPT, and I would recommend that you use it as well.

Yep, I took the help of AI to build this extension using this extension.

---

## AI Summary

FloatHub is a Chrome Extension that provides a draggable floating action button on every webpage, allowing users to quickly launch websites, AI assistants, and productivity tools without interrupting their browsing workflow.

The vision is to create a browser companion similar to the productivity experience offered by tools like Arc Browser, Raycast, and Microsoft Copilot while remaining lightweight and highly customizable.

---


# ✨ Features

## Current Features
* 🎈 Easy to Use
* 🎈 Points to chat.com in Incognito Mode
* 🎈 Floating browser button
* 🖱️ Draggable floating button (need to add this feature)
* 💾 Persistent position using Chrome Storage
* ⚡ Opens websites from the floating button
* 🕶️ Launches websites in Incognito Mode
* 🪟 Popup browser window support
* 🔄 Content Script + Background Service Worker architecture

---

## Planned Features

* 📂 Website Launcher
* 🔍 Instant Search
* 🤖 AI Assistant Launcher
* 📑 Multiple Workspaces
* ⭐ Favorite Websites
* 🌙 Dark Mode
* 🎨 Custom Themes
* 🎯 Custom Floating Button Icons
* ⌨️ Keyboard Shortcuts
* 📤 Import / Export Configurations
* ☁️ Chrome Sync Support
* 🧠 Smart Recommendations
* 📊 Website Usage Analytics
* 📌 Snap-to-Edge Dragging
* 🔔 Notifications
* 📝 Sticky Notes
* 🌐 Multi-Browser Support

---

# 🏗️ Architecture

```
Chrome Extension

│
├── Content Script
│       Floating Button
│       Drag & Drop
│       Popup UI
│
├── Background Service Worker
│       Window Management
│       Incognito Windows
│       Messaging
│
├── Chrome Storage
│       Save Preferences
│       Save Position
│
└── Popup UI
```

---

# 📁 Project Structure

```
browser_extension/

│
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── styles.css
│
├── assets/
│
└── README.md
```

---

# 🚀 Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/floathub.git
```

Open Chrome Extensions

```
chrome://extensions
```

Enable

```
Developer Mode
```

Click

```
Load unpacked
```

Select the project folder.

---

# 🛠️ Technologies Used

* JavaScript (ES6)
* HTML5
* CSS3
* Chrome Extension Manifest V3
* Chrome Runtime API
* Chrome Storage API
* Chrome Windows API
* Chrome Messaging API

---

# ⚙️ Current Workflow

```
User
 │
 ▼
Floating Button
 │
 ▼
Content Script
 │
 ▼
chrome.runtime.sendMessage()
 │
 ▼
Background Service Worker
 │
 ▼
Chrome Windows API
 │
 ▼
Popup / Incognito Window
```

---

# 🎯 Roadmap

## Phase 1

* [x] Create Chrome Extension
* [x] Inject Floating Button
* [x] Background Service Worker
* [x] Chrome Messaging
* [x] Popup Window
* [x] Incognito Support

---

## Phase 2

* [ ] Pointer Event Dragging
* [ ] Save Position
* [ ] Restore Position
* [ ] Snap to Screen Edge
* [ ] Floating Button Animations

---

## Phase 3

* [ ] Website Launcher
* [ ] Add/Edit/Delete Websites
* [ ] Categories
* [ ] Search
* [ ] Custom Icons

---

## Phase 4

* [ ] AI Workspace
* [ ] ChatGPT Launcher
* [ ] Claude Launcher
* [ ] Gemini Launcher
* [ ] Perplexity Launcher
* [ ] DeepSeek Launcher

---

## Phase 5

* [ ] Workspaces
* [ ] Keyboard Shortcuts
* [ ] Import / Export
* [ ] Chrome Sync
* [ ] Themes

---

## Phase 6

* [ ] Browser Productivity Dashboard
* [ ] Smart Suggestions
* [ ] Analytics
* [ ] Plugin System

---

# 🎨 Vision

FloatHub aims to become an intelligent browser companion rather than just another Chrome extension.

Instead of opening bookmarks manually or switching between tabs, users will be able to launch AI tools, favorite websites, workspaces, and browser utilities instantly through a beautiful floating interface.

The long-term goal is to provide a seamless productivity experience inspired by modern desktop launchers while remaining fully integrated into the browser.

---

# 🤝 Contributing

Contributions, feature requests, and bug reports are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Saumy Sharma**

Software Engineer | Robotics | AI | Digital Twins | XR Developer

---

⭐ If you like this project, consider giving it a star on GitHub!
