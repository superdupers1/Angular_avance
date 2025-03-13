import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    
    // window.onload=function(){
      //Carousel
    
        const track = document.querySelector<HTMLElement>('.carousel__track');
        const items = document.querySelectorAll<HTMLElement>('.carousel__item');
        let currentIndex = 0;
        
        function moveCarousel() {
          track!.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        function nextSlide() {
          currentIndex = (currentIndex + 1) % items.length;
          moveCarousel();
        }
        
        setInterval(nextSlide, 3000);
    
    
      //Cards
      const cards = document.querySelectorAll('.card');
      const popup = document.getElementById('popup');
      const popupTitle = document.getElementById('popup-title');
      const popupDescription = document.getElementById('popup-description');
      const closeButton = document.querySelector('.close-button');
    
    
      cards.forEach(card => {
        const viewDetailsButton = card.querySelector('.view-details');
        viewDetailsButton!.addEventListener('click', () => {
          //debugger;
            const htmlCard = card as HTMLElement; // Type assertion
            const title = htmlCard.dataset['title'] || ''; // Default to empty string
            const description = htmlCard.dataset['description'] || '';
    
            popupTitle!.textContent = title;
            popupDescription!.textContent = description; 
            popup!.style.display = 'flex';
        });
      });
    
    
      closeButton!.addEventListener('click', () => {
          popup!.style.display = 'none';
      });
    
      window.addEventListener('click', (event) => {
          if (event.target === popup) {
              popup!.style.display = 'none';
          }
      });
    }  
  // }
}
