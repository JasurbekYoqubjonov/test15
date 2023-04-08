const searchFilterEl=document.querySelector(".search")

searchFilterEl.search.addEventListener("input",()=>{
    const searchValue=searchFilterEl.search.value.toLowerCase()
    const cardsItem=document.querySelectorAll(".cards__item")
    const cardsTitles=document.querySelectorAll(".cards__title")
    cardsTitles.forEach((title,i)=>{
        if (title.textContent.toLowerCase().includes(searchValue)) {
            cardsItem[i].style.display="block"
        }else{
            cardsItem[i].style.display="none"
        }
    })
})

const searchSelect=document.querySelectorAll(".search__select-list li")
const searchSelectSpan=document.querySelector(".search__select span")

import { createCountries } from "./uptadeUi"
import request from "./request"

searchSelect.forEach((li)=>{
    li.addEventListener("click",()=>{
        searchSelectSpan.textContent=li.textContent 
        let filterAPI

        if (li.textContent=="All") {
            filterAPI="https://restcountries.com/v3.1/all"
        }else{
            filterAPI=`https://restcountries.com/v3.1/region/${li.textContent}`
        }
        request(filterAPI).then((data)=>{
            createCountries(data)
        }).catch((err)=>{
            alert(err.message)
        })
    })
})