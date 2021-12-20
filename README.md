# Scaled Robotics Backend
DIGITIZING CONSTRUCTION

## Required Features
- Users can store starships infor
- Users can update starships infor
- Users can get all starships infor. 

## Additional Features
-  Users can delete all starships infor
-  
## Technologies

- Node JS
- Express
- ESM
- Mochai
- Chai

## Requirements and Installation

To install and run this project you would need to have installed:
- Node Js
- Git

To run:
```
$ git clone https://github.com/jiokeokwuosa/scaled-robotics-backend.git
$ cd scaled-robotics-backend
$ npm install
$ npm run dev
```

## Testing
```
$ npm test
```

## Pivotal Tracker stories

None

## Template UI

None

## API

The API is currently in version 1 (v1) and can be accessed locally via [http://localhost:5000/api/v1](http://localhost:5000/api/vi)

## API Documentation Link

https://github.com/jiokeokwuosa/scaled-robotics-backend/edit/main/README.md


## API Endpoints

| Endpoint                                         | Functionality                            |
| ------------------------------------------------ | -----------------------------------------|
| POST /baseURL/starShip/           | Store starships information                        |
| GET /baseURL/starShip/           | Get a list of starships information                           |
| PATCH /baseURL/starShip/:uid   | Update a starship count                         |
| DELETE /baseURL/starShip  | Delete starships                       |


## Author

Okwuosa Chijioke (Okwuosachijioke@gmail.com)

## License

This is licensed for your use, modification and distribution under the [MIT license.](https://opensource.org/licenses/MIT)

## My Env Variables
NODE_ENV=development
PORT=5000
ATLAS_URL=mongodb+srv://jiokeokwuosa:jiokeokwuosa@chijiokedb-hepo3.mongodb.net/test?retryWrites=true&w=majority
