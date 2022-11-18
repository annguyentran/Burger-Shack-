// They image of the burger along with title, description, price  


const BurgerCard = ({ burger }) => {
    return (
      <div className="container">
        <Link href={`/product/${burger._id}`} passHref>
          <Image src={burger.img} alt="burger" width="300" height="300" />
        </Link>
        <h1 className="title">{burger.title}</h1>
        <span className="price">${burger.price}</span>
        <p className="description">{burger.description}</p>
      </div>
    );
  };
  
  export default BurgerCard;