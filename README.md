# BlackRock Case Study

Full Stack Case Study for BlackRock AI Labs

The backend server was build using Flask framework and the frontend was built using React framework

## How to Run
First clone this repo to your local machine, then start the backend and front end servers
### Start Backend Server
1. Open the 'backend' folder of the project in a terminal
2. Create a Python Virtual Environment (venv)
3. Run the following command to install the required packages:
```
  pip install -r 'requirements.txt'
```
4. In the terminal, run the following command to start the server on port 5000:
```
flask run -p 5000
```

### Start Frontend Server
1. Open the 'frontend' folder of the project in a terminal
2. Run `npm install` command to install the required dependencies
3. Run the following command to start the server on port 3000:
```
npm start PORT=3000
```

## Running tests
- Use the command `pytest` to run Python tests for the backend server
- Use the command `npm run test` to run React tests for the frontend
