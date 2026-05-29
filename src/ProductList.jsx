export const Product =() => {
const products =[{
     id: 1,
     name: "Laptop",
     price: 999,
    },
    {
    id:2,
    name:"Phone",
    price: 699,
    },
    {
    id:3,
    name:"Tablet",
    price:499,
    },
    {id: 4, name:"Watch",price:299},
    {id: 5, name:"Headphones",price:199},
];

 const productElements= products
      .filter((product) => {
        return product.price > 500;
      })
      .map((product) => {
         return (
            <div key={product.id}>
             <h3>{product.name}</h3>
             <p>Price:${product.price}</p>
            </div>
         );
      });

  return( <div>
   <h2>Our Products</h2>
   {products.map((product) => {
    return(
        <div>
        <h3>{products.name}</h3>
        <p>Price: ${products.price}</p>
        </div>
    );
   })}
</div> 
  );
};
