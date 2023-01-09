const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.stripePayment = async (req, res, next) => {
  try {
    // const { name } = req.body;
    // if (!name) return res.status(400).json({ message: "Please enter a name" });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(10 * 100),
      currency: "gbp",
      payment_method_types: ["card"],
      //metadata: { name },
    });
    const clientSecret = paymentIntent.client_secret;
    res.status(200).json({ message: "Payment initiated", clientSecret });
  } catch (err) {
    next(err);
    //res.status(500).json({ message: "Internal server error" });
  }
};
