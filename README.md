# Cloud Resume Challenge — Arvin Josol

The live website for this challenge can be found here: [Arvin Josol - Cloud Challenge Resume](https://resume.arvinjosol.ca/)

This is the project repository for the backend of my Cloud Resume Challenge.  

The repo for the frontend portion of the challenge is here: [Arvin CRC](https://github.com/Arvton/arvin-josol-cloud-resume-challenge)

I am going through the challenge to make further use of my knowledge and skills from the cloud certifications I have earned. 

Through my workplace, I get to build my experience with cloud solutions professionally. I want to further boost my skills by making my own cloud-based projects.  

# Challenge Homepage

The creator’s homepage for the challenge is here: [The Cloud Resume Challenge](https://cloudresumechallenge.dev/)

From the challenge FAQ:

“The Cloud Resume Challenge is a hands-on project designed to help you bridge the gap from cloud **certification** to cloud **job**. It incorporates many of the skills that real cloud and DevOps engineers use in their daily work.”

# Project Details

The challenge is broken down into 16 different steps. I will fill out each section as I work through the challenge.

## 1. Certification

I have seven different Azure certifications. My most advanced certifications, as of Feb 2024, would be the AZ-400 and AZ-104. I am currently preparing for the AZ-305 exam.

## 2. HTML

This step involves converting my one-page resume into HTML elements.  It is closely tied to step 3 since I’m planning to make the website design responsive for mobile and tablet.

Turning a two-column, 8.5 x 11 paper, into something that would look good for mobile took longer than expected. 

## 3. CSS

I’m using Sass to create my CSS stylesheets for the challenge. For the layout, Flexbos will be used where needed.

This isn’t normally part of the challenge but I want to incorporate what I know from my coding bootcamp experience.

## 4. Static Website

The website is hosted as a static website on an Azure storage account. Simpler hosting solutions like Netlify and Azure Static Web Apps were avoided to increase the learning opportunity.

## 5. HTTPS + CDN

The challenge website uses Microsoft CDN (classic). I created a CDN profile and endpoint. The CDN endpoint uses a custom domain, TLS, a CDN managed certificate, and a rule to redirect HTTP request to HTTPS.

## 6. DNS

I added a CNAME record for the CDN endpoint on DigitalOcean where I manage my DNS records.

## 7. JavaScript

## 8. Database

The challenge recommends using CosmosDB for Tables to store the value for a visitor counter. It is deployed in a serverless capacity to reduce the cost. The value increments when the page is loaded.

## 9. API

This part makes use of an Azure Function App to run the Function that will connect to the CosmosDB table and update the visitor count.

Once the function was deployed to the app, I tested it in three ways: executing it manually in VS Code, hitting the API URL on Postman, and on page load for the live page.

## 10. More JavaScript

The original challenge recommends writing the Azure Function code in Python to increase your breadth of experience. I used more JavaScript to gain more depth of experience. As a web developer bootcamp grad, I want to build on my existing knowledge of node.js.

## 11. Tests

## 12. Infrastructure as Code

## 13. Source Control

## 14. CI/CD (Back end)

## 15. CI/CD (Front end)

## 16. Blog post

# Extending the Project

I’ll be extending the project with more features that align with the cloud certifications that I have earned.
