# Foton Tech Full-Stack Challenge 

- Developing an application using Node.js on the back-end and React-native on mobile | Both with Typescript ⌨️
- Project description stated on the `challenge-description/` folder 📁
- A video 🎥 with all mobile application functionalities and validations can be seen [here](https://www.youtube.com/watch?v=Vb1VjrGGCw4)

**_Clone the repository in order to follow the steps inside the `How to run` sections_**

<br>

## Back-end 〄
**🚏 _Insomnia routes contained inside the `api-routes` folder_**
### How to run 🏃🏻
- Run the docker container 🐳 with the command `docker run --name postgres -e POSTGRES_PASSWORD=password -p 5438:5432 -d postgres`
- Go to the `api/` folder and run `npm install` in order to install the project's dependencies
- Then, to run the api `npm run dev:server`

### Features ⚙️
- 🏛 Repository pattern for the project's architecture
- `typeorm` to establish database connection and operate on it
- `tsyringe` for Dependency Injection
- `express-validator` to add the constraints related to the book creation route
- `jest` used for testing [`npm run tests`]

<br>

## Mobile 📱
### How to run 👟
- Go to the `mobile/` folder and run `yarn` in order to install the application's depencies
  - If you're using XCode go to the `ios/` folder and run the `pod install` command   
- Run `react-native link` inside the root `mobile/` folder 
- Then, to run the app run `yarn ios` if you're using XCode, otherwise execute `yarn android`

### Features 🔭
- `axios` for handling api calls 
- `styled-components` for the app's styling
- `react-hook-form` for form-validation on the Create Book Screen 
- `react-native-toast-message` for validation toasts on the Create Book screen 

  > **_Since I've only tested the application on an iPhone 12 simulator, there might be some resposivity issues, mainly related to the `KeyboardAvoidingView` on the book creation page_**
