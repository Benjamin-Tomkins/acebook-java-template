![](banner.png)

# ACEBOOK-VIRTUAL-ANGUS

#### Team Members

[Ben Tomkins](https://github.com/Benjamin-Tomkins)<br>
[Daniel Ridgway](https://github.com/ridginald)<br>
[Rahul Rakshit](https://github.com/rahul-rakshit)


#### Overview
A two week engineering project at Makers Academy to build work with an existing tech-stack, consisting of :

spring,
spring boot,
spring data,
maven to build the project,
webpack to bundle the javascript,
thymeleaf to serve the react index.html,
react to make requests to the api and render the component views,
h2 to hold the data, and
cURL and postman to test and interact with and test the controller.

#### Approach
* Given the choice of Ruby/Rails or Java/Spring/React, our team decided dive into an unknown tech stack.
* Trello was used to keep track of our user stories and tickets.
* As a group, we pooled our findings into a w.i.p. GitHub Pages document.
* Initial investigations into the technologies used, were written in small applications in Java and using React before working on the main project.
* We worked on tickets in both pairs and individually, as our team was small.
* And shared knowledge through notes and in person demonstrations.

#### TECH NOTES [w.i.p.] :

https://benjamin-tomkins.github.io/acebook-virtual-angus/

#### TRELLO BOARD :

https://trello.com/b/JD91olmw/acebook-virtual-angus


```
http:// <DOMAIN> :3000/
```

The project consists of a custom JPA JSON Controller, with HATEOAS
(Hypermedia as the Engine of Application State) support and custom HTTP error handling..
and an locationally independent REACT front-end, single page application interface.


  |     Task      | HTTP-method | URI |  Content-Type   |
  | --- | --- | --- | --- |
  | Retrieve all Users    |   GET    |  /users |   JSON   |
  | Create a Users        |   POST   |  /users |   JSON   |
  | Retrieve one User     |   GET    |  /users/{id} |   JSON   |
  | Delete a User         |   DELETE | /users/{id} |   JSON   |
  | Retrieve all posts for a User |   GET  |   /users/{id}/posts |   JSON   |
  | Create a post for a User      |   POST |   /users/{id}/posts |   JSON   |
  | Retrieve a post   |   GET  |   /users/{id}/posts/{post_id} |   JSON   |
  | Delete a post   |   DELETE  |   /users/{id}/posts/{post_id} |   JSON   |


H2 IN-MEMORY DATABASE CAN BE ACCESSED LOCALLY  :

```
localhost:3000/h2-console
jdbc:h2:mem:testdb
```


```
Following are the annotations used by the controller:

@Repository - a mechanism for encapsulating storage, retrieval, and search behavior which emulates a collection of objects
@CrossOrigin - permitting cross-origin requests on specific handler classes and/or handler methods
@RestController - this annotation will treat class as controller that defines the @Controller and @ResponseBody annotations
@RequestMapping - used the map web request onto specific methods
@GetMapping - specialized version of @RequestMapping annotation that method handle the HTTP GET request with given URI
@PostMapping - same as @GetMapping but handle the HTTP POST method
@DeleteMapping - same as @GetMapping but handle the HTTP DELETE method
@PathVariable - obtain a parameter to a web request, in our example movie or review ID
@RequestBody - this annotation represents the body of the request
```

## Project Setup

**front-end**

* `cd front-end`
* `npm install`
* `npm start` - this should open a new browser window, running the application
