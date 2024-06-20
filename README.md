# QA Test Lead Portfolio Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Components](#components)
    - [Navbar](#navbar)
    - [Footer](#footer)
    - [Notification](#notification)
    - [Dashboard](#dashboard)
    - [AboutMe](#aboutme)
    - [Skills](#skills)
    - [Certificates](#certificates)
    - [TeamManagementStyle](#teammanagementstyle)
    - [ProgrammingLanguagesAndTechnologies](#programminglanguagesandtechnologies)
5. [Pages](#pages)
    - [Home](#home)
    - [Experience](#experience)
    - [Projects](#projects)
    - [Contact](#contact)
    - [Knowledge](#knowledge)
    - [Resources](#resources)
    - [NotFound](#notfound)
6. [Deployment](#deployment)
7. [Contact](#contact)

## Introduction
The "Nam's Portfolio" is a React-based web application that showcases the skills, experience, and projects of a QA Role. The application includes various sections such as About Me, Skills, Certificates, Team Management Style, and Programming Languages & Technologies. It also features a notification system and a responsive design.

## Technologies Used
This application is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **Bootstrap**: A CSS framework for responsive design and styling.
- **Font Awesome**: A library for scalable vector icons.
- **EmailJS**: A service to send emails directly from the client-side.
- **gh-pages**: A package for deploying applications to GitHub Pages.

These technologies were chosen to ensure a robust, scalable, and maintainable application that provides a seamless user experience across different devices.

## Project Structure
The project structure is organized as follows:

```
qa-test-lead-portfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AboutMe.js
│   │   ├── AboutMe.css
│   │   ├── Certificates.js
│   │   ├── Certificates.css
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Notification.js
│   │   ├── Notification.css
│   │   ├── ProgrammingLanguagesAndTechnologies.js
│   │   ├── ProgrammingLanguagesAndTechnologies.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── TeamManagementStyle.js
│   │   ├── TeamManagementStyle.css
│   │   └── ...
│   ├── pages/
│   │   ├── Contact.js
│   │   ├── Contact.css
│   │   ├── Experience.js
│   │   ├── Experience.css
│   │   ├── Home.js
│   │   ├── Knowledge.js
│   │   ├── Knowledge.css
│   │   ├── NotFound.js
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── Resources.js
│   │   ├── Resources.css
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Components

### Navbar
The `Navbar` component provides the navigation bar at the top of the page.

**File:** `src/components/Navbar.js`  
**Styles:** `src/components/Navbar.css`

### Footer
The `Footer` component provides the footer section at the bottom of the page.

**File:** `src/components/Footer.js`  
**Styles:** `src/components/Footer.css`

### Notification
The `Notification` component displays a notification banner at the top of the page.

**File:** `src/components/Notification.js`  
**Styles:** `src/components/Notification.css`

### Dashboard
The `Dashboard` component is the main component that includes sections like About Me, Skills, Certificates, Team Management Style, and Programming Languages & Technologies.

**File:** `src/components/Dashboard.js`  
**Styles:** `src/components/Dashboard.css`

### AboutMe
The `AboutMe` component displays information about the QA Role.

**File:** `src/components/AboutMe.js`  
**Styles:** `src/components/AboutMe.css`

### Skills
The `Skills` component displays a list of skills as badges.

**File:** `src/components/Skills.js`  
**Styles:** `src/components/Skills.css`

### Certificates
The `Certificates` component displays a list of certificates in a card format.

**File:** `src/components/Certificates.js`  
**Styles:** `src/components/Certificates.css`

### TeamManagementStyle
The `TeamManagementStyle` component describes the team management style of the QA Test Lead.

**File:** `src/components/TeamManagementStyle.js`  
**Styles:** `src/components/TeamManagementStyle.css`

### ProgrammingLanguagesAndTechnologies
The `ProgrammingLanguagesAndTechnologies` component lists the programming languages and technologies used by the QA Role.

**File:** `src/components/ProgrammingLanguagesAndTechnologies.js`  
**Styles:** `src/components/ProgrammingLanguagesAndTechnologies.css`

## Pages

### Home
The `Home` page displays the main dashboard.

**File:** `src/pages/Home.js`

### Experience
The `Experience` page lists the professional experiences of the QA Test Lead.

**File:** `src/pages/Experience.js`  
**Styles:** `src/pages/Experience.css`

### Projects
The `Projects` page showcases the projects worked on by the QA Role.

**File:** `src/pages/Projects.js`  
**Styles:** `src/pages/Projects.css`

### Contact
The `Contact` page provides a form to contact the QA Role.

**File:** `src/pages/Contact.js`  
**Styles:** `src/pages/Contact.css`

### Knowledge
The `Knowledge` page contains information about various knowledge topics.

**File:** `src/pages/Knowledge.js`  
**Styles:** `src/pages/Knowledge.css`

### Resources
The `Resources` page lists useful resources related to QA testing.

**File:** `src/pages/Resources.js`  
**Styles:** `src/pages/Resources.css`

### NotFound
The `NotFound` page displays a 404 error message for undefined routes.

**File:** `src/pages/NotFound.js`

## Deployment
To deploy the application to GitHub Pages, follow these steps:

1. **Install the gh-pages package:**
   ```sh
   npm install --save gh-pages
   ```

2. **Add the following scripts to your `package.json` file:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy the application:**
   ```sh
   npm run deploy
   ```

## Contact
For any questions or feedback, please contact me at [namnh663@gmail.com](mailto:namnh663@gmail.com).