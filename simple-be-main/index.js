const dotenv = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("./db.js");
const multer = require("multer");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
dotenv.config();

const corsOption = {
  origin: ["*"],
};
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get("/uploads", ));
app.use(express.static( path.join(__dirname, "./public")))

const uploadDir = "./public/uploads/";

// Ensure the upload directory exists or create it
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.get("/me", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.json({ user: null });

  const payload = jwt.verify(token, "secret");

  res.json({ user: payload });
});

app.post("/signup", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const user = await db.user.create({
      data: {
        first_name,
        last_name,
        email,
        password,
      },
    });

    const token = jwt.sign(user, "secret");

    res.json({ user, token });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.user.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!user)
      return res.status(400).json({ error: "incorrect email or password" });

    const token = jwt.sign(user, "secret");

    res.json({ user, token });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

app.get("/catagories", async (req, res) => {
  try {
    const catagories = await db.catagory.findMany();
    res.json({ catagories });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

app.get("/products", async (req, res) => {
  try {
    const cat = req.query["catagory"];

    let catagoryIds = [];

    if (Array.isArray(cat)) catagoryIds = cat;
    else if (typeof cat === "string") catagoryIds.push(cat);

    console.log(catagoryIds);

    const products = await db.product.findMany({
      where: {
        ProductCatagory: {
          some: {
            catagory_id: {
              in: catagoryIds.map((i) => +i),
            },
          },
        },
      },
    });
    res.json({ products });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

app.get("/search", async (req, res) => {
  const q = req.query["keyword"];
  const products = await db.product.findMany({
    where: {
      name: {
        contains: q?.toLowerCase(),
      },
    },
  });
  return res.json({ products });
});

app.post("/products/new", upload.single("image"), async (req, res) => {
  try {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const payload = jwt.verify(token, "secret");

    if (!payload) return res.status(401).json({ error: "Unauthorized" });

    const image = req.file;
    const { name, location, price, catagory } = req.body;

    console.log(image, name);

    const product = await db.product.create({
      data: {
        name,
        location,
        price: +price,
        image: `/uploads/${image.filename}`,
        user_id: payload.id,
        ProductCatagory: catagory
          ? {
              create: {
                catagory_id: +catagory,
              },
            }
          : undefined,
      },
    });

    res.json({ product });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const id = +req.params.id;

    const product = await db.product.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            first_name: true,
            last_name: true,
          },
        },
      },
    });

    res.json({ product });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

app.get("/ ", async (req, res) => {
  try {
    const catagories = await db.catagory.findMany();
    res.json({ catagories });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});