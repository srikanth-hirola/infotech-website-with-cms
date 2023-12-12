const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require("cloudinary");
const cors = require('cors');
const ConnectDatabase = require('./db_connection');

const app = express();
const PORT = process.env.PORT || 8000;

const adminRoutes = require('./routes/adminServer');
const frontEndRoutes = require('./routes/feServer');
const cookieParser = require('cookie-parser');

const allowedOrigins = [
  'http://localhost:3000',
];

ConnectDatabase();

if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env',
  });
}


app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowedOrigins array
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use(cookieParser());
app.use('/public', express.static('public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: true, limit: '500mb' }));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use('/', frontEndRoutes);
app.use('/admin', adminRoutes);

app.get('/res', (req, res) => {
  console.log("first")
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
