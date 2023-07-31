/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import axios from 'axios'

import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Featured } from '../components/Featured Section/Featured'
import { Body } from "../components/Main Body/Body"
import { Alert } from "../components/Alert"
import {config} from "../config"

// Testing Data Handling
import {test_newsPosts, test_entertainmentNewsPosts, test_worldNewsPosts} from "../test_data"
import { useNavigate, useParams } from "react-router-dom";


const News = (props)=>{

    const navigate = useNavigate()


    const cleanData = (newsPosts)=>{
        const newData = newsPosts.map((item)=>{
            if(item.urlToImage === undefined || item.urlToImage === null || item.urlToImage.length === 0)
                item.urlToImage = "https://i.pinimg.com/736x/c5/aa/6a/c5aa6aae4adfd839589faf387f235132--hourglass-cover-photos.jpg"
            return item
        })
        return newData
    }

    const loopData = (data, setData) =>{
        let i = 0
        setInterval(() => {
            if(i+3 > data.length) i=0
            
            setData(data.slice(i, i+3))
            i = i+3
        }, 5000);
    }

    const showAlert = ()=>{
        setIsAlert(true)
        setTimeout(() => {
            setIsAlert(false)
        }, 5000);
    }

    async function get_news_feed(country='in', category=null, setData, isLoopData=false) {
        let url = ''
        if(category === undefined || category === null)
            url = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=" + config.API_KEY
        else
            url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=` + config.API_KEY
        
        
        let API_DATA = null
        axios
            .get(url)
            .then((response)=>{
                const {data} = response
                if(data?.status !== 'ok') throw new Error("Error in Response")
                
                API_DATA = data
            })
            .catch(err=>{
                console.log(err.toString())
                // API_DATA = []

                API_DATA = test_newsPosts
                if(country === 'us' && category === 'general') 
                    API_DATA = test_worldNewsPosts
                if(country === 'in' && category === 'entertainment') 
                    API_DATA = test_entertainmentNewsPosts
                
                showAlert()
            })
            .finally(()=>{
                const newsPosts_cleaned = cleanData(API_DATA.articles)
                console.log(newsPosts_cleaned)
                setData(newsPosts_cleaned)

                if(isLoopData)
                    loopData(newsPosts_cleaned, setData)
            })
    }

    async function get_query_feed(query, setData){
        let url = config.BASE_URL + "/everything?q=" + query + "&apiKey=" + config.API_KEY

        let API_DATA = null
        axios
            .get(url)
            .then((response)=>{
                const {data} = response
                if(data?.status !== 'ok') throw new Error("Error in Response")
                
                API_DATA = data
            })
            .catch(err=>{
                console.log(err.toString())
                // API_DATA = []  

                showAlert()
                navigate('/')
            })
            .finally(()=>{
                const newsPosts_cleaned = cleanData(API_DATA.articles)
                console.log(newsPosts_cleaned)
                setData(newsPosts_cleaned)
            })
    }

    const [newsPosts, setNewsPosts] = useState([])
    const [worldNewsPosts, setWorldNewsPosts] = useState([])
    const [entertainmentNewsPosts, setEntertainmentNewsPosts] = useState([])
    const [isAlert, setIsAlert] = useState(false)

    const {searchTag} = useParams()


    useEffect(()=>{
        const category = props.category
        console.log(category)

        if(category === "search"){
            console.log('hello', searchTag)
            get_query_feed(searchTag, setNewsPosts)
        }else{
            get_news_feed('in', category, setNewsPosts)
        }

    }, [props.category])

    useEffect(()=>{
        get_news_feed('in', 'entertainment', setEntertainmentNewsPosts, true)
        get_news_feed('us', 'general', setWorldNewsPosts, true)
    }, [])

    return (
        <>
            { isAlert && <Alert/> }
            <Header category={props.category}/>
            <main className="container">
                <Featured data={entertainmentNewsPosts.slice(0,3)}/>
                <Body data={newsPosts.slice(0,12)} worldNewsPosts={worldNewsPosts.slice(0,3)}/>
            </main>
            <Footer/>
        </>
    )
}

export {News}
