import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input('order') order;
  @Input('showBtn') showBtn = false;

  constructor() { }

  ngOnInit(): void {
  }
  timeAgo(time) {
    moment.locale("ar")
    return moment(time).fromNow();
  }

}
