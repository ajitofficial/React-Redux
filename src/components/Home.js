import React from 'react';
function Home()
{
    return(
        <div>
            <h1>Home Component</h1>
            <div className="add-to-cart">
            <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-illustration-1726574749.jpg" />
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Cat
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;