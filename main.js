import {date, currentDate} from './date.js'

const spanFilters = document.querySelectorAll('#filter > span');
const imgNatures = document.querySelectorAll('.nature');
const imgVilles = document.querySelectorAll('.ville');
const villeFilter = document.querySelector('[data-filter="ville"]');
const natureFilter = document.querySelector('[data-filter="nature"]');
const tousFilter = document.querySelector('[data-filter="tous"]');
const arrayFilter = [villeFilter, natureFilter, tousFilter];

const setActive = (clickedFilter) => {
    arrayFilter.forEach((filter) => {
        clickedFilter.classList.add('active');
        filter.classList.remove('active');
    })
    
}

spanFilters.forEach((span) => {
    span.addEventListener('click', (e) => {
        const filter = e.currentTarget.getAttribute('data-filter');
        if (filter === "nature") {
            imgVilles.forEach((ville) => {
                ville.classList.add('hidden');
            });
            imgNatures.forEach((nature) => {
                nature.classList.remove('hidden');
            });
            setActive(natureFilter)
        }
        else if (filter === "ville") {
            imgNatures.forEach((nature) => {
                nature.classList.add('hidden');
            });
            imgVilles.forEach((ville) => {
                ville.classList.remove('hidden');
            });
            setActive(villeFilter)
        }
        else {
            imgNatures.forEach((nature) => {
                nature.classList.remove('hidden');
            });
             imgVilles.forEach((ville) => {
                ville.classList.remove('hidden');
            });
            setActive(tousFilter);
            tousFilter.classList.add('active');
        }
    })
})