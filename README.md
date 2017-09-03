# Long Running Service Simulator

Sample REST service that allows you to simulate network latency.

### Installation instructions

1. Clone this repository

2. Install dependencies
    ```
    npm install
    ```

3. Run server
    ```
    node server
    ```

### Endpoints

This simple REST service has two endpoints (you can try these URLs in a browser window):

The following endpoint allows you to retrieve a list of products with a simulated latency (6000 milliseconds in this example):
https://long-running.herokuapp.com/products?latency=6000

The following endpoint allows you to retrieve product 1 with a simulated latency (6000 milliseconds in this example):
https://long-running.herokuapp.com/products/1?latency=6000    