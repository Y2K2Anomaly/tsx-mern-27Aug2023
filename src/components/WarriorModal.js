import React, { useEffect, useState } from 'react';
import { useGetHomeworldQuery, useGetSpecieQuery, useGetStarWarriorQuery } from '../services/starWarriorsApi';
import { useParams, useNavigate } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { CircularProgress, IconButton } from '@mui/material';
import moment from 'moment';
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';

const WarriorModal = () => {

    const { id } = useParams();
    const [page, setPage] = useState(id);
    const [warrior, setWarrior] = useState(null);
    const navigate = useNavigate();

    const { data, isError, isLoading, isSuccess } = useGetStarWarriorQuery(page);
    const { data: homeworld } = useGetHomeworldQuery(warrior?.homeworld);
    const { data: specieData } = useGetSpecieQuery(warrior?.species[0]);

    useEffect(() => {
        setWarrior(data)
    }, [data])

    const onLeftPageChange = () => {
        if (page > 1) {
            setPage(prev => +prev - 1);
            const newPage = +page - 1;
            navigate(`/people/${newPage}`);
        }
    };

    const onRightPageChange = () => {
        if (page < 83) {
            setPage(prev => +prev + 1)
            const newPage = +page + 1;
            navigate(`/people/${newPage}`);
        }
    };

    const getSpecieColorClass = (species) => {
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

            default: 'bg-[#000]',
        };
        return colorMap[species] || colorMap.default;
    };

    return (
        <>
            <div className={`flex sm:h-[73vh] ${(isLoading || isError) && "justify-center items-center h-96"}`}>

                {isLoading && !warrior &&
                    <div className='flex flex-col justify-center items-center'> <CircularProgress sx={{ fontSize: "36px" }} /> <span className='text-white block'>Loading...</span>
                    </div>
                }
                {isSuccess && warrior &&
                    <div className='mx-auto'>
                        <div className="warriorCard w-[80vw] sm:w-[80vw] sm:flex-row flex-col flex mt-8 mb-4 bg-[rgb(35,35,35)] text-white rounded-xl cursor-pointer shadow-xl">
                            <img className='sm:h-full sm:w-[300px] md:w-[400px] rounded-tl-xl rounded-tr-xl sm:rounded-tr-none sm:rounded-bl-xl object-fit' src={faker.image.avatar()} alt="" />

                            <div className='m-1'>
                                {specieData &&
                                    <div className='flex justify-start'>
                                        <p className={` text-white w-fit rounded-2xl text-left mt-2 ml-4 py-0 px-4 ${getSpecieColorClass(specieData.name)}`}>{specieData.name ? specieData.name : "Undefined"}</p>
                                    </div>
                                }
                                <h1 className='ml-4 mt-4 text-2xl text-left tracking-wide font-bold'>{warrior.name}</h1>
                                <div className='lg:flex lg:space-x-6'>
                                    <div className='mt-4 ml-4'>
                                        <div>
                                            <strong>height: </strong> <span>{warrior.height / 100}M</span>
                                        </div>
                                        <div>
                                            <strong>mass: </strong><span>{warrior.mass}kg</span>
                                        </div>
                                        <div>
                                            <strong>created at: </strong> <span>{moment(warrior.created).format('Do MMMM YYYY')}</span>
                                        </div>
                                        <div>
                                            <strong>no. of films: </strong> <span>{warrior.films.length}</span>
                                        </div>
                                        <div>
                                            <strong>date of birth: </strong> <span>{warrior.birth_year}</span>
                                        </div>
                                    </div>
                                    <div className='mt-2 ml-4'>
                                        <h1 className='font-bold text-lg'>homeworld Info:</h1>
                                        <div>
                                            <strong>name: </strong> <span>{homeworld?.name}</span>
                                        </div>
                                        <div>
                                            <strong>terrain: </strong><span>{homeworld?.terrain}</span>
                                        </div>
                                        <div>
                                            <strong>climate: </strong> <span>{homeworld?.climate}</span>
                                        </div>
                                        <div>
                                            <strong>no. of residents: </strong> <span>{homeworld?.residents?.length}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-fit mx-auto'>
                            <div className='flex w-32 justify-between'>
                                <IconButton onClick={onLeftPageChange} className='transform transition delay-200 duration-300 ease-in-out hover:scale-125'>
                                    <ArrowCircleLeft fontSize="large" sx={{ color: "white" }} />
                                </IconButton>
                                <IconButton onClick={onRightPageChange} className='transform transition delay-200 duration-300 ease-in-out hover:scale-125'>
                                    <ArrowCircleRight fontSize="large" sx={{ color: "white" }} />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                }
                {
                    isError && (
                        <div>
                            <h1 className='text-white'>Failed to fetch Data!</h1>
                            <div className='w-fit mx-auto'>
                                <div className='flex w-32 justify-between'>
                                    <IconButton onClick={onLeftPageChange} className='transform transition delay-200 duration-300 ease-in-out hover:scale-125'>
                                        <ArrowCircleLeft fontSize="large" sx={{ color: "white" }} />
                                    </IconButton>
                                    <IconButton onClick={onRightPageChange} className='transform transition delay-200 duration-300 ease-in-out hover:scale-125'>
                                        <ArrowCircleRight fontSize="large" sx={{ color: "white" }} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div >
        </>
    )
}

export default WarriorModal;