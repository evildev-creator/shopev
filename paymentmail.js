const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ionos.com",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: "support@strapsessions.com",
    pass: "1234Dietrich!"
  },

});

const send = ({
  firstName,
  LastName,
  address,
  city,
  state,
  zip,
  email,
  phone,
  products,
  payment,
}) => {
  const from =
    firstName && email ? `${firstName} <${email}>` : `${firstName || email}`;
  var loop = products.map((data, idx) => (
    `<tr key={idx}>
      <td className="product-name">
        <Link href="#">
          <a>${data.title}</a>
        </Link>
      </td>

      <td className="product-total">
        <span className="subtotal-amount">${data.price * data.quantity}</span>
      </td>
    </tr>`
  ));
  const message = {
    from,
    to: "support@strapsessions.com",
    subject: `New Payment Order Received from ${from}`,
    html: `<p>Name: ${firstName}  Last Name: ${LastName}</p>
    <p> Address: ${address} </p>
<p> City: ${city}<p/>
<p> State: ${state}<p/>
<p> Zip: ${zip}<p/>
<p> Phone: ${phone}</p>
    <p>Email: ${email}</p>
    <p>Order: ${loop}</p>
    <p> Payment Method: ${payment}`,

    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;
