import React, { useEffect, useState } from 'react'
import General from '../../Layout/General'
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import { Link, useHistory } from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { useStateValue } from '../../StateContext/StateProvider';
import { Grid } from '@material-ui/core'
import axios from 'axios';
import { apiUrl } from '../../API/apiUrl';
import { fileUrl } from '../../API/fileUrl';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Home() {

    const [products, setProducts] = useState()

    const getProducts = () => {
        axios.get(`${apiUrl}/products/all`, {
            headers: {
                'Authorization': localStorage.getItem('zomtoken'),
            },
        }).then(res => {
            setProducts(res.data.products)
        });
    }

    useEffect(() => {
        getProducts()
    }, [])

    console.log(products)

    return (
        <General>
            <div className="home flex flex-col items-center">
                <div className="items-center md:full bg-gradient-to-b w-full mb-24 "  >
                    <div className="bg-opacity-75 justify-between flex flex-col p-8 md:flex-row" style={{
                        // backgroundImage: `url(${background})`,
                        // backgroundSize: "100%",
                        // backgroundRepeat: "no-repeat",
                        // minHeight: "100vh"
                    }}>
                        <div className="left py-8 flex flex-col md:px-60">
                            <p className="md:text-5xl text-4xl text-gray-800 w-full font-semibold">Find the perfect location for your essentials</p>
                            <p className="mt-8 w-2/3 text-gray-600 font-semibold w-full md:text-3xl text-2xl mb-1">Create Your Future, We Sell</p>
                            <p className="w-2/3 text-gray-600 w-full mb-3">Create your own online store where you can manage your stock, sell and manage customers. Just register, login and go to the dashboard</p>
                            <div className="search__input flex flex-row mb-3">
                                <input type="text" className="md:p-4 p-2 border-2 border-gray-300 rounded w-60 mr-2" placeholder="What are you looking for?" />
                                <button className="text-white flex flex-row items-center text-sm bg-blue-700 rounded md:p-4 p-2">
                                    <p>Search</p>
                                    <LocationOnIcon />
                                </button>
                            </div>
                            <p className="text-gray-400">Popular: Food, Cellphones, Covid</p>
                            <div className="flex md:flex-row flex-col w-full justify-between px-8 md:w-1/2">
                                <div className="mr-8"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="below px-8 mb-8 flex flex-row w-full justify-between">
                {/* <p className="ml-2 text-red-400 mb-2">Start Shopping</p> */}
                <div className="left w-1/3 border-2 border-gray-300 p-4 rounded">
                    <p>Select Category</p>
                </div>
                <div className="right w-2/3">
                    <div className="flex flex-col p-4">
                        <span className="flex flex-row justify-between">
                            <p className="text-red-400 text-sm uppercase font-semibold">Start Shopping</p>
                            <Link to='/homeproducts' className="flex flex-row text-red-400 text-sm">
                                <p>View All</p>
                                <ArrowForwardOutlinedIcon fontSize="small" />
                            </Link>
                        </span>
                        <p className="text-xs capitalize text-gray-700">Stay safe</p>
                        <div className="mb-2"></div>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <Grid container justify='center' spacing={4}>
                                {products?.map(product => (
                                    <>
                                        {product.type === 'public' ? (
                                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                                <HomeProducts
                                                    key={`${product._id}`}
                                                    name={`${product.name}`}
                                                    picture={`${fileUrl}/${product.productPicture[0].img}`}
                                                    // picture={antobiotics}
                                                    category={`${product.category}`}
                                                    price={`${product.price}`}
                                                    discount={`${product.discountPrice}`}
                                                    description={`${product.description}`}
                                                    id={`${product._id}`}
                                                    owner={`${product.owner}`}
                                                />
                                            </Grid>
                                        ) : null}
                                    </>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </General>
    )
}

const HomeProducts = ({ id, name, picture, category, price, discount, description, owner }) => {

    // eslint-disable-next-line
    const [{ }, dispatch] = useStateValue()
    const history = useHistory()

    const addToBasket = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                name: name,
                description: description,
                price: price,
                picture: picture,
                owner: owner,
                discount: discount,
                category: category
            }
        })
    }

    const setDesc = (e) => {
        e.preventDefault()
        const desc = {
            id: id,
            name: name,
            description: description,
            price: price,
            picture: picture,
            owner: owner,
            discount: discount,
            category: category,
        }
        localStorage.setItem('desc', JSON.stringify(desc))
        history.push('/description')
    }

    return (

        <div>
            {/* <span className="flex flex-col cursor-pointer" onClick={setDesc}>
                <div className="poicture" style={{ width: '160px', height: '160px' }} className="flex self-center flex-col justify-center">
                    <img src={picture} alt="product__image" className="w-full self-center" />
                </div>
                <div className="mb-2"></div>
                <p className="text-sm text-gray-800 font-bold">{name}</p>
            </span>
            <span className="flex flex-row text-left">
                <p className="text-gray-500 text-sm">Cat:</p>
                <div className="mr-4"></div>
                <p className="text-gray-500 text-sm">{category}</p>
            </span>
            <span className="flex flex-row justify-between">
                <p className="text-gray-400">${price}</p>
                <p className="text-red-400 text-lg font-bold">${discount}</p>
            </span>
            <div className="mb-2"></div>
            <button onClick={addToBasket} className="p-1 text-white bg-blue-700 w-5/6 self-center rounded flex flex-row hover:bg-blue-500 items-center justify-around">
                <AddShoppingCartOutlinedIcon fontSize="small" />
                <p>Add To Cart</p>
            </button> */}


            <div className="rounded shadow p-2 mb-2">
                <span onClick={setDesc} className="image border-b border-gray-200 h-48">
                    <img src={picture} alt="product_image" />
                </span>
                {/* <p className="text-gray-500 text-sm mb-2">{product.description}</p> */}
                <div className="flex flex-row items-center mb-1 justify-between">
                    <p className="text-gray-700 text">{category}</p>
                    <p className="text-blue-700 font-semibold text">{price}</p>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-700 text">{name}</p>
                    <span className="cursor-pointer" onClick={addToBasket}>
                        <AddShoppingCartRoundedIcon className="text-red-500 cursor-pointer hover:text-red-700" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home
