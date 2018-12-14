## Nail'd It
Is a sudo storefront project that was designed to simulate a customer's shopping experience for hardware store items. By signing up and becoming a member the user has the ability to shop and add items to their cart as they please. When users are ready to checkout, the user can purchase these items and their cart will be cleared of all items that were bought.This web application was built using JavaScript, Angular 7, Node.js, Html 5 and Css 3. This project was created in order to stimulate a real-life coding sprint, problem-solve as a team, define roles, and find the team's strengths and weaknesses. 

## Functions and Capabilities of Nail'd It

This application handles many web development processes such as Admin vs User roles, data base associations, and full c.r.u.d acessibility.

## Resources 

- JSON Web Token for Authenticated Users - [Jason Watmore](http://jasonwatmore.com/post/2018/11/22/angular-7-role-based-authorization-tutorial-with-example)

- Association Sequelization Learning - [Sequelize Docs](http://docs.sequelizejs.com/manual/tutorial/associations.html)

- Association Joining Learning - [Loren Stewart](https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/)

## How to use this Application on the web

1. Run the [App](<add heroku clientside url here).

2. Navigate to the Signup Page.

3. This application runs differently depending on if you're merely viewing the page at a glance, a user, or an admin. The signup credentials consist of a unique username and password.

4. Admin and User Credentials are listed on the rightside of the signup page.

5. As an admin you will be able to create new products, delete existing products, and update any other products that exist in the database.

## How to run this Application Locally

1. Create a new folder in your prefered Code Editor

2. Clone the "Nail'd It-Clientside" and "Nail'd It-Serverside" Repository to the new folder you created

3. Within your Code Editor terminal, CD into the new folder and then CD into "Nail'd It-Clientside" and run the following commands:
  ```
  - npm init
  - npm install
  - npm update
```
This will update the current package.json and it's dependencies and add a folder named "node_modules", this will allow you to run the application smoothly.

4. Now, in the same Code Editor terminal you CD'd into, run the command "ng serve -o". This will open a new window in your default browser with the clientside application running.

5. 

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
