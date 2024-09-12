import React from 'react';
import Card from './Card';
import OIP from './images/OIP.jpg';
import OIP1 from './images/OIP1.jpg';
import OIP2 from './images/OIP 2.jpg';

function App() {
  const books = [
    {
      title: "The Great Adventure",
      features: ["Exciting", "Thrilling", "Mysterious"],
      image: OIP, 
    },
    {
      title: "Journey to the Unknown",
      features: ["Adventurous", "Eye-opening", "Inspirational"],
      image: OIP1,  
    },
    {
      title: "Mystery of the Night",
      features: ["Suspense", "Intrigue", "Drama"],
      image: OIP2,
    },
  ];
  

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Book Collection</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {books.map((book, index) => (
          <Card key={index} title={book.title} features={book.features} image={book.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
