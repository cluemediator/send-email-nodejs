var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000;

var nodemailer = require('nodemailer');

// request handlers
app.get('/', async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-gmail-password'
    }
  });

  var mailOptions = {
    from: 'sender-address@gmail.com',
    to: 'receiver-address@gmail.com',
    subject: 'Email Subject',
    text: 'Write your text message here...',
    attachments: [{
      filename: myfile.txt,
      path: '/path/to/file.txt'
    }]
  };

  let response = await transporter.sendMail(mailOptions);

  res.send({ response });
});

app.listen(port, () => {
  console.log('Server started on: ' + port);
});