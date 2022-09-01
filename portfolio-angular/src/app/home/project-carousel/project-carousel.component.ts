import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-carousel',
  templateUrl: './project-carousel.component.html',
  styleUrls: ['./project-carousel.component.scss'],
})
export class ProjectCarouselComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.modaleInit();
  }

  modaleInit() {
    const carousel = document.querySelector('#carouselDescription');
    const listDescription = carousel?.querySelectorAll(
      "div[data-target='#project_carouselDescription']"
    );
    $('#project_carousel').on('slide.bs.carousel', function (e: any) {
      if (listDescription != undefined) {
        listDescription.forEach((elt, i) => {
          elt.classList.remove('active');
        });
        listDescription[e.to].classList.add('active');
        setTimeout(() => {}, 5);
      }
    });
  }
}
