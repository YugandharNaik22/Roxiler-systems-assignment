# Project Title
Roxiler Systems Assignment -1 



## Featurey features of your application.
- search
- pagination
- visusal representation (charts)


## Installation
```bash
npm install 
npm start
```

## Usage
Provide instructions and examples on how to use your project.

```bash
# Example
```

Include screenshots as necessary.


## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
```javascript
GET /api?search=${seachText},month=${03},page=${1},per_page=${10} // retrieve data according query params (search="",month=02,page=1,per_page=10)
GET /api/statastic?month={03} //- retrieve data for selected month for 
                              //1)avaible total sale amount for month 
                              //2)no of sold  items for month 
                              //3)no of un sold  items for month 
                              
                               
GET /api/chart?month={03}    // - retrieve data as object with range and  no of items in that range
GET /api/pie?month={03}      //- retrieve data which contains unique categories of that month no of items of that category
GET /api/combineResponse     //- retrieve combined data of above mentioned 3 endpoints

```

## Technology Stack

- Node.js
- Express.js
- MongoDB
- React.js
- Redux
- Tailwind CSS
- Google Charts
- 
