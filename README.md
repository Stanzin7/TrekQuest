
# TrekQuest 🌍

Welcome to TrekQuest, a project born out of passion, innovation, and the desire to connect travelers worldwide. As part of my journey into the tech world, I've documented my experiences, learnings, and the story behind TrekQuest in a comprehensive post on Medium.

📖 **Read the Full Story**: [MLH Fellowship Application 2024 Cohort and The Journey of TrekQuest](https://medium.com/@snorzang65/mlh-fellowship-application-2024-cohort-b32ed79e6bea)

This post dives deep into my application for the MLH Fellowship 2024 Cohort, my experiences, the motivation behind TrekQuest, and how this project embodies my journey in technology and open-source contribution. Whether you're here to explore the code, contribute, or find inspiration, I hope my story on Medium gives you a glimpse into the passion that drives this project.

TrekQuest is an open-source, collaborative project aimed at making travel more accessible, enjoyable, and community-driven. It's not just about the code; it's about building connections, sharing experiences, and creating something that brings real value to the travel community.

Let's embark on this journey together. 🚀

---



<img width="1440" alt="Trekquest-front-page" src="https://github.com/Stanzin7/TrekQuest/assets/109467334/35b9369d-2f43-4414-aae4-2a8c2a7b307b">

<img width="1440" alt="Screenshot 2024-02-02 at 5 29 39 PM" src="https://github.com/Stanzin7/TrekQuest/assets/109467334/8fd8122e-28f4-4b78-a557-7ee095526582">

<img width="1436" alt="Screenshot 2024-02-02 at 5 30 10 PM" src="https://github.com/Stanzin7/TrekQuest/assets/109467334/27784aa2-2ac4-4e67-ab94-9b8647c501d0">

<img width="1440" alt="Screenshot 2024-02-02 at 5 30 20 PM" src="https://github.com/Stanzin7/TrekQuest/assets/109467334/2ac6cb24-01a6-41ab-b24e-9b0cd86c7e9f">

<img width="1440" alt="Screenshot 2024-02-02 at 5 30 28 PM" src="https://github.com/Stanzin7/TrekQuest/assets/109467334/d75a7a96-734f-46a0-9c4d-dcac1f35642b">

<br></br>

## 🚀 Features

- **Discover Tours**: Browse through curated tours to find your next adventure.
- **Create Tours**: Share unique tour ideas and gather fellow enthusiasts.
- **Collaborate**: Build connections, find new friends, and embark on mutual adventures.
- **Safety First**: Safety is our priority. All interactions on our platform are secure.

## 📌 API Endpoints

While the API currently offers basic CRUD operations, expanded functionalities are planned.

| Endpoint            | Description                         |
| ------------------- | ----------------------------------- |
| `GET /tours`        | Retrieve all available tours.       |
| `POST /tours`       | Create a new tour.                  |
| `GET /tours/:id`    | Fetch details of a specific tour.   |
| `PUT /tours/:id`    | Update a particular tour's details. |
| `DELETE /tours/:id` | Remove a tour from the platform.    |


## 🛠 Development

This project is part of my **CS 460 PROJECT**. Continuous improvements and new features are planned.

# TrekQuest 🌍

## Setting Up and Running Locally

Follow these steps to fork the repository, set it up locally, integrate with MongoDB, and configure the necessary environment variables for development.

### Step 1: Fork and Clone the Repository

1. **Fork the Repository:** Navigate to the GitHub page for TrekQuest and use the fork button to create a copy of the repository under your GitHub account.

2. **Clone the Repository:**
   Open your terminal or command prompt and run:

   ```sh
   git clone https://github.com/stanzin7/TrekQuest.git

### Step 2: Set Up MongoDB

1. **Create a MongoDB Atlas Account:** Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up for an account if you haven't already. Follow the steps to create a new cluster. For development purposes, you can select the free tier available.

2. **Configure Security Settings:** Within the MongoDB Atlas dashboard, navigate to the Network Access settings. Add a new IP address and select "Allow Access from Anywhere." This is recommended for development, but make sure to restrict access in a production environment.

3. **Create a Database User:** Still in the MongoDB Atlas dashboard, go to the Database Access settings and add a new database user. Give this user read and write permissions to your database.

4. **Get Your Connection String:** After setting up your cluster, click on the "Connect" button, select "Connect your application," and copy the provided connection string. This will be used in your application's environment variables.

### Step 3: Configure Environment Variables

1. **Create a `.env` File:** In the root directory of your cloned repository, create a new file named `.env`. This file will store sensitive and configuration-related information.

2. **Set Environment Variables:** Add the following content to your `.env` file, replacing placeholders with your actual data:

   ```plaintext
   NODE_ENV=development
   PORT=3000
   DATABASE=mongodb+srv://snorzang65:<PASSWORD>@cluster0.bhbfxg7.mongodb.net/natours?retryWrites=true
   DATABASE_PASSWORD=Stanzin7
   JWT_SECRET=<your_jwt_secret>
   JWT_EXPIRES_IN=90d
   JWT_COOKIE_EXPIRES_IN=90
   EMAIL_HOST=sandbox.smtp.mailtrap.io
   EMAIL_USERNAME=<your_mailtrap_username>
   EMAIL_PASSWORD=<your_mailtrap_password>
   EMAIL_PORT=25
   
Ensure to replace <PASSWORD>, your_jwt_secret, your_mailtrap_username, and your_mailtrap_password with your actual MongoDB password, JWT secret, and Mailtrap credentials respectively.

### Step 4: Install Dependencies

Navigate to the project directory in your terminal or command prompt and run the following command to install the required Node.js dependencies:

      ```sh
      cd TrekQuest
      npm install

### Step 5: Run the Application

To start the server and run your application locally, execute one of the following commands in the terminal, depending on your project's configuration:

- For a standard start script:

     ```sh
     npm start

### Step 6: Access the Application

With the server running, open your preferred web browser and navigate to `http://localhost:3000`. You should now be able to view and interact with the TrekQuest application running locally on your machine.
### Step 7: Future Thoughts and Collaboration 🚀

We're excited about the journey ahead for TrekQuest and the potential it holds! As an open-source project, we thrive on collaboration and contributions from developers like you. Whether you're fixing a bug 🐛, adding a new feature ✨, or improving the documentation 📚, your help is what makes this project grow and improve.

#### Here's How You Can Contribute:

- **Share Your Ideas:** Have a feature in mind or an improvement? Open an issue to discuss it with the community.
- **Submit a Pull Request:** Ready to contribute code? Great! Fork the repository, make your changes, and submit a pull request. We'll review it together.
- **Spread the Word:** Love TrekQuest? Share it with your friends, on social media, or in your developer circles. The more, the merrier!

#### Future Enhancements:

We're dreaming big for TrekQuest! Here are a few areas we're looking at:

- **Expanding the API:** More endpoints mean more possibilities. 🌐
- **UI/UX Improvements:** Making TrekQuest even more user-friendly and visually appealing. 🎨
- **Performance Optimization:** Ensuring TrekQuest runs smoothly for everyone. ⚡
- **Security Enhancements:** Keeping our community safe and secure. 🔒

We welcome your input, feedback, and contributions to make these goals a reality. Together, we can build something amazing that benefits the wider open-source community and travelers around the globe.

#### Let's Build Together:

Join us in making TrekQuest a tool that everyone loves to use. Your contributions not only help improve the project but also support the open-source ethos of sharing, learning, and collaborating.

Happy coding, and here's to the many adventures ahead with TrekQuest! 🌟🌍

## 🤝 Feedback and Contribution

Your feedback and contributions are valuable. For ideas or bugs, please open an issue or submit a pull request.
