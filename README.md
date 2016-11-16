e-Learning System :books:
===

## An online platform where you can share problems and solve them together with the help of an AI assistance.
---

Fast GoTo:
- [Abstract](https://github.com/mandeep-vratesh/learning/blob/master/README.md#abstract)
- [How to run this code](https://github.com/mandeep-vratesh/learning/blob/master/README.md#how-to-run-the-code)
- [Database structure](https://github.com/mandeep-vratesh/learning/blob/master/README.md#database-structure)
- [What you may add](https://github.com/mandeep-vratesh/learning/blob/master/README.md#what-you-may-add)
- [Ask questions](https://github.com/mandeep-vratesh/learning/blob/master/README.md#questionsdoubtssuggestions-raised_hand)

>Abstract
---

  The system basically takes an input expression (currently based on _Operator Precedence_ only) and gives a step by step guidance on solving the problems. It generates a sharable link that can be used by two different users to solve that problem simultaneously. It provides an AI assistant that generates hint based on the current situation.
  The system stores the previous solved problems by the user, accounting the time taken and hardness of the problem. Using this information the user may browse the problems.
  The system allows the users to add partners and may recommend and share problems with them.
  
>How to run the code
---

- [x] download and install node from [here](https://nodejs.org/en/)
- [x] go to the root directory of the cloned/downloaded project and run server.js
      `node server'
- [x] open any browser and open [localhost:3000](http://localhost:3000)

>Database structure
---

1. users
  - user_id
  - user_name
  - user_email
  - user_password
  - user_points
2. problems
  - problem_id
  - problem_title
  - problem_statement
  - problem_share_level
      * only_me_read-write
      * link_read
      * link_read-write
      * anyone
  - owner_id
  - users_involved
      * user_id 1
      * user_id 2
      * ...
  - problem_complexity
  
>What you may add
---

- [ ] a login screen.
- [ ] a parser program in javascript(or any other language) to check if the input expression is correct or not.
- [ ] a program that generates a text-hint based on the current expression in the input field.

>Questions/doubts/suggestions :raised_hand:
---

(add your question/doubt/suggestion by commiting this section or mail me at mandeep.vratesh@gmail.com)

1. Can you show a flow chart of the complete project for a better understanding ?
  - Sure, soon I'll update readme with a flowchart.
