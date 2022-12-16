import { Component, OnInit } from '@angular/core';
declare const L: any;
import 'leaflet-search';
import { LatLng } from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  private map: any;
  private defaultLocation: any[] = [-23.455240751164286, -52.04187742091256];

  private defaultZoom = 15;
  private minZoom = 4;
  private maxZoom = 19;

  public marker: any;
  public lat = '';
  public lon = '';

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map').setView(this.defaultLocation, this.defaultZoom);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: this.maxZoom,
      minZoom: this.minZoom,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

  }
}
