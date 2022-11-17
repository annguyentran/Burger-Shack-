// a list of burger using .map() method

const BurgerList = ({ burgerlist }) => {
    return (
      <div className="container">
        <h1 className="title">THE BEST BURGER YOU CAN GET</h1>
        <p className="description">
        Give your kitchen the night off. We're here for you with bomb burgers,  fries, and more 🍔🍟. Welcome to  Burger Shack, home of the Good Burger 😉.
        </p>
        <div className="wrapper">
          {burgerlist.map((burger) => (
            <BurgerCard key={burger._id} burger={burger} />
          ))}
        </div>
      </div>
    );
  };
  
  export default BurgerList;
  