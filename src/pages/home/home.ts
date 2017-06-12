import { Component } from '@angular/core';

//provider classımızı dahil ediyoruz
import { UnsplashServiceProvider } from '../../providers/unsplash-service/unsplash-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UnsplashServiceProvider]
})
export class HomePage {

  //datayı set edebileceğimiz bir değişken oluşturuyoruz.
  public images: any;

  constructor(public unsplashService: UnsplashServiceProvider /* servisimizi constructor metodumuza tanımlıyoruz */) {}

   //fonksiyonumuzu ekranımız yüklenirken çalıştırıyoruz.
  ionViewDidLoad(){
    this.loadImages();
  }
  loadImages(){
    //fonksiyonumuzu provider classımızdan çağırıp istek yapmasını istiyoruz.
    this.unsplashService.load().then(data => {
      this.images = data;
      console.log(data);
    });
    
  }


}
