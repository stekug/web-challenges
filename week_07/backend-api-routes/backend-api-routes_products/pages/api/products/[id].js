import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  
  if (request.method === "GET") {
    response.status(200).json(getProductById(id));
  } else {
    response.status(405).json({ message: "Not Allowed" });
  }
}
