# 🎥 CaptureCast – Screen Recording & Video Sharing Platform

CaptureCast is a full-stack screen recording and video sharing platform built with **Next.js**, **Bunny.net**, **Better Auth**, and a cutting-edge modern tech stack. It allows users to record their screens, upload videos, manage privacy settings, and share content via unique links — all with a sleek, responsive interface.



## Screenshots 
- comming soon...



## 🚀 Features

- 🔐 **Authentication** – Secure sign-up/sign-in with Google and Better Auth
- 📹 **Screen Recording** – Record your screen directly from the browser
- ⬆️ **Video Uploading** – Upload public or private videos easily
- 🧠 **AI Transcripts** – Auto-generated video transcripts for accessibility
- 🔒 **Privacy Control** – Toggle between public/private visibility
- 🛡 **Arcjet Security** – Built-in bot protection, rate-limiting, email validation
- 🧾 **Metadata** – Get video ID, URL, and other helpful info
- 🔍 **Search Functionality** – Quickly find your videos
- 🔗 **Share Videos** – Share videos via unique links
- 🧑‍💻 **Modern UI/UX** – Tailwind-powered responsive design
- 🗂 **Database** – Xata as a scalable serverless PostgreSQL database
- ✅ **Type-safe Queries** – Via Drizzle ORM
- ⚙️ **Reusable Components** – Clean and modular code structure
- 📱 **Cross-Device Compatibility** – Works flawlessly across all screens

---

## ⚙️ Tech Stack

| Tech | Description |
|------|-------------|
| **Next.js** | Full-stack React framework for building scalable web apps |
| **TypeScript** | Superset of JavaScript with type safety |
| **Tailwind CSS** | Utility-first CSS for custom styling |
| **Bunny.net** | Video delivery CDN with streaming, analytics, and security |
| **Better Auth** | Secure, multi-tenant authentication library |
| **Arcjet** | Developer-first platform for bot protection and rate limiting |
| **Drizzle ORM** | Lightweight, type-safe SQL ORM |
| **Xata** | Serverless PostgreSQL DB with built-in search and branching |

---

## 📦 Getting Started

### 🔧 Prerequisites

- Git
- Node.js
- npm (Node Package Manager)

### 🛠 Installation

```bash
git clone https://github.com/CsVaidik/CaptureCast-ScreenRecordingApp.git
cd CaptureCast-ScreenRecordingApp
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# [Xata] Configuration used by the CLI and the SDK
# Make sure your framework/tooling loads this file on startup to have it available for the SDK
XATA_API_KEY=
DATABASE_URL_POSTGRES=

# Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# BetterAuth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# Bunny
BUNNY_STORAGE_ACCESS_KEY=
BUNNY_LIBRARY_ID=
BUNNY_STREAM_ACCESS_KEY=

#ArcJet
ARCJET_API_KEY=
XATA_API_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on: [Better-Auth](https://www.better-auth.com), [Google Cloud](https://console.cloud.google.com), [Bunny.net](https:/bunny.net), [Xata.io](https://xata.io), [Arcjet](https://arcjet.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Connect

💼 [LinkedIn](https://www.linkedin.com/in/vaidik-vedant-ba5475266)

📧 Mail: mail.vvedant@gmail.com

