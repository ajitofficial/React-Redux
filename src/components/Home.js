import React from 'react';

function Home(props)
{
    console.warn("Home",props.data)
    return(
        <div>
            <h1>Home Component</h1>
            <div className="add-to-cart">
                <span className='cart-count'>
                    ({props.data.length})
                </span>
            <img src="https://image.shutterstock.com/shutterstock/photos/259703696/display_1500/stock-vector-shopping-cart-icon-flat-design-with-long-shadows-259703696.jpg" />
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG" />
                    {/* https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp */}
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
                    {/* <button>Add To Cart</button> */}
                    <button 
                    onClick={()=>
                        props.addToCartHandler({price:1000,name:'iphone 11'})
                    }>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;