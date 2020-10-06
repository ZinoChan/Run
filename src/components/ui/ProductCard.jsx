import React, { useRef, useState } from 'react';
import ProductCardImg from './ProductCardImg';
import ProductCardColor from './ProductCardColor';
import ProductCardSize from './ProductCardSize';
import { toast } from 'react-toastify';

import { addToCart } from '../../actions/cartActions';
import { NavLink } from 'react-router-dom';

import {CART} from '../../constants/routes';
import { motion } from 'framer-motion';




export default function ProductCard({product, dispatch, cart}) {

    const imgRef = useRef();

    const [currentProduct, setCurrentProduct] = useState(product.availableColors[0]); 

    const [currentSize, setCurrentSize] = useState(product.availableSizes[0].id);

    const [currentColor, setCurrentColor] = useState(product.availableColors[0].id);

    const [currentImg, setCurrentImg] = useState(product.availableColors[0].imgs[0].id);

    const handleImgClick = (e, id) => {
        imgRef.current.src = e.target.src;
        setCurrentImg(id);
    }

    const handleColorClick = id => {
       let $product =  product.availableColors.find(color => color.id === id);
       setCurrentProduct($product);
       setCurrentImg($product.imgs[0].id);
       setCurrentColor(id);
    }

    const handleSizeClick = id => setCurrentSize(id);
    

    const handleAddClick = () => {
        const $size = product.availableSizes.find(i => i.id === currentSize);
        const $img = currentProduct.imgs[0].img;

        const item = {
            id: currentSize,
            title: product.title,
            price:  product.price,
            color: currentProduct.color,
            size: {size: $size.size, id: currentSize},
            img: $img,
            quantity: 1
        }
        dispatch(addToCart(item));
        toast.success("item added to cart !");
    }
   
    const inCart = cart.some(item => item.id === currentSize && item.size.id === currentSize);

    return (
       <>
            <div 
                className="product-card d-flex align-items-center"
            >
                <motion.div 
                    className="product-card-img w-50"
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: .3}}
                >
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
                    <img ref={imgRef} src={currentProduct.imgs[0].img} alt="shoe" className="main-img"/>
                </motion.div>
                <motion.div 
                    className="product-card-info w-50"
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: .3}}
                >
                    <div className="product-price">${product.price}</div>
                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <span>{product.collection} COLLECTION</span>
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
                               product.availableColors.map(color => (
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
                            <p className="mr-2">Sizes:</p>
                            {
                                product.availableSizes.map(s => (
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
                        <button 
                            className="btn btn-dark mb-2 mx-auto"
                            onClick={handleAddClick}
                            disabled={inCart}
                        >{inCart ? 'In Cart' : 'Add To Cart'}</button><br/>
                        {inCart ? 
                            <NavLink to={CART} className="text-dark" style={{fontSize: "1.5rem"}}>View in cart</NavLink>
                            :
                            <p  className="text-dark">Add To Whishlist</p>
                        }
                    </div>
                </motion.div>
                
           </div>
       </>
    )
}
