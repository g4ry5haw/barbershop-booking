const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

exports.stripePayment = async (req, res, next) => {
  console.log(process.env.STRIPE_SECRET_KEY);
  try {
    console.log("inside stripe payment 1");
    // const { name } = req.body;
    // if (!name) return res.status(400).json({ message: "Please enter a name" });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(10 * 100),
      currency: "gbp",
      payment_method_types: ["card"],
      //metadata: { name },
    });

    console.log("inside stripe payment 2");
    const clientSecret = paymentIntent.client_secret;
    res.status(200).json({ message: "Payment initiated", clientSecret });
  } catch (err) {
    next(err);
    //res.status(500).json({ message: "Internal server error" });
  }
};
