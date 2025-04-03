export default function status(require, response) {
  response.status(200).json({
    chave: "funcionou?",
  });
}
