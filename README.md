# Cypress E2E Framework

A robust and modern end-to-end test automation framework built with Cypress, offering comprehensive support for both UI and REST API testing. This framework is designed for simplicity, scalability, and easy integration into your CI/CD pipelines.

## Features

* **UI & API Testing:** A unified framework to test both the user interface and backend REST APIs of your application.
* **JavaScript-Based:** Built on JavaScript for a familiar and flexible testing environment.
* **Mochawesome Reports:** Generate beautiful, easy-to-read HTML reports for every test run.
* **CI/CD Integration:** Ready for continuous integration with pre-configured GitHub Actions workflows.
* **Modular Structure:** A clean, organized folder structure makes it easy to manage and scale your tests.

## Getting Started

Follow these steps to get the framework up and running on your local machine.

### Prerequisites

You need to have Node.js and npm installed.

### Installation

1.  Clone the repository:
    ```sh
    git clone [https://github.com/mishalalex/cypress-e2e-framework.git](https://github.com/mishalalex/cypress-e2e-framework.git)
    ```

2.  Navigate into the project directory:
    ```sh
    cd cypress-e2e-framework
    ```

3.  Install the dependencies:
    ```sh
    npm install
    ```

## 🛠️ Running the Tests

### From the Command Line

To run all tests in headless mode:

```sh
npx cypress run
