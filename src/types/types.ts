export interface ProductProps {
  id: number;
  category: string;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}
