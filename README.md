#Demonstration
## Embedded Video
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=SuXNCh-_r68" frameborder="0" allowfullscreen></iframe>

# Requirements
* Node.js
* MongoDB
* Nodemon

# How to Run

1. Clone this repository:
    ```bash
    git clone https://github.com/iqbalTashif/assignment_alemeno.git
    ```

2. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

3. Install the frontend dependencies:
    ```bash
    npm install
    ```

4. Navigate to the `backend` directory:
    ```bash
    cd ../backend
    ```

5. Install the backend dependencies:
    ```bash
    npm install
    ```

6. Modify the `env.env` file in the `backend` folder with the appropriate ports and database connection string. Ensure to update the `.env` file in the `frontend` folder with the same values.

7. Navigate to the `backend/data` directory:
    ```bash
    cd data
    ```

8. Run the data initialization scripts:
    ```bash
    node courses.js
    node users.js
    ```

9. Start the application using Nodemon:
    ```bash
    npm start or node app.js
    ```

10. Start the frontend application: 
    ```bash
    cd ../frontend
    npm start
    ```

Make sure MongoDB is running before you start the application.
