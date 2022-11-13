# CustomAssure

## Inspiration
We were inspired to build CustomAssure at HackUTD 2022 (Whoosh!) Long customer service wait times are a pain point for consumers and a resource drain on companies, so we decided to create an application that would help customer service representatives better empathize with their customers and become more efficient at solving their problems. 

## What it does
CustomAssure performs sentiment analysis in real time on a support conversation between a company representative and a customer to promote empathy for the customer, as well as provide the employer with performance data. Using Natural Language Sentiment Analysis library, we analyzed every chat from the customer and provided a satisfaction score to the employee, allowing the employee to better understand the customer’s feelings as they converse.
After the issue is resolved, CustomAssure provides the employee with a graph displaying the customer’s feelings throughout the conversation. By displaying this data visually, the employee can better understand his/her own performance. Other company personnel can also evaluate the employee’s customer support performance.
To track an employee’s skills over time, CustomAssure also provides a long term graph that uses the average satisfaction score over time to evaluate customer satisfaction when interacting with the given employee. Aggregating data from many conversations provides management with a more accurate view of the employee’s performance.
We also included an emotion analyzer for employees to use when writing emails to help employees write emails and understand how customers would feel when receiving that email.

## How we built it
We used React.js for the front-end, along with several open-source js libraries, including plotly.js, react-chatbot, and Natural. Our back-end was built on Node.js.

## Challenges we ran into
One big challenge we ran into was performing sentiment analysis on each chat received from the customer. We struggled to send each string to the API and return it quickly. We solved this problem by creating a form field and sending the customer’s input directly for analysis. 
The chatbot feature was also a challenge for the team to implement. We ended up trying out a few chatbots before following a tutorial for an open-source React.js chatbot online, and writing a variety of simple language checking functions to provide an adequate response.

## Accomplishments that we're proud of
We successfully implemented multiple js libraries to make this project come to life! We were also able to perform sentiment analysis on chats in real time and provide a “satisfaction score” to the employee. We included dynamic graphs that displayed data about an employee’s performance in a visually appealing way, which was a rewarding feature to implement. Additionally, we created a chatbot to simulate customers’ responses to a customer service representative.

## What we learned
We learned a new tech stack of React.js and Node.js. We made our first chatbot, worked on dynamic graphs, and implemented natural language processing, generally improving our web development skills! We also got to know each other better as a team!

## What's next for CustomAssure
We have lots of ideas for CustomAssure! We want to expand to perform sentiment analysis on larger forms of text and create an extension for intra-company use. This code can be used in another app with social media posts - not just messages. We also want to expand to voice processing to help call center representatives better connect with their customers and to provide services to a greater variety of companies.
