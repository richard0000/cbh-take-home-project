# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

---
---

# Epic: In reports, replace the id of an agent with a new attribute called code

---

## Ticket #1
### **Add a new attribute called "code" to the Agents table**

#### Acceptance Criteria
- The `Agents` table should now include a column named "code" of type string.
- A migration file should be included with the definition of the new column.

#### Time Estimate
- 4h

#### Implementation Details
- Be sure to include a migration file.
- Propose a solution to generate the code for existing agents.

---

## Ticket #2
### **Add the new "code" attribute to the Agent model and all references in code**

#### Acceptance Criteria
- As an admin user, I should be able to create an agent assigning a code to it.
- As an admin user, I should be able to edit a user's code and assign it if don't exists.
- As an admin user, I should be able to see an agent's code in the list of agents.

#### Time Estimate
- 8h

#### Implementation Details
- Be sure to add the new attribute in the creation of the user, as well as the update.
- Show the new code attribute in the list of agents.
- Show the new attribute as an input in creation form and send it in the save request.
- Show the new attribute as an input in update form and send it in the save request.

---

## Ticket #3
### **Read the new "code" attribute of Agents in the reports**

#### Acceptance Criteria
- As an admin user, when generating a report, I should see the "code" of each agent, instead of its id.

#### Time Estimate
- 8h

#### Implementation Details
- Modify the `getShiftsByFacility` function to include the code of each agent assigned to a shift.
- Modify the `generateReport` function to draw the new "code" column for each agent.