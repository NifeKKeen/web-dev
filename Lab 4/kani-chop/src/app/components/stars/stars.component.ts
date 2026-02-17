import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [CommonModule], // Just in case
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {
  // Input: 0 to 5
  rating = input.required<number>();

  // Calculate width percentage: (3.5 / 5) * 100 = 70%
  fillWidth = computed(() => {
    const safeRating = Math.min(Math.max(this.rating(), 0), 5); // Clamp between 0-5
    return (safeRating / 5) * 100 + '%';
  });
}
