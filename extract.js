const TEXT = `Once upon a time, a user with the email user@example.com signed up for a new service. They worked alongside firstname.lastname@company.co.uk, who managed IT support.
For documentation, they often referenced https://www.example.com and occasionally accessed http://subdomain.example.org/page for internal resources.
To reach customer service, users could call (123) 456-7890, or alternatively, they might use the formats 123-456-7890 or 123.456.7890, depending on their preference.
On the company blog, they used hashtags like #example and #ThisIsAHashtag to categorize content. The blog also featured images, like this one:
<img src="image.jpg" alt="description">
For layout, the developers often included structured HTML elements such as:
<p> This is a paragraph inside a div. </p>
<div class="example">
    <p> Another paragraph inside a div with a class. </p>
</div>
The formatting helped maintain a clean and organized structure for their web pages.`;

//Each of the data types are matched using different Regular Expressions, additionally, I have added basic error handling, to let the user know if there isn't a particular data type in the text provided.

//This is Regex for the extraction of emails:
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const email = TEXT.match(emailRegex);
if (email) {
    console.log("The emails in this text are:");
    email.forEach(email => console.log(email));
} else {
    console.log("No emails found.");
}

//This is a Regex for the extraction of URLs:
const urlRegex = /https?:\/\/[\w.-]+\.[\w.-]+[\/\w.-]*/g;
const url = TEXT.match(urlRegex);
if (url) {
    console.log("\nThe URLs in this text are:");
    url.forEach(url => console.log(url));
} else {
    console.log("No URL found.");
}

//This is a Regex for the extraction of phone numbers:
const phoneRegex = /\(?\d{3}\)?[-\.\s]?\d{3}[-\.\s]?\d{4}/g;
const phone = TEXT.match(phoneRegex);
if (phone) {
    console.log("\nThe phone numbers in this text are:");
    phone.forEach(phone => console.log(phone));
} else {
    console.log("No phone numbers found.");
}

//This is a Regex for the extraction of hashtags:
const hashRegex = /#\w+/g;
const hashtags = TEXT.match(hashRegex);
if (hashtags) {
    console.log("\nThe hashtags in this text are:");
    hashtags.forEach(hashtags => console.log(hashtags));
} else {
    console.log("No hashtags found.");
}

//This is a Regex for the extraction of HTML tags:
const htmlRegex = /<.+?>/g;
const html = TEXT.match(htmlRegex);
if (html) {
    console.log("\nThe HTML tags in this text are:");
    html.forEach(html => console.log(html));
} else {
    console.log("No HTML tags found.");
}