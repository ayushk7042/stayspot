import nodemailer from "nodemailer";

// Load env variables
const { EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVE, EMAIL_HOST, EMAIL_PORT } = process.env;

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST || "smtp.gmail.com",
  port: EMAIL_PORT ? parseInt(EMAIL_PORT) : 587,
  secure: EMAIL_PORT == 465, // true for 465, false for other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// ===== Subscribe Email =====
export const subscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: "Valid email is required" });
    }

    // Send email notification
    await transporter.sendMail({
      from: `"Feedtag Newsletter" <${EMAIL_USER}>`,
      to: EMAIL_RECEIVE,
      subject: "New Newsletter Subscription",
      text: `New user subscribed: ${email}`,
      html: `<p>New user subscribed: <strong>${email}</strong></p>`,
    });

    res.status(200).json({ message: "Subscribed successfully" });
  } catch (err) {
    console.error("Subscribe Error:", err);
    res.status(500).json({ message: "Failed to subscribe" });
  }
};

// ===== Contact Message =====
export const contactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Send email notification
    await transporter.sendMail({
      from: `"Feedtag Contact" <${EMAIL_USER}>`,
      to: EMAIL_RECEIVE,
      subject: `New Contact Message from ${name}`,
      text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("Contact Error:", err);
    res.status(500).json({ message: "Failed to send message" });
  }
};
