# Scaled Robotics Assesment Backend
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

![Screenshot (442)](https://user-images.githubusercontent.com/33726993/146697128-b7099dcf-eb0e-4f44-aba3-8b980dba46b3.png)
![Screenshot (443)](https://user-images.githubusercontent.com/33726993/146697130-611135c2-bb04-4912-a83c-f6c8dcea811a.png)
![Screenshot (444)](https://user-images.githubusercontent.com/33726993/146697132-5a68a48f-65f0-4b04-89b6-6b49f05c5fd0.png)


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
