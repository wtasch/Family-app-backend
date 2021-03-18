# Project-4
## Family Fun App


[Link to Horse Trainer App](https://bills-family-app.surge.sh/)


[Link to git repository](https://github.com/wtasch/Family-app-frontend)
[Link to git repository](https://github.com/wtasch/Family-app-backend)
---
#### Motivation:
Develop an application for Familys to help manage Family business.  Include features to assign tasks, post comments, create parts and shopping List.  Include a centralized database, sign-in, login security.

---
#### Objective Level 1 (MVP) (complete):
- [x] Functional Backend app integrated to Front End app.
- [x] common header and Nav bar
- [x] Post tasks for Users with full CRUD Functionality.
- [x] show list of events and tasks.
- [x] add and assign task. List task be prioritize
- [x] Parant and Kid Post Page to post comments and.

#### Objective Level 2 (partially complete):
* [x] Have scheduled and prioritized events within the task table.
* [x] Simple styling.
* [ ] Incorporate Calender.
* [x] Portfolio Styling.
* [x] External API for Random Horse Images.

#### Objective Level 3 (partially complete):
* [x] Password encryption and authorization.
* [x] Improved styling.
* [x] Mobile responsive.
* [ ] Contact From Emailer.


---
#### Wireframe
			
						
	User		Events		    Fun Post	
	Username	Date	        Description		
	password	time	        Comments		
	email		description	    User		
	phone		user			
	first 		categorys	
	last				
	img					
						
						
						
##### Page Layout and Website Flow


 * Home page

    ![Home page](https://i.imgur.com/e33pk5g.png)

 *  log-in page

    ![log in](https://i.imgur.com/EDl57Gx.png)

 * Task Page

    ![task](https://i.imgur.com/ibnDIsv.png)

 * Shopping List

    ![Shopping list](https://i.imgur.com/UTe13ae.png)

* Contact Form

    ![Contact Form](https://i.imgur.com/wUQwjRt.png)


##### Relationship Mapping

 * Event and Task pages are joined by eventId variable.


---

#### Technology used:
- [x] HTML, CSS, JavaScript
- [x] Node.js
- [x] Postgres
- [x] Express
- [x] EJS
- [x] Sequelize
- [x] github - used for revision control
- [x] Heroku - used for deployment.


---

#### Main features:
* List of features
 * user profile functionality (username and password)
 * CRUD models 
 * editable text and image fields
 * predefined inputs (dropdown fields) for assigned priority

---

#### Code snippet:
Typical API call to retreive backend data:


  getEvents = async () => {
    //console.log("before api event call");
    const response = await axios.get('http://localhost:3004/event');
    //console.log("after get all event call" + response);
    this.setState({
        events: response.data,
    });
  };

#### User stories:
* As a Parent, I want a fun way to assign task and chores to my Kids.
* With many projects to completed, need a way of tracking.
* With several cars, tractors, mowers and farm equipemnt, need way of recording repiar parts and also a shopping list.
* As a kid, need fun way to post comments and pictures

---

