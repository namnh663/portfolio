
# Nam's Portfolio Documentation

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
Welcome to Nam's portfolio project. This project is a showcase of my professional experience, skills, and projects.

## Technologies Used
- React
- React Router
- Bootstrap
- Font Awesome
- gh-pages

## Project Structure
- **src/**: Contains the source code
  - **components/**: Reusable components
    - Navbar
    - Footer
    - Notification
    - Dashboard
    - AboutMe
    - Skills
    - Certificates
    - TeamManagementStyle
    - ProgrammingLanguagesAndTechnologies
  - **pages/**: Individual pages of the application
    - Home
    - Experience
    - Projects
    - Contact
    - Knowledge
    - Resources
    - NotFound
  - **assets/**: Static files like images and stylesheets
  - **tests/**: Test files for the application

## Components

### Navbar
The `Navbar` component provides the main navigation menu.

**File:** `src/components/Navbar.js`  
**Styles:** `src/components/Navbar.css`

### Footer
The `Footer` component provides the footer section of the application.

**File:** `src/components/Footer.js`  
**Styles:** `src/components/Footer.css`

### Notification
The `Notification` component handles the notification messages.

**File:** `src/components/Notification.js`  
**Styles:** `src/components/Notification.css`

### Dashboard
The `Dashboard` component is the main component for the home page.

**File:** `src/components/Dashboard.js`  
**Styles:** `src/components/Dashboard.css`

### AboutMe
The `AboutMe` component displays personal information.

**File:** `src/components/AboutMe.js`  
**Styles:** `src/components/AboutMe.css`

### Skills
The `Skills` component lists the skills.

**File:** `src/components/Skills.js`  
**Styles:** `src/components/Skills.css`

### Certificates
The `Certificates` component displays certificates.

**File:** `src/components/Certificates.js`  
**Styles:** `src/components/Certificates.css`

### TeamManagementStyle
The `TeamManagementStyle` component explains the team management style of the QA Test Lead.

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
The `Experience` page lists the professional experiences of the QA Role.

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
