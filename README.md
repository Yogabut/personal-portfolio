# Yoga Personal Portfolio

### Having a hard time building a cool portfolio website? Don’t worry — you can use the Personal Portfolio template to create your own personal site in no time!
It’s super easy to customize and perfect for developers or freelancers who want to show off their work in style.

---

# Demo :movie_camera:

![](./public/demo.png)

## View live preview [here](https://yogaasta-portfolio.netlify.app/).

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:
| Section            |
| :----------------: |
| HERO SECTION       |
| ABOUT ME           |
| EXPERIENCE         |
| SKILLS             |
| PROJECTS           |
| EDUCATIONS         |
| CERTIFICATION      |
| CONTACTS           |


---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/personal-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
NEXT_PUBLIC_GTM = # For site analytics
NEXT_PUBLIC_APP_URL = "http://127.0.0.1:3000"
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = # For captcha verification on contact form
NEXT_PUBLIC_RECAPTCHA_SITE_KEY =
```

### Then, Customize data in the `utils/data`

Eg:

```javascript
export const personalData = {
  name: "Yoga Asta",
  profile: "/profile5.jpg",
  designation: "Software Enginer & Data Scientist",
  description: "My name is Yoga Asta....",
  email: "yoga.asta.pra@gmail.com",
  phone: "+6281945062598",
  address: "Bali, Indonesia",
  github: "https://github.com/Yogabut",
  instagram: 'https://www.instagram.com/yogaastaaa?igsh=MWxxOHZhNnl1c2d2eA%3D%3D&utm_source=qr',
  linkedIn: 'https://www.linkedin.com/in/yogaasta/',
  twitter: 'hhttps://x.com/1128Asta',
  devUsername: "yogaasta12",
  resume: "https://drive.google.com/file/d/11eM6aXD9HQYdqsAGqlnvAH15UanNzxnb/view?usp=sharing",
};
```

`devUsername` Used for fetching blog from `dev.to`.

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---
