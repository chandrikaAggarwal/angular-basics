import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'star-rating',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
    
export class StarComponent implements OnChanges {
    starWidth = 75;
    @Input() rating: number;

    ngOnChanges() {
        this.starWidth = this.rating * 75 / 5;
    }
}