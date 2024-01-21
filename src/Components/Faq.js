import React from "react";
import Accordion from "../utils/Accordion";

const Faq = () => {
  return (
    <div className="py-36 px-48">
      <div className="text-center text-4xl underline font-bold text-orange-500">
        {" "}
        Frequently Asked Questions{" "}
      </div>
      <div className="p-4 my-4 bg-gray-100 rounded-lg">
        <Accordion
          title="How does Bite-Dash work?"
          answer="Bite-Dash is a food delivery service that connects you with a variety of restaurants and eateries in your area. To place an order, simply download our app or visit our website, select your location, choose a restaurant, browse their menu, and add items to your cart. Once you're ready, proceed to checkout, and our delivery team will bring your delicious meal right to your doorstep."
        />
        <Accordion
          title="What areas do you serve?"
          answer="We currently operate in [List of Cities or Regions]. However, we're continuously expanding, so keep an eye on our app or website for updates on new locations."
        />
        <Accordion
          title="Is there a minimum order amount?"
          answer="The minimum order amount may vary depending on the restaurant you choose. You can find this information on the restaurant's page when browsing our app or website."
        />
        <Accordion
          title="How long does delivery take?"
          answer="Delivery times vary based on factors such as your location, restaurant preparation times, and traffic conditions. On average, deliveries are completed within [Estimated Delivery Time]. You can track the status of your order in real-time using our app."
        />
        <Accordion
          title="What payment methods do you accept?"
          answer="We accept various payment methods, including credit and debit cards, digital wallets, and cash on delivery. Please check the app or website for the specific payment options available in your area."
        />
        <Accordion
          title="Can I modify or cancel my order?"
          answer="You can modify or cancel your order if the restaurant has not yet started preparing it. To do so, go to your order history in the app or website and follow the instructions provided. Keep in mind that once the restaurant begins preparing your food, modifications or cancellations may not be possible."
        />
        <Accordion
          title="What if there is an issue with my order?"
          answer="Your satisfaction is our priority. If you encounter any issues with your order, such as missing items or quality concerns, please contact our customer support team immediately. We'll work to resolve the problem promptly."
        />
        <Accordion
          title="Do you offer any discounts or loyalty programs?
          "
          answer="Yes, we frequently offer promotions, discounts, and loyalty programs to our customers. Keep an eye on our app, website, and social media channels for the latest deals and offers."
        />
        <Accordion
          title="How can I contact customer support?"
          answer="You can reach our customer support team via email at contact@bite-dash.com or through the 'Contact Us' section of our app and website. We're here to assist you with any questions or concerns you may have."
        />
        <Accordion
          title="C\How can I become a delivery partner for Bite-Dash?"
          answer="We're always looking for enthusiastic individuals to join our delivery team. To learn more about becoming a Bite-Dash delivery partner, please visit our 'Join Us' page on our website.se!"
        />
      </div>
    </div>
  );
};

export default Faq;
