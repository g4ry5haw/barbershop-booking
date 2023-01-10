require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const stripe = require("stripe")(
// "sk_test_51MONz8CFOrrE3Bzl2zubXXLO6KxMAFkHhZpZJLXy5Ved3afRi7zfJYNOPF6E8TLh5FlAkKlWKd4BK2U2zmJ6tMjH00CuIdwoYA"
// );

exports.stripePayment = async (req, res, next) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(10 * 100),
      currency: "gbp",
      payment_method_types: ["card"],
    });
    const clientSecret = paymentIntent.client_secret;
    res.status(200).json({ message: "Payment initiated", clientSecret });
  } catch (err) {
    next(err);
  }
};
