import React, { useRef, useState } from 'react';
import nike1 from '../../assets/nike2.jpg'
import nike2 from '../../assets/nike3.jpg'
import nike3 from '../../assets/nike4.jpg'
import nike4 from '../../assets/nike7.jpg';
import shoe1 from '../../assets/shoe1.jpg'
import shoe2 from '../../assets/shoe2.jpg'
import shoe3 from '../../assets/shoe3.jpg'
import shoe4 from '../../assets/shoe4.jpg';
import ProductCardImg from './ProductCardImg';
import ProductCardColor from './ProductCardColor';
import ProductCardSize from './ProductCardSize';



export default function ProductCard() {

    const db = 
        {
            id: "jhqsddz",
            title: "nike explosive",
            price: 99.99,
            collection: "Women",
            colors: [
                {id: "hgdhsgd", color: '#ddd', imgs: [{id: "hsg", img: nike4}, {id: "hfg", img:nike2}, {id: "hsh", img:nike3}, {id: "hvg", img:nike1}]},
                {id: "hgdhsdd",  color: '#000', imgs: [{id: "husg", img: shoe2}, {id: "hfvg", img:shoe1}, {id: "hvvh", img:shoe3}, {id: "hxxvg", img:shoe4}]},
              
            ],
            sizes: [{id: "kki", size: 39}, {id: "kli", size: 36}, {id: "lki", size: 45}, {id: "ski", size: 40}]
        }
    

    const [currentProduct, setCurrentProduct] = useState(db.colors[0]); 

    const imgRef = useRef();
    
    const [currentSize, setCurrentSize] = useState(db.sizes[0].id);

    const [currentColor, setCurrentColor] = useState(db.colors[0].id);

    const [currentImg, setCurrentImg] = useState(db.colors[0].imgs[0].id);

    const handleImgClick = (e, id) => {
        imgRef.current.src = e.target.src;
        setCurrentImg(id);
    }

    const handleColorClick = id => {
       let product =  db.colors.find(color => color.id === id);
       setCurrentProduct(product);
       setCurrentImg(product.imgs[0].id);
       setCurrentColor(id);
    }

    const handleSizeClick = id => setCurrentSize(id);
    


   

    return (
       <div className="d-flex align-items-center justify-content-center vh-100" style={{backgroundColor: "#ddd"}}>
           <div className="product-card w-75 h-75 d-flex">
                <div className="product-card-img w-50">
                    <div className="sub-imgs">
                        {
                            currentProduct.imgs.map(img => (
                                <ProductCardImg 
                                    key={img.id}
                                    id={img.id} 
                                    src={img.img}
                                    active={currentImg === img.id ? true : false}
                                    handleImgClick={handleImgClick}
                                />
                            ))
                        }
                    </div>
                    <img ref={imgRef} src={currentProduct.imgs[0].img} alt="shoe" className="current-img"/>
                </div>
                <div className="product-card-info w-50">
                    <div className="product-price">$99.99</div>
                    <div className="product-info">
                        <h2>Nike EXplosive Collection</h2>
                        <span>WOMEN COLLECTION</span>
                        <h4>Product Info:</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            enim nemo veritatis aliquid
                            eligendi quisquam vero? Esse, aliquid culpa.
                        </p>
                    </div>
                    <div className="product-card-custom">
                        <div className="product-colors d-flex align-items-center">
                            <p>Colors:</p>
                           {
                               db.colors.map(color => (
                                    <ProductCardColor 
                                        key={color.id}
                                        id={color.id} 
                                        color={color.color}
                                        active={currentColor === color.id ? true : false}
                                        handleColorClick={handleColorClick}
                                    />
                               ))
                           }
                        </div>
                        <div className="product-sizes d-flex align-items-center">
                            <p>Sizes:</p>
                            {
                                db.sizes.map(s => (
                                    <ProductCardSize 
                                        key={s.id} 
                                        id={s.id} 
                                        size={s.size} 
                                        handleSizeClick={handleSizeClick}
                                        active={s.id === currentSize ? true : false}     
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-dark w-50 mb-2 mx-auto">ADD TO CART</button>
                        <p>Add To Whishlist</p>
                    </div>
                </div>
                
           </div>
       </div>
    )
}
