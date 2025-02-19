import axios from "axios";

export const predictSales = async (sales) => {
  const data = await axios.post("http://127.0.0.1:5000/predict", {
    last_month_sales: sales,
  });
  return data.data["next_month_sales"];
};
