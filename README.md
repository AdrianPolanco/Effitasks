# 
Effitasks
This project is still under construction
This is the repository for Effitasks, a task management web app that I am developing primarily for practical and learning purposes. Upon launching the first version of the application, as a user you will be able to:

Register with Email, First Name, Last Name, Phone Number, and (optionally) profile picture. (No, there won't be a password; authentication will be handled via email or phone, a much more secure approach).
Log in with the account you created.
(Optionally) Log in with Google or Facebook.
Create tasks with a title, description, date, and an option to mark if it is repetitive or not.
Change your profile picture, name, and phone number.
Be reminded by the application through push notifications and/or email.
For a second version of the application, in addition to the above, you will be able to:

Send connection requests to other users.
Create task groups with other users.
Invite other users to your group.
Remove other users from your group.
Assign roles to other users in your group.
Read, create, update, and delete tasks from the group you created or are part of.
The technology stack I am using for the project is:

Programming Language: Typescript (Javascript)
Frontend Framework: React
UI Library: Material UI
Testing Libraries: Vitest and React Testing Library
Containerization: Docker
Backend As A Service (BaaS): Supabase
State Management: Redux Toolkit
Data Fetching and Caching: Redux Toolkit Query

So far, this is the progress of the project:

Landing Page: This is the initial page of the project, where the user can see what the application is about and optionally register or log in if they click on one of the buttons that trigger such actions.
  ![image](https://github.com/AdrianPolanco/Effitasks/assets/116674818/d928d512-9123-499a-a300-e9aaed21f5d5)
  ![image](https://github.com/AdrianPolanco/Effitasks/assets/116674818/64d67908-7aac-4099-87f8-4b1230b59193)


The created view is fully responsive and is usable, functional, and visually appealing on both mobile, tablet, and computer screens:
![image](https://github.com/AdrianPolanco/Effitasks/assets/116674818/6885cefb-83b9-4d65-b4d2-63300c9fe427)


I've also added the registration page, and it currently features a form validation functionality. This feature ensures that the user cannot submit invalid data; the submit button remains inactive until all fields meet the specified criteria. If valid values are entered and then invalidated, the button will immediately deactivate. Additionally, I provide valid examples just below each field, making it easy for the user to understand how the data should be entered. Here's the view when invalid data is entered:
![image](https://github.com/AdrianPolanco/Effitasks/assets/116674818/6650dfaf-b6c0-4196-ba6b-18bba4170f5a)
![image](https://github.com/AdrianPolanco/Effitasks/assets/116674818/8c04eead-0c88-47ee-89bd-636423c9d9ad)
![image](https://github.com/AdrianPolanco/Effitasks/assets/116674818/1db22a2e-b601-4b12-880c-e9e5e4b803aa)

And here's the view when all entered data meets the expected format. As you can see, the submit button is now active, allowing the user to submit their information, as the provided data is valid:
![image](https://github.com/AdrianPolanco/Effitasks/assets/116674818/e129a4b2-e7f5-4088-80b6-282784510eb8)

Certainly, the application is responsive and perfectly usable on mobile devices as well:
![image](https://github.com/AdrianPolanco/Effitasks/assets/116674818/da0fcf50-a96d-410d-9927-d3fa74765b3d)



