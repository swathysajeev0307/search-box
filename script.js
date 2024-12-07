/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const container = document.querySelector(".container");
const input = document.querySelector(".search");
const button = document.querySelector("#_button");
const searchIcon = document.querySelector(".fa-search");
const crossIcon = document.querySelector(".fa-times");

button.addEventListener("click", ()=>{

    container.classList.toggle("active");
    button.classList.toggle("active");

    if(container.classList.contains("active")){
        searchIcon.style.opacity = 0;
        crossIcon.style.opacity = 1;
    }else{
        searchIcon.style.opacity = 1;
        crossIcon.style.opacity = 0;
    }
});