import React from 'react';
import SingleFaq from '../shared/SingleFaq/SingleFaq';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is cors?',
      answer:
        'Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.',
    },
    {
      id: 2,
      question:
        'Why are you using firebase? What other options do you have to implement authentication?',
      answer:
        'Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Other than firebase we can use different auth services like okta, supabase etc. We can also create our own authentication system using our server and database like mongoDB.',
    },
    {
      id: 3,
      question: 'How does the private route work?',
      answer:
        'In the private route component If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If the user is authenticated (Logged in). First the private route checks if the user is authenticated if the authenticated user exists then it returns the children i.e the page component for that route if the authenticated user is not there then it redirects to the log in page asking the user to login to access that route.',
    },
    {
      id: 4,
      question: 'What is Node? How does Node work?',
      answer:
        'Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.',
    },
  ];

  return (
    <section className="px-2 py-5">
      <div className="container mx-auto">
        {faqs.map((faq) => (
          <SingleFaq key={faq.id} faq={faq}></SingleFaq>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
