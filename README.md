```
    ███████╗██████╗ ██████╗ ██╗███╗   ██╗ ██████╗            ██████╗ ███████╗ █████╗  ██████╗████████╗
    ██╔════╝██╔══██╗██╔══██╗██║████╗  ██║██╔════╝     ██╗    ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
    ███████╗██████╔╝██████╔╝██║██╔██╗ ██║██║  ███╗    ╚═╝    ██████╔╝█████╗  ███████║██║        ██║   
    ╚════██║██╔═══╝ ██╔══██╗██║██║╚██╗██║██║   ██║    ██╗    ██╔══██╗██╔══╝  ██╔══██║██║        ██║   
    ███████║██║     ██║  ██║██║██║ ╚████║╚██████╔╝    ╚═╝    ██║  ██║███████╗██║  ██║╚██████╗   ██║   
    ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝            ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
```

### [Tech notes from 'Virtual-Angus'](https://github.com/Benjamin-Tomkins/acebook-virtual-angus)


<img src="./Acebook.svg">

00. [x] [`spring`](#spring)
00. [x] [`spring boot`](#spring-boot)
00. [x] [`spring data`](#spring-data)
01. [x] [`maven`](#maven) to build the project <br>
02. [x] [`webpack`](#webpack) to bundle the javascript <br>
03. [x] [`thymeleaf`](#thymeleaf) to serve `index.html` <br>
04. [ ] [`react`](#react) to make requests to the api and render the component views <br>
05. [ ] [`flyway`](#flyway) to manage `postgres` db migrations <br>
06. [ ] [`rest repositories`](#rest-repositories) to manage `postgres` db migrations <br>
07. [ ] [`jpa`](#jpa) to manage `postgres` db migrations <br>
08. [ ] [`h2`](#h2) to manage `postgres` db migrations <br>
10. [ ] [`lombok`](#lombok) to manage `postgres` db migrations <br>

: aspects of the engineering challenge :

Tool chain :
Front End :
Backend / Server :
Datastore : 

curl -X POST "localhost:8080/api/posts" -d "{\"content\": \"Whatever\"}" -H "Content-Type: application/json"


whilst Tomcat is running.. open a browser to
```localhost:8080```
```
$.ajax({
    url: "http://localhost:8080/api/posts",
    type: "POST",
    data: JSON.stringify({"content": "🦄🦄🦄"}),
    contentType: "application/json",
});

```

### maven

> maven |yiddish: *accumulator of knowledge*| is an automated build system

```
+ maven allows a project to build using a project object model (pom.xml) configuration file.
+ it provides uniform and efficient build system for all team members.
```
* Install : ```brew install maven```
* Version : ```mvn --version```
* Compile : ```mvn compile```
* Build  : ```mvn package```

If junit is listed as a dependency in the pom.xml <br>
* Run tests : ```mvn test```

To clean-up artifacts from by prior builds <br>
* Clean-up : ```mvn clean```

run the compiled and packaged jar : ```java -jar target/acebook-template-1.0-SNAPSHOT.jar```<br>
( this will fail if you haven’t set up your classpath )

To run the project with maven, add the following to the pom.xml file :
```
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```

* You can now run the project with : ```mvn spring-boot:run```


### spring
```
+ spring is an application framework built on top of Java.
+ it allows for the building of decoupled systems using dependency injection.
```

### spring boot
```
+ spring boot makes building *spring applications* simple -- requiring almost no configuration.
+ library versions are automatically resolved, and deployment is automated via maven or gradle.
+ Basically, it doubles down on Spring’s simplification of Java development.
```

### spring data
```
+ spring data is spring helper library for data access.
+ it’s primary usage is the spring data jpa
+ it lets you connect to database engines conforming to the jpa standard.
```





### webpack
### thymeleaf
### react
### flyway
### rest repositories
### jpa


### h2

> H2 is a relational database management system written in Java.
```
+ It can be embedded in Java applications or run in the client-server mode.
+ In-memory databases live only during the time of execution of the application.
+ H2 supports a sub set of the SQL standard.
+ H2 also provides a web console to maintain the database.
```

The project will require the following dependency in the pom.xml file :
```
<dependency>
   <groupId>com.h2database</groupId>
   <artifactId>h2</artifactId>
   <scope>runtime</scope>
 </dependency>
```
To enable the H2 console, add the following code to :
`test` / `resources` / `application.properties`

```
spring.h2.console.enabled=true
```
Start the Application ;
```
mvn -pl persistence spring-boot:run
```

Login to the database with the following credentials :
```
http://localhost:8080/h2-console
JDBC URL: jdbc:h2:mem:testdb
User Name: sa
Pasword: <leave this empty>
```

Addendum : The above steps are not necessary if you are using the [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/current/reference/html/using-boot-devtools.html "Spring Boot DevTools")
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <optional>true</optional>
</dependency>
```
<br>
<br>

### lombok

> Lombok is a java library that plugs into your editor and build tools
> to generate getter and setter methods -- to keep your code cleaner