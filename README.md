Portfolio Website with CI/CD Pipeline using Jenkins
Project Overview
This is a personal portfolio website designed to showcase my skills, projects, and achievements. The website is built using modern web technologies like HTML, CSS, and JavaScript.
Additionally, this project integrates a Continuous Integration/Continuous Deployment (CI/CD) pipeline using Jenkins, which automates the build, testing, and deployment process.
Features
* Portfolio Website: Displays information about me, my skills, and my past projects.
* CI/CD Pipeline: Automated process to ensure fast, error-free, and consistent deployment of updates.
* Responsive Design: The website adapts seamlessly to different screen sizes and devices.
Technologies Used
* Frontend: HTML, CSS, JavaScript (Vanilla JS or any framework like React, if applicable)
* Jenkins: Used for CI/CD pipeline setup
* GitHub: For version control and code hosting
* Node.js: (If applicable) for running build tools or serving the website
* Tailwind CSS: (If applicable) for responsive and modern UI styling
CI/CD Pipeline
This project utilizes Jenkins to automate the following tasks:
1. Continuous Integration (CI)
* Automated Builds: Each commit pushes the latest code to GitHub, triggering Jenkins to automatically build the project.
* Automated Testing: Jenkins runs tests to ensure the project is functioning as expected.
2. Continuous Deployment (CD)
* Automated Deployment: Once the tests are successful, Jenkins will automatically deploy the latest version of the website to the production server or any cloud hosting (e.g., GitHub Pages, AWS, etc.).
Setup Instructions
Prerequisites
* Jenkins installed and running on a server.
* GitHub repository set up for the project.
* Node.js installed (if your project uses it).
* (Optional) A cloud hosting account (GitHub Pages, AWS, etc.) for deployment.
Steps to Set Up Jenkins CI/CD Pipeline
1. Clone the Repository: Clone your project to your local system or server. bash CopyEdit   git clone https://github.com/your-username/Portfolio_website.git
2.   
3. Set up Jenkins: If you haven't already, install Jenkins and configure it. You can follow the official Jenkins installation guide.
4. Create a New Jenkins Job:
    * In Jenkins, click on New Item.
    * Name the project (e.g., Portfolio Website CI/CD).
    * Choose Freestyle Project or Pipeline based on your preference.
5. Configure GitHub Webhook:
    * Set up a GitHub webhook to trigger Jenkins jobs on each commit to the GitHub repository. This ensures Jenkins is notified of code changes.
6. Configure Build Triggers:
    * Under the Build Triggers section, select GitHub hook trigger for GITScm polling.
7. Add Build Steps:
    * If you are using Node.js or any build tool, you can add build commands such as: bash CopyEdit   npm install
    * npm run build
    *   
    * This will ensure the website is built correctly each time Jenkins runs the job.
8. Deploy the Website:
    * After building and testing the project, you can configure Jenkins to deploy it to the desired hosting server. This could be AWS, GitHub Pages, etc.
    * Add the necessary deployment scripts under the Post-build Actions section.
9. Save and Run:
    * Save the job and run it manually or commit a change to trigger the pipeline automatically.
How to Contribute
If you want to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Here’s how to contribute:
1. Fork this repository.
2. Clone the forked repository to your local machine: bash CopyEdit   git clone https://github.com/your-username/Portfolio_website.git
3.   
4. Create a new branch: bash CopyEdit   git checkout -b feature-branch
5.   
6. Make your changes and commit: bash CopyEdit   git commit -am "Add new feature"
7.   
8. Push the changes to your forked repository: bash CopyEdit   git push origin feature-branch
9.   
10. Open a pull request to the original repository.



