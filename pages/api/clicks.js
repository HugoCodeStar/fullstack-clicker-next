let clicks = { clicks: 0 };

export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    clicks.clicks++;
    console.log(req.body);
    res.json(clicks);
  } else {
    res.json(clicks);
    // Handle any other HTTP method
  }
}
