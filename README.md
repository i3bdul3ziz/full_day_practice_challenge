[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
![Misk Logo](https://i.ibb.co/KmXhJbm/Webp-net-resizeimage-1.png)

## Online Full Day Challenge
COVID-19 is a new illness that can affect your lungs and airways. It's caused by a virus called coronavirus.

The symptoms of coronavirus are:
- a cough
- a high temperature
- shortness of breath

But these symptoms do not necessarily mean you have the illness.

The symptoms are similar to other illnesses that are much more common, such as cold and flu.

Simple measures like washing your hands often with soap and water can help stop viruses like coronavirus (COVID-19) spreading.

There's no specific treatment for coronavirus (COVID-19). Treatment aims to relieve the symptoms until you recover.

It's not known exactly how coronavirus (COVID-19) spreads from person to person, but similar viruses are spread in cough droplets.

### Problem / Prompt
---
![](https://s30876.pcdn.co/wp-content/uploads/Saudi-Arabia-1170x630.jpg)
A curfew from <strong>06:00Hrs - 19:00Hrs</strong> has been implemented by the <strong>Kingdom of Saudi Arabia</strong>  to ensure the safety of the kingdom and cortail the spread of the virus.

<strong>As Salamah District in Jeddah, Saudi Arabia</strong> has a large population of senior citizen who can not go to the store and compete with the younger citizens in panick shopping to stock up on groceries during the curfew. 

We need some way to get the list of things needed by the seniors and deliver to a location closer to them for pick up.

The King decided to call on the <strong>SEI-12 team</strong> to develop a web app which allows the seniors create a list of their required `items` and any registered youth can run these errands for them.

#### Task 1:
The `Seniors` should be able to register as a senior with contact details(name, address, age and phone number) and create a list with an expected delivery date. The list should contain items and a status ( *0 - free,1 - inProgress and 2 - fulfilled*), each item should have a name and quantity.

#### Task 2:
The `Helpers` should be able to register as a helper with contact details(name, address, age and phone number). Helper should be able to view all lists which have status of free.

#### Task 3:
Helpers should also be able to view lists which are inProgress or fulfilled, they should be able to see lists if they are fulfilling the list or have fulfilled the list.

## Help the seniors
![](https://image.shutterstock.com/image-photo/dubai-united-arab-emirates-circa-260nw-396264253.jpg)

### Requirements
-----
 1. All Users must be registered on the web app to post and accept task.
 1. There should be 3 types of users:
    - Admin
    - Senior
    - Helper
 1. All users should only login with phone number and password.
 1. Anyone should be able to view the Seniors lists
 1. Only `helpers` can accept / deliver grocery items
 1. Items should be stored in seperate collection if needed.
 
 
 <details>
  <summary>*I am lost and need help</summary>
  
 ### Information for users
 ```javascript
 {
     firstname: "",
     lastname:"",
     dateOfBirth: "",
     address: {
         houseNumber: 0,
         street: "",
         city : "",
         district: ""
     },
     lists:[]
 }
 ```
### List information
  ```javascript
 {
     lists: [
         {
            items:[
                {
                    item: "",
                    quantity: 0
                }
            ],
            deliveryDate:"",
            status: 0 // 0/ 1 / 2
         }
    ]
 }
 ```

  ```
</details>


### Hints
-------
- User Model can have the following fields as booleans to restrict what is seen by the end user:
    - isAdmin
    - isHelper
    - isSenior 


### Bonus
1. 
1. 

### Credits
-------------
 - Iweala Ebere

### References
- [NHS UK](https://www.nhs.uk/conditions/coronavirus-covid-19/#symptoms)
- [Shutter Stock](https://image.shutterstock.com/image-photo/dubai-united-arab-emirates-circa-260nw-396264253.jpg)
