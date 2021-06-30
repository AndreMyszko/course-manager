import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
      id: 1,
      name: 'Angular: Animations',
      imageUrl: 'assets/images/animations.png',
      price: 0.99,
      code: 'ABC-321',
      duration: 120,
      rating:4.9,
      releaseDate: '01/01/2021'
    },
    {
      id: 2,
      name: 'Angular: Cli',
      imageUrl: 'assets/images/cli.png',
      price: 0.99,
      code: 'ABC-123',
      duration: 90,
      rating:4.2,
      releaseDate: '02/02/2021'
    },
    {
      id: 3,
      name: 'Angular: Forms',
      imageUrl: 'assets/images/forms.png',
      price: 0.99,
      code: 'ABC-111',
      duration: 120,
      rating:4.7,
      releaseDate: '03/03/2021'
    },
    {
      id: 4,
      name: 'Angular: HTTP',
      imageUrl: 'assets/images/http.png',
      price: 0.99,
      code: 'ABC-222',
      duration: 90,
      rating:5.0,
      releaseDate: '04/04/2021'
    },
    {
      id: 5,
      name: 'Angular: Router',
      imageUrl: 'assets/images/router.png',
      price: 0.99,
      code: 'ABC-333',
      duration: 90,
      rating:4.4,
      releaseDate: '05/05/2021'
    }

    ]
  }

}
