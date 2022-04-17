import React from 'react';
import axios from 'axios';

const url="https://disease.sh/v3/covid-19/countries";

export const fetchData= async ()=>{
    try {
        const {data}=await axios.get(url);
        const status={
            
        }
    } catch (error) {
        
    }
}