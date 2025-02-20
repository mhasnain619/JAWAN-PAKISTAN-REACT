import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Store/slices/ProductSlice";
import MediaCard from "./Card";

import CircularProgress from '@mui/material/CircularProgress';


const Header = () => {
    const dispatch = useDispatch();
    const { allProducts, isLoading, isError } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    console.log(allProducts);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
            {
                isLoading ? (
                    <CircularProgress />
                ) : isError ? (
                    <p>Error...</p>
                )
                    :
                    allProducts.map((e, i) => (
                        <MediaCard key={i} title={e.title} imgSrc={e.image} disc={e.description} product={e} />
                    )
                    )
            }

        </div>
    );
};

export default Header;
