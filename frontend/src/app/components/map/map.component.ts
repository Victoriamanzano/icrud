import { Component, OnInit } from '@angular/core';
import { MapService } from '../../core/services/map.service';
import Mapboxgl from 'mapbox-gl';
import { environment } from '../../core/environments/environment.prod';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map!: Mapboxgl.Map;
  markers: Mapboxgl.Marker[] = [];
  legendOptions: string[] = ['Info Point', 'Restaurant', 'Parking'];
  selectedCategories: string[] = ['Info Point'];

  constructor(public mapService: MapService) {}

  ngOnInit() {
    Mapboxgl.accessToken = environment.mapboxKey;

    this.map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [2.1551882, 41.3870506],
      zoom: 11,
    });

    this.map.on('load', () => {
      this.showMarkers();
    });
  }

  showMarkers() {
    this.mapService.getMarkers().subscribe(fields => {
      fields.forEach(field => {
        if (this.selectedCategories.includes(field.category)) {
          const popup = new Mapboxgl.Popup({ offset: 25 }).setText(field.title);
          let markerColor: string;

          switch(field.category) {
            case 'Parking':
              markerColor = 'blue';
              break;
            case 'Info Point':
              markerColor = 'green';
              break;
            case 'Restaurant':
              markerColor = 'red';
              break;
            default:
              markerColor = 'gray';
          }

          const marker = new Mapboxgl.Marker({
            color: markerColor
          })
            .setLngLat([field.longitude, field.latitude])
            .setPopup(popup)
            .addTo(this.map);

          this.markers.push(marker);
        }
      });
    });
  }

  updateMarkers() {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];
    this.showMarkers();
  }

toggleCategory(category: string) {
  if (this.selectedCategories.includes(category)) {
    this.selectedCategories = this.selectedCategories.filter(c => c !== category);
  } else {
     this.selectedCategories.push(category);
  }

  this.updateMarkers();
}

}


