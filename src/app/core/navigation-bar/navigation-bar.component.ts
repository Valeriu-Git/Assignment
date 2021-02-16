import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // public onRegisterClick(): void {
  //   this.router.navigate(['/register']);
  // }
  //
  // public onLogoClick(): void {
  //   this.router.navigate(['']);
  // }
}
