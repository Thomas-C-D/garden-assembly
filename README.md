
# Garden-Assembly

I am proud to present Garden Assembly, my final project for the General Assembly bootcamp and my going-away gift to the Software Engineering Immersive. Here, General Assembly graduates can plant flowers with their hopes for the future, which will grow over the years into beautiful blossoms. Leave your wishes for post-grad and come back to see how things have changed, and update your journal to let everyone know what's happened. Congratulations, graduates.
<img width="1368" alt="READMEImage1" src="https://github.com/Thomas-C-D/garden-assembly/assets/152713568/0f550b42-e20c-4957-bc65-10280dc90985">
<img width="1368" alt="READMEImage2" src="https://github.com/Thomas-C-D/garden-assembly/assets/152713568/0efd3fae-543b-4d3b-ab8b-7d5d1e2fae8b">
<img width="1368" alt="READMEImage3" src="https://github.com/Thomas-C-D/garden-assembly/assets/152713568/1ebf0c3d-079d-49c7-b38b-7ab3dbb5cd7d">

# Route Table
|       **URL**               | **REST Route** | **HTTP Verb** | **CRUD Action** |   **React Routes** |**Models**|       
| --------------------------- | -------------- | ------------- | --------------- | ------------------------ |-------------|
| /flowers                  | index          | GET           | read            | IndexPage/Flower            | flower.js |
| /flowers/:id                   | show           | GET           | read            | DetailsPage          | flower.js |
| /flowers/new                   | new            | GET           |                 | NewFlowerPage              | flower.js | 
| /flowers                     | create         | POST          | create          |                          | flower.js  |
| /flowers/:id/edit              | edit           | GET           | read            |   DetailsPage           | flower.js |
| /flowers/:id                   | update         | PATCH/PUT     | update          |                          | flower.js  |
| /flowers/:id                   | destroy        | DELETE        | delete          |                          | flower.js |
| /comments/new/:messageId    | new            | GET           | read            | Comment/CommentSection              | comment.js | 
| /comments/create/:messageId | create         | POST          | create          | Comment/CommentSection                         | 
comment.js |
| /home                      |                | GET           |                 | HomePage                |  |
| /signup                          | create               | POST           |                 | AuthFormPage                 | user.js |
| /login                          |                | POST           |                 | AuthFormPage                 | user.js  |
| /*                          |                | GET           |                 | NotFoundPage                 |  |

# Wire Frames
![Project4WireframeTemplateHome](https://media.git.generalassemb.ly/user/51537/files/63bf2bbd-1d46-4b21-956e-f6a6f8db6b87)
![Project4WireframeTemplateIndex](https://media.git.generalassemb.ly/user/51537/files/70bc735c-658c-4c66-b619-d61825f143e0)
![Project4WireframeTemplateDetails](https://media.git.generalassemb.ly/user/51537/files/707e0c64-77f2-461d-9397-0d60c1ff058c)
![Project4WireframeTemplateNewFlower](https://media.git.generalassemb.ly/user/51537/files/a890223a-6ffb-47ef-9b9e-f5a938a8b772)
![Project4WireframeTemplateNewUser](https://media.git.generalassemb.ly/user/51537/files/aacb077f-83b4-499b-af9e-ae2e1116a91d)

# ERD
![ERD](https://media.git.generalassemb.ly/user/51537/files/e0f42d1a-0bb2-492f-a037-851589e76153)

# Technologies Used
- HTML, CSS, and JavaScript
* React.js
- Node.js
+ Heroku
* VS Code

  # Installation Instructions
Access Garden-Assembly by either:
- Opening it via Heroku through [this link](https://garden-assembly-2e054255c800.herokuapp.com/)
  
or:
  + Cloning the repository to your local machine, where you can view it in VS Code.

# User Stories
+ As a graduate of General Assembly, I want to see my fellow graduates' hopes for the future, and their experiences and how much they've grown since graduation years later.
- As a team lead / hiring manager, I want to see the art and web-building prowess of this prospective new hire.
* As a friend / relative of the app's creator, I want to see what they have made and support them.

# Unsolved Problems and Major Hurdles

**Time Constraints**

Once again, my issues with time management made it difficult to get everything that I wanted to add to my app done in time, which was particularly not helped by how unfamiliar I was with React. Nevertheless, I did my best to use my time wisely and did crunch time where I had to, and Garden-Assembly has still come out beautifully.

**Unfamiliarity with React**

Despite, or perhaps in part because of, its compressed frontend, React is much more labrynthinine than I was anticipating, and its unfamiliar rules and setting contributed to my difficulty in meeting all my stretch goals - such as making it difficult to apply audio-playing event listeners to buttons on the app. I do, however, feel I have grown to know React very well now, and will hopefully be able to navigate it with much more ease in the future.
# What's Next
I hope to add my own personally composed background music to the app, along with more sound effects and possibly better animations.

# Citations
- [W3Schools](https://www.w3schools.com/)
