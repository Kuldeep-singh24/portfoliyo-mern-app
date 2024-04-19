const sendEmailController = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "Your messaage sent succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};
module.exports = { sendEmailController };
