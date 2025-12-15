export default function handler(req, res) {
  res.status(200).json({
    status: "HIDUP",
    time: new Date().toISOString()
  });
}
