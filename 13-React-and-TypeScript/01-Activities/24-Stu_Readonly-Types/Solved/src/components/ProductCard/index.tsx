import type Product from '../../utils/interfaces/Product';
import './style.css';

function ProductCard(props: Product) {
  return (
    <div className={`ProductCard ${props.quantity === 0 ? 'sold-out' : ''}`}>
      <h2>{props.productName}</h2>
      <p>{props.productDescription}</p>
      <h3>Price: ${props.price.toFixed(2)}</h3>
      {props.quantity ? <h3>{props.quantity} left!</h3> : <h3>Sold Out</h3>}
      {props.tags?.length ? <h3>Tags:</h3> : null}
      <div>
        {props.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      {props.quantity ? (
        <button
          onClick={() => (props.purchase ? props.purchase(props.id) : {})}
        >
          Buy Now
        </button>
      ) : (
        <button disabled>Sold Out</button>
      )}
    </div>
  );
}

export default ProductCard;
