export const Product = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>Price:${props.price}</p>
            <p>Price:${props.inStock ? "Yes" : "No"}</p>
            <p>Catergories:{props.categories.join(",")}</p>
        </div>
    );
};