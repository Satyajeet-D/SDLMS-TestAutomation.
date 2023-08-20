# SDLMS Test Automation

This repository contains automated test scripts and documentation for testing the login and user authentication process of DeepThought's Learning Management System (SDLMS).

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Test Cases](#test-cases)
- [Running the Tests](#running-the-tests)
  - [Configuration](#configuration)
- [Documentation](#documentation)
- [Challenges Faced](#challenges-faced)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The SDLMS Test Automation project aims to ensure the reliability and functionality of SDLMS login and user authentication processes. It includes automated test scripts written using TestCafe and documentation to facilitate testing.

## Getting Started

### Prerequisites

Before running the tests, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/): A JavaScript runtime environment.
- [TestCafe](https://devexpress.github.io/testcafe/): A testing framework for web applications.

### Installation

1. Clone this repository to your local machine:

   ```sh
   git clone <repository-url>


2. Navigate to the project directory :

>>>    cd SDLMS-Test-Automation

3. Install project Dependencies :

>>>  npm install

### Test Cases
- Test Case 1: Test Successful Login with Valid Credentials
Scenario: Verify that a user can log in successfully with valid credentials.

- Test Case 2: Test Unsuccessful Login Attempts with Invalid Credentials
Scenario: Verify that a user cannot log in with invalid credentials.

- Test Case 3: Validate Error Messages for Invalid Login Attempts
Scenario: Verify that appropriate error messages are displayed for invalid login attempts.

- Test Case 4: Verify Redirection to Password Reset Page
Scenario: Verify that the user is redirected to the password reset page when clicking "Forgot Password."


### Running the Tests
### Configuration

- To run the tests, use the following command:

>>>  testcafe <browser> login.test.js
>>> Replace <browser> with the name of the browser you want to use (e.g., "chrome," "firefox").

### Documentation

- For detailed documentation on the SDLMS Test Automation project, refer to the Documentation file.
