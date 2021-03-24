import React, { useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout'
import RemoveIcon from '@material-ui/icons/Remove';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import beauty from '../Images/beauty.jpg'
import userT from '../Images/IMG_5117_1_1.jpg'
import smallB from '../Images/smallBanner.jpg'
import FavoriteIcon from '@material-ui/icons/Favorite';
import tatenda from '../Images/tatenda.jpg'
import coding from '../Images/coding.jpg'
import { useHistory } from 'react-router';

const services = [
    {
        itempicture: { beauty },
        propic: { userT },
        category: 'beauty',
        businessname: 'Skin & Healthcare routine',
        rating: '4.5',
        verified: 'false',
        saved: 'false',
        id: '2',
        bgColor: 'bg-yellow-200',
        tags: new Array("Beauty", "health", "food", 'fitness'),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quidem modi. A voluptatem quis iusto dignissimos repudiandae pariatur, eligendi tempore unde nobis animi fuga, alias temporibus autem praesentium excepturi dolore."

    },
    {
        itempicture: { coding },
        propic: { tatenda },
        category: 'software',
        businessname: 'Claimant development organisation',
        rating: '4.9',
        verified: 'true',
        saved: 'true',
        id: '3',
        bgColor: 'bg-blue-200',
        tags: new Array("software", "codind", "websites", 'computers'),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quidem modi. A voluptatem quis iusto dignissimos repudiandae pariatur, eligendi tempore unde nobis animi fuga, alias temporibus autem praesentium excepturi dolore."


    }

]

function Home() {
    const [checked, setChecked] = useState(true);
    const [range, setRange] = useState('')

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <GeneralLayout>
            <div className="div mt-8 md:mx-36 mx-4 mb-8">
                <div className="flex md:flex-row flex-col items-center mb-10">
                    <div className="left">
                        <div className="left py-8 flex flex-col">
                            <p className="md:text-5xl text-4xl text-gray-800 w-full font-semibold">Find the perfect location for your essentials</p>
                            <p className="md:w-2/3 text-gray-600 w-full mb-3">View Professionals in your local area for free</p>
                            <div className="search__input flex flex-row mb-3">
                                <input type="text" className="md:p-2 p-2 border-2 border-gray-300 rounded w-60 mr-2" placeholder="What are you looking for?" />
                                <button className="text-white flex flex-row items-center text-sm bg-blue-900 rounded md:p-2 p-2">
                                    <p>Search</p>
                                    <LocationOnIcon />
                                </button>
                            </div>
                            <p className="text-gray-400 text-xs">Popular: Mechanic, Health, Software</p>
                            <div className="flex md:flex-row flex-col w-full justify-between px-8 md:w-1/2">
                                <div className="mr-8"></div>
                            </div>
                        </div>
                    </div>
                    <div className="right h-60 w-60 bg-blue-200 rounded flex flex-row items-center" style={{
                        backgroundImage: `url(${smallB})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        <span className="text-white border-l-8 border-yellow-300 bg-green-400 p-2 text-2xl">WeLink</span>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col">
                    <div className="w-1/4 border border-gray-300 rounded-sm p-3 pr-4 md:flex hidden flex-col h-80">
                        <span className="flex flex-row items-center mb-4">
                            <RemoveIcon fontSize="small" />
                            <p className="text-blue-900 font-semibold">Select Categories</p>
                            <div className="flex-1 "></div>
                            <ExpandMoreIcon fontSize="small" />
                        </span>
                        <CheckItem text="Home Improvement" />
                        <CheckItem text="UI & Graphic Design" />
                        <CheckItem text="Software Development" />
                        <CheckItem text="Vehicle services" />
                        <CheckItem text="Photography" />
                        <div className="text mt-2">
                            <p className="text-blue-500 p-3">See All</p>
                        </div>
                    </div>
                    <div className="md:w-3/4 w-full pl-8">
                        <div className="top flex mb-4 flex-row items-center">
                            <p className="font-semibold text-xl text-blue-900">100 Results</p>
                            <div className="flex-1"></div>
                            <p className="text-sm text-blue-900 font-semibold">Sort By: </p>
                            <select
                                defaultValue=""
                                onChange={e => setRange(e.target.value)}
                                id="bidder"
                                className="border border-gray-300 p-1 rounded-sm outline-none ml-2">
                                <option disabled={true} value="">Select Price Range</option>
                                <option value="descending">High To Low</option>
                                <option value="ascending">Low To High</option>
                                <option value="mixed">Mix ranges</option>
                            </select>
                        </div>
                        <div className="items flex flex-row flex-wrap justify-around">
                            <ServiceItem
                                itempicture={coding}
                                propic={tatenda}
                                category='software'
                                businessname='Claimant development organisation'
                                rating='4.9'
                                verified='true'
                                saved='true'
                                id='1'
                                tags={new Array("software", "coding", "computers", 'websites')}
                                bgColor='bg-blue-200'
                                description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quidem modi. A voluptatem quis iusto dignissimos repudiandae pariatur, eligendi tempore unde nobis animi fuga, alias temporibus autem praesentium excepturi dolore.'
                            />
                            {services.map(service => (
                                <ServiceItem
                                    itempicture={service.itempicture}
                                    propic={service.propic}
                                    category={service.category}
                                    businessname={service.businessname}
                                    rating={service.rating}
                                    verified={service.verified}
                                    saved={service.saved}
                                    id='2'
                                    tags={service.tags}
                                    bgColor={service.bgColor}
                                    description={service.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    )
}

const CheckItem = ({ text }) => {
    const [checked, setChecked] = React.useState(true)
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div className="home flex flex-row items-center text-gray-500 text-sm">
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                            color="primary"
                        />
                    }
                    label={text}
                />
            </FormGroup>
        </div>
    )
}

const ServiceItem = ({ itempicture, propic, category, businessname, rating, verified, saved, bgColor, tags, id, description }) => {

    const history = useHistory()

    const setDesc = (e) => {
        e.preventDefault()
        const desc = {
          id: id,
          itempicture: itempicture,
          description: description,
          category: category,
          businessname: businessname,
          rating: rating,
          verified: saved,
          bgColor: bgColor,
          tags: tags,
          id: id,
        }
        localStorage.setItem('welinkdesc', JSON.stringify(desc))
        history.push('/description')
      }
    

    return (
        <div className="items flex mb-4 flex-col border border-gray-200 rounded w-64 overflow-hidden hover:shadow-lg hover:border-none cursor-pointer">
            <span onClick={setDesc} className="image h-40 w-full bg-blue-200">
                <img src={itempicture} alt="category" />
            </span>
            <div className="flex flex-col p-4">
                <div className="category flex flex-row items-center mb-2 mt-2">
                    <div className="propic bg-blue-200 overflow-hidden p-2 rounded-full w-10 h-10 flex flex-row items-center text-center" style={{
                        backgroundImage: `url(${propic})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        {/* <img src={userT} alt="user" className="w-24"/> */}
                    </div>
                    <div className={`cat ${bgColor} rounded-sm m-1 flex flex-row items-center`}>
                        <p className="text-sm text-gray-700 px-2">{category}</p>
                    </div>
                </div>
                <div className="service">
                    <p className="text-blue-900 text-sm font-semibold">{businessname}</p>
                </div>
                <div className="ratingselller flex flex-row items-center justify-between mb-4">
                    <div className="rating flex flex-row items-center">
                        <StarRateIcon fontSize="small" className="text-yellow-500" />
                        <p className="text-xs" >{rating}</p>
                    </div>
                    {verified === "true" ? (<div className="saved flex flex-row items-center text-blue-600">
                        <ThumbUpIcon fontSize="small" />
                        <p className="text-xs">Verified</p>
                    </div>) : null}
                    {saved === 'true' ? (<div className="saved flex flex-row items-center text-pink-600">
                        <FavoriteIcon fontSize="small" />
                        <p className="text-xs">Saved</p>
                    </div>) : (<div className="saved flex flex-row items-center text-gray-600">
                        <FavoriteBorderIcon fontSize="small" />
                        <p className="text-xs">Save</p>
                    </div>)}
                </div>
                {/* related categories */}
                <p className="text-blue-900 text-xs font-semibold mb-1">Tags:</p>
                <div className="relatedcategories flex-wrap flex flex-row">
                    {tags?.map(tag => (
                        <ItemCategory realatedcatefory={tag} />
                    ))}

                    {/* <ItemCategory realatedcatefory="Fitmess" />
                    <ItemCategory realatedcatefory="Food" />
                    <ItemCategory realatedcatefory="Beauty Care" /> */}
                </div>
            </div>
        </div>
    )
}

const ItemCategory = ({ realatedcatefory }) => {
    return (
        <div className="similarcats bg-gray-100 rounded px-2 py-1 mx-2 my-1">
            <p className="text-xs text-gray-700 font-semibold">{realatedcatefory}</p>
        </div>
    )
}

export default Home
