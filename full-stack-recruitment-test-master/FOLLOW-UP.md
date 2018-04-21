# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

Moment.js (https://momentjs.com/), used for date/time calculation and formatting. Installed as a Node package.

Backpack Components:
* Pagination
* Icons (as a dependency for Pagination I had to install manually)

A minimal Sass functions/mixins library that I've built up myself over the last few years

### Q) What is the command to start the server?

`APIKEY=ss630745725358065467897349852985 npm run server`

---

# General:

### Q) How long, in hours, did you spend on the test?

Approximately 22 hours, spread over 7 evenings.

### Q) If you had more time, what further improvements or new features would you add?

The first thing I'd do would be to add snapshot-type rendering tests for each of the components, and then other unit tests for the other functionality in the app. I tried to write the component methods with this in mind.

The server-side data processor is very much geared towards to getting the required data (and no more than that) to the client app. I think there are certainly ways in which it could be made more elegant and universal.

On the client-side, the hamburger menu and filter/sort bar component are currently just placeholders, but I think I now have a clear idea about where the eventual functionality associated with this would go.

I've added a basic responsive layout beyond the mobile view specified, using the CSS Grid module. I'd want to refine this and add legacy browser fallbacks to make the front-end as robust as possible.

I didn't retrieve and use any data for the leg segments in each itinerary, apart from their number to calculate the number of stops. This was primarily because the design didn't require it, and I wanted to keep the amount of data required by the front-end to a minimum, not just fire everything over and let the front-end deal with it. But I can see how valuable stop/layover details would be, incorporated into the leg components, so I would want to extend these components to add them, in a broadly similar way to how the Legs relate to each Itinerary.

### Q) Which parts are you most proud of? And why?

Due to my relative inexperience with React (I haven't used it for any production-level projects), I think the thing I'm most proud of is the overall structure of the components in the client app. I think I've built something that is in keeping with React best practices and conventions, robust in its use and presentation of data, and hopefully easy to extend and develop in the future. To get to this result, the whole test has been a learning process that I'm very glad I did, regardless of the context.

### Q) Which parts did you spend the most time with? What did you find most difficult?

I spent quite a bit of time towards the end refactoring a lot of the components to improve their robustness regarding the props associated with them. I'd initially consolidated a lot of the data into single 'content' props, but then went back and divided this data into simpler, more explicit props, adding validation checks using PropTypes.

I didn't have the knowledge to see the benefit of this at the beginning, when my focus was on simply getting things working without compile and runtime errors, but I'm glad I didn't make any assumptions early on and gave myself time to investigate how to improve things that were already working (at least according to the terminal and dev tools)

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.

I found it a really interesting task. As I said previously, it was a continual learning process, but not one with too steep a curve. I was continually challenged, but never felt (too) overwhelmed. I think this is mainly due to the overall task being composed of smaller, self-contained pieces of work (client-side and server-side components, React and standard HTML/CSS work, etc.). It made for a real sense of progress as I got things done.
