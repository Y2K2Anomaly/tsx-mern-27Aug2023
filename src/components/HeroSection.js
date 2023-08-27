import React, { useEffect, useRef, useState } from 'react';
import { faker } from '@faker-js/faker';
import { useGetStarWarriorsQuery } from '../services/starWarriorsApi';
import { CircularProgress, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../services/authSlice';

const HeroSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [warriors, setWarriors] = useState([]);
    const [specieData, setSpecieData] = useState({});
    const [loading, setLoading] = useState(false);
    const { data, isError, isLoading } = useGetStarWarriorsQuery();
    const scrollRef = useRef();

    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            dispatch(clearAuth())
            localStorage.removeItem('user')
            navigate('/login')
        }, 15 * 60 * 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [dispatch, navigate]);


    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        setWarriors(data)
    }, [data])

    useEffect(() => {
        const fetchSpeciesData = async () => {
            const speciesData = {};

            for (const warrior of warriors.results) {
                if (warrior?.species?.length > 0) {
                    try {
                        setLoading(true);
                        const response = await axios.get(warrior.species[0]);
                        speciesData[warrior?.name] = response?.data?.name;
                        setLoading(false);
                    } catch (error) {
                        console.error('Error fetching species data:', error);
                    }
                }
            }

            setSpecieData(speciesData);
        };

        if (warriors?.results?.length > 0) {
            fetchSpeciesData();
        }
    }, [warriors]);

    const handleNextPage = () => {
        setPageNum(prev => prev + 1)

        const getNewData = async () => {

            try {
                setLoading(true);
                const res = await axios.get(warriors?.next)
                setWarriors(res.data)
                scrollRef.current?.scrollIntoView({ behavior: "smooth" })
                setLoading(false);
            } catch (err) {
                console.log(err)
            }
        }
        getNewData()
    };

    const handlePrevPage = () => {
        setPageNum(prev => prev - 1)

        const getNewData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(warriors?.previous)
                setWarriors(res.data)
                scrollRef.current?.scrollIntoView({ behavior: "smooth" })
                setLoading(false);
            } catch (err) {
                console.log(err)
            }
        }
        getNewData()
    };

    const getCardColorClass = (species) => {
        const colorMap = {
            Human: 'bg-orange-600',
            Droid: 'bg-pink-600',
            Wookie: 'bg-blue-600',
            Rodian: 'bg-green-600',
            Hutt: 'bg-violet-600',
            "Yoda's species": 'bg-purple-600',
            Trandoshan: 'bg-red-600',
            "Mon Calamari": 'bg-[##00008B]',
            Ewok: 'bg-[##0000EE]',
            Sullustan: 'bg-[#003EFF	]',
            Neimodian: 'bg-[#00611C]',
            Gungan: 'bg-[#00688B]',
            Toydarian: 'bg-[#008000]',
            Dug: 'bg-[#00C5CD]',
            "Twi'lek": 'bg-[#00CD00]',
            Aleena: 'bg-[#00EE76]',
            Vulptereen: 'bg-[##00FA9A]',
            Xexto: 'bg-[#00FF66]',
            Toong: 'bg-[#00FFCC	]',
            Cerean: 'bg-[#0147FA]',
            Nautolan: 'bg-[#05EDFF]',
            Zabrak: 'bg-[#0EBFE9]',
            Tholothian: 'bg-[#104E8B]',
            Iktotchi: 'bg-[#1464F3]',
            Quermian: 'bg-[#1DA237]',
            "Kel Dor": 'bg-[#20B2AA]',
            Chagrian: 'bg-[#236B8E]',
            Geonosian: 'bg-[#36DBCA]',
            Mirialan: 'bg-[#3A5894]',
            Besalisk: 'bg-[#3B6AA0]',
            Kaminoan: 'bg-[#3D5B43]',
            Skakoan: 'bg-[#3E7A5E]',
            Muun: 'bg-[#4169E1]',
            Togruta: 'bg-[#43CD80]',
            Kaleesh: 'bg-[#473C8B]',
            "Pau'an": 'bg-[#4A7771]',

            default: 'bg-[#232323]',
        };
        return colorMap[species] || colorMap.default;
    };

    const getSpecieColorClass = (species) => {
        const colorMap = {
            Human: 'bg-orange-300',
            Droid: 'bg-pink-300',
            Wookie: 'bg-blue-300',
            Rodian: 'bg-green-300',
            Hutt: 'bg-violet-300',
            "Yoda's species": 'bg-purple-300',
            Trandoshan: 'bg-red-300',
            "Mon Calamari": 'bg-[##0000A1]',
            Ewok: 'bg-[##0000B2]',
            Sullustan: 'bg-[#003EC3]',
            Neimodian: 'bg-[#0061D4]',
            Gungan: 'bg-[#0AD6]',
            Toydarian: 'bg-[#0080F6]',
            Dug: 'bg-[#00C5C7]',
            "Twi'lek": 'bg-[#00CDA1]',
            Aleena: 'bg-[#00EEB2]',
            Vulptereen: 'bg-[##00FAC3]',
            Xexto: 'bg-[#00FFD4]',
            Toong: 'bg-[#00FFCE]',
            Cerean: 'bg-[#0147E5]',
            Nautolan: 'bg-[#05EDA1]',
            Zabrak: 'bg-[#0EBFA2]',
            Tholothian: 'bg-[#104EA3]',
            Iktotchi: 'bg-[#1464A5]',
            Quermian: 'bg-[#1DA2A6]',
            "Kel Dor": 'bg-[#20B2A7]',
            Chagrian: 'bg-[#236BA8]',
            Geonosian: 'bg-[#36DBA9]',
            Mirialan: 'bg-[#3A58A1]',
            Besalisk: 'bg-[#3B6AA2]',
            Kaminoan: 'bg-[#3D5B46]',
            Skakoan: 'bg-[#3E7A52]',
            Muun: 'bg-[#4169E6]',
            Togruta: 'bg-[#43CD86]',
            Kaleesh: 'bg-[#473C8F]',
            "Pau'an": 'bg-[#4A77A6]',

            default: 'bg-[#000]',
        };
        return colorMap[species] || colorMap.default;
    };

    const [searchInput, setSearchInput] = useState('');

    const filteredWarriors = warriors?.results?.filter(warrior =>
        warrior.name.toLowerCase().includes(searchInput.toLowerCase())
    );


    return (
        <>
            <div className="SearchInput w-90vw flex items-center py-2 px-4">
                <div className="flex w-full mx-auto px-6 py-2 bg-[#333] rounded-md items-center relative" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 absolute left-2 top-4 hover:text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input type="text" className="px-4 tracking-widest w-full py-2 bg-[#333] rounded-md outline-none text-white" placeholder="SEARCH" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                </div>
            </div>
            <div ref={scrollRef}>
                <div className="title-text py-4 bg-[#0d0d0d] h-12">
                    <a href="https://www.hotstar.com/in/explore?search_query=STAR-WARS" target="_blank" rel="noopener noreferrer">
                        <span className="text-white block sm:hidden text-center font-bold hover:text-orange-400 transition delay-125 duration-150 ease-out tracking-wide" >
                            STREAM STAR WARS ON DISNEY+
                        </span>
                        <span className="text-white hidden sm:block text-center font-bold hover:text-orange-400 transition delay-125 duration-150 ease-out tracking-wide">
                            ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+
                        </span>
                    </a>
                </div>
                <section className='warriors mx-auto w-[90%] mt-6'>
                    <div className='mb-2'>
                        <h1 className='text-white font-semibold tracking-widest text-2xl'>All Characters</h1>
                        <span className='block h-1 w-full bg-gray-500'></span>
                    </div>
                    <div className={`flex flex-wrap mx-auto w-[86%] sm:w-full ${(isLoading || isError) && "justify-center items-center"}`}>

                        {isLoading ?
                            <div className={`flex flex-col justify-center items-center ${(isLoading || isError) && "h-96"}`}> <CircularProgress sx={{ fontSize: "36px" }} /> <span className='text-white block'>Loading...</span>
                            </div> :
                            filteredWarriors?.map((warrior, index) => (
                                <Link to={"/people/" + warrior.url.match(/\/(\d+)\/$/)[1]} key={index} >
                                    <div className={`warriorCard h-96 mt-4 mb-4 sm:mr-10 rounded-xl cursor-pointer transform transition duration-500 hover:scale-110 ${getCardColorClass(specieData[warrior.name])}`}>
                                        <img className='h-72 rounded-t-xl' src={faker.image.avatar()} alt="" />
                                        <h1
                                            className='text-white text-center mt-8 text-xl font-bold'>
                                            {warrior.name}
                                        </h1>
                                        {
                                            loading ? <div className='w-fit rounded-2xl mx-auto text-center mt-2 px-0 shadow-lg shadow-cyan-100/50'>
                                                <LinearProgress style={{ height: '8px', width: '80px', borderRadius: "25px", color: "white" }} />
                                            </div> : <p className={`text-white w-fit rounded-2xl mx-auto text-center mt-2 px-4 py-0 ${getSpecieColorClass(specieData[warrior.name])}`}>{specieData[warrior.name] ? specieData[warrior.name] : "Undefined"}</p>
                                        }
                                    </div>
                                </Link>
                            ))
                        }

                        {
                            isError &&
                            <h1 className='text-white'>Failed to fetch Data!</h1>
                        }

                    </div>
                </section >
                {
                    !isError &&
                    <div className="prev-next-buttons mx-auto text-white flex mt-2 w-60 justify-between items-center">
                        <button
                            disabled={!warriors?.previous}
                            className={`py-2 px-4 bg-blue-500 hover:bg-blue-600 w-16 rounded-md ${!warriors?.previous && "bg-[#d0b3b3] hover:bg-[#d0b3b3]"}`}
                            onClick={handlePrevPage}
                        >
                            PREV
                        </button>
                        <p>{loading ? <CircularProgress style={{ height: '24px', width: '24px' }} /> : pageNum + " of 9"}</p>
                        <button
                            disabled={!warriors?.next}
                            className={`py-2 px-4 bg-blue-500 hover:bg-blue-600 w-16 rounded-md ${!warriors?.next && "bg-[#d0b3b3] hover:bg-[#d0b3b3]"}`}
                            onClick={handleNextPage}
                        >
                            NEXT
                        </button>
                    </div>
                }
            </div >
        </>
    )
}

export default HeroSection